import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET /api/clientdetail
// eslint-disable-next-line
export async function GET(request: Request) {
  try {
    const connection = await mysql.createConnection(connectionParams);

    const query = `SELECT * FROM clientdetail`;

    const values: string[] = [];

    const [results] = await connection.execute(query, values);

    connection.end();

    return Response.json(results);
  } catch (err) {
    console.log("ERROR: API - ", (err as Error).message);

    const response = {
      error: (err as Error).message,
      returnedStatus: 200,
    };

    return NextResponse.json(response, { status: 200 });
  }
}

export const POST = async (request: Request) => {
  const params = await request.json();
  console.log(params);

  try {
    const connection = await mysql.createConnection(connectionParams);
    const query = `INSERT INTO clientdetail (Title, FirstName, LastName, Address1, Address2, PostCode, ContactNo, ServiceType, ServiceDate, CreationDate, RegistrationNo, Remarks) 
    VALUES ('${params.Title}', '${params.FirstName}',
    '${params.LastName}', '${params.Address1}', 
    '${params.Address2}', '${params.PostCode}', 
    '${params.ContactNo}', '${params.ServiceType}', 
    '${params.ServiceDate}','${params.CreationDate}',
    '${params.RegistrationNo}','${params.Remarks}')`;
    console.log("query", query);
    const [results] = await connection.execute(query);
    console.log("insert clientdetail result: ", results);
    connection.end();
    return Response.json({
      status: "success",
      message: "Client data submitted successfully",
      error: "",
      results: results,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: "error",
      message: "Failed to submit client data",
      error: error,
    });
  }
};
