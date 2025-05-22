import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

// export async function GET(request: Request) {
//   const connectionParams = GetDBSettings();
//   console.log(request);
//   //console.log(process.env);
//   console.log(connectionParams.host);
//   console.log(connectionParams.port);
//   console.log(connectionParams.user);
//   console.log(connectionParams.password);
//   console.log(connectionParams.database);
//   const results = {
//     message: "Hello World!",
//   };

//   return NextResponse.json(results);
// }

const connectionParams: IDBSettings = GetDBSettings();

export async function GET(request: Request) {
  try {
    const connection = await mysql.createConnection(connectionParams);

    const query = "SELECT * FROM broker";

    const values: string[] = [];

    const [results] = await connection.execute(query, values);

    connection.end();

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
