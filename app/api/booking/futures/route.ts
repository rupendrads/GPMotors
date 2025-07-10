import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET /api/booking/futures
export async function GET(request: NextRequest) {
  try {
    const connection = await mysql.createConnection(connectionParams);

    // const query =
    //   `select * from appointments where bookingDate > curDate() order by BookingDate`;

    const query = `SELECT appointments.ID, appointments.BookingDate, appointments.BookingTime, 
appointments.FirstName, appointments.LastName, appointments.PostCode, appointments.Email,
appointments.Title, appointments.RegistrationNo, appointments.servicetype,
appointments.Comments, appointments.PhoneNo,
servicetypes.Type, servicetypes.Logic FROM appointments
INNER JOIN servicetypes ON appointments.ServiceType = servicetypes.ID
WHERE appointments.bookingDate >= curDate() order by appointments.BookingDate;`;

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
