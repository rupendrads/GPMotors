import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET: /api/booking/validatetimereg
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const bookingDate = searchParams.get("bookingDate");
  const bookingTime = searchParams.get("bookingTime");
  const registrationNo = searchParams.get("registrationNo");

  try {
    const connection = await mysql.createConnection(connectionParams);

    const query = `SELECT COUNT(*) AS count FROM appointments WHERE BookingDate=${bookingDate} AND 
    BookingTime=${bookingTime} AND RegistrationNo=${registrationNo}`;

    console.log("query", query);
    const [results] = await connection.execute(query);
    console.log("validate datetimereg result: ", results);
    connection.end();

    return Response.json(results);
  } catch (error) {
    console.log("ERROR: API - ", (error as Error).message);

    const response = {
      error: (error as Error).message,
      returnedStatus: 200,
    };

    return NextResponse.json(response, { status: 200 });
  }
}
