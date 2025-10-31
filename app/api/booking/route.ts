import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET /api/booking
export async function GET(request: Request) {
  console.log(request);
  try {
    const connection = await mysql.createConnection(connectionParams);

    const query = `SELECT * FROM appointments`;

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
    const query = `INSERT INTO appointments (BookingDate, BookingTime, Title, FirstName, 
    LastName, Email, PostCode, RegistrationNo, ServiceType, Comments, PhoneNo, ContactStatus) 
    VALUES ('${params.BookingDate}', '${params.BookingTime}',
    '${params.Title}', '${params.FirstName}',
    '${params.LastName}', '${params.Email}',
    '${params.PostCode}', '${params.RegistrationNo}',
    '${params.ServiceType}', '${params.Comments}','${params.PhoneNo}','${params.ContactStatus}')`;
    console.log("query", query);
    const [results] = await connection.execute(query);
    console.log("insert appointment result: ", results);
    connection.end();
    return Response.json({
      status: "success",
      message: "Appointment booked successfully",
      error: "",
      results: results,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: "error",
      message: "Failed to book appointment",
      error: error,
    });
  }
};
