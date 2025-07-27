import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET: /api/clientdetail - Fetch allClients
export async function GET() {
  try {
    const connection = await mysql.createConnection(connectionParams);
    const [rows]: any = await connection.execute("SELECT * FROM clientdetail");
    await connection.end();

    // Map ID to Id
    const results = rows.map((row: any) => ({
      ...row,
      Id: row.ID,
    }));

    return NextResponse.json(results);
  } catch (err) {
    console.log("ERROR: API - ", (err as Error).message);
    const response = {
      error: (err as Error).message,
      returnedStatus: 200,
    };
    return NextResponse.json(response, { status: 200 });
  }
}

//POST: Create new Client
export const POST = async (request: NextRequest) => {
  const params = await request.json();
  console.log(params);

  try {
    const connection = await mysql.createConnection(connectionParams);
    const query = `INSERT INTO clientdetail (Title, FirstName, LastName, Address1, Address2, PostCode, ContactNo, ServiceType, ServiceDate, CreationDate, RegistrationNo, Remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      params.title || null,
      params.firstName || null,
      params.lastName || null,
      params.address1 || null,
      params.address2 || null,
      params.postCode || null,
      params.contactNo || null,
      params.serviceType || null,
      params.serviceDate ? params.serviceDate.slice(0, 10) : null, // convert to 'YYYY-MM-DD'
      params.creationDate ? params.creationDate.slice(0, 10) : null,
      params.registrationNo || null,
      params.remarks || null,
    ];
    console.log("Executing Query:\n", query);
    console.log("With Values:\n", values);

    const [results] = await connection.execute(query, values);
    console.log("insert clientdetail result: ", results);
    await connection.end();

    return NextResponse.json({
      status: "success",
      message: "Client data submitted successfully",
      error: "",
      results: results,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: "error",
      message: "Failed to submit client data",
      error: error,
    });
  }
};

//DELETE: client by ID
export async function DELETE(request: NextRequest) {

  const { searchParams } = new URL(request.url);
  const ID = searchParams.get("id");

  if (!ID) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  try {
    const connection = await mysql.createConnection(connectionParams);
    const query = `DELETE FROM clientdetail WHERE ID = ?`;
    const [results] = await connection.execute(query, [ID]);
    connection.end();
    
    return NextResponse.json({
      status: "success",
      message: "Client data deleted successfully",
      error: "",
      results: results,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Failed to delete client data",
      error: error,
    });
  }
}
