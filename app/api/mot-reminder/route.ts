import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET /api/mot-reminder
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    //const serviceType = searchParams.get("serviceType");
    const fromDate = searchParams.get("fromDate");
    const toDate = searchParams.get("toDate");
    const connection = await mysql.createConnection(connectionParams);

    // Query to get client details with SMS status from clientdetail table
    const query = `SELECT * FROM clientdetail WHERE (MONTH(ServiceDate) > MONTH(${fromDate}) OR (MONTH(ServiceDate) = MONTH(${fromDate}) AND DAY(ServiceDate) >= DAY(${fromDate}))) AND (MONTH(ServiceDate) < MONTH(${toDate}) OR (MONTH(ServiceDate) = MONTH(${toDate}) AND DAY(ServiceDate) <= DAY(${toDate}))) ORDER BY ServiceDate;`;
    console.log(query);

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
