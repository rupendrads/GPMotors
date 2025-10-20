import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET: /api/clientdetail/iscontactexist
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const contactNo = searchParams.get("contactno");

  try {
    const connection = await mysql.createConnection(connectionParams);

    const query = `SELECT * FROM clientdetail WHERE ContactNo=${contactNo}`;

    console.log("query", query);
    const [results] = await connection.execute(query);
    console.log("is contact no exist result: ", results);
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
