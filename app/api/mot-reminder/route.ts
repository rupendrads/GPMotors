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

    const query = `SELECT * FROM clientdetail WHERE ServiceDate >= ${fromDate} AND ServiceDate <= ${toDate}`;
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
