import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET /api/booking/futures
export async function GET(request: NextRequest) {
  try {
    const connection = await mysql.createConnection(connectionParams);

    const query =
      "select * from appointments where bookingDate > curDate() order by BookingDate";

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
