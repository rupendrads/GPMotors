import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET /api/bookingconfig
// eslint-disable-next-line
export async function GET(request: Request) {
  try {
    const connection = await mysql.createConnection(connectionParams);

    const query = "SELECT * FROM bookingconfig";

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

// PUT /api/bookingconfig

export async function PUT(request: Request) {
  const data = await request.json();

  function formatTime(date: string | Date): string {
    const d = new Date(date);
    const hours = String(d.getHours()).padStart(2, "0");
    const mins = String(d.getMinutes()).padStart(2, "0");
    const secs = String(d.getSeconds()).padStart(2, "0");
    return `${hours}:${mins}:${secs}`;
  }

  try {
    const connection = await mysql.createConnection(connectionParams);

    const query = `
      UPDATE bookingconfig
      SET OfficeStartTime = ?, OfficeEndTime = ?, NoOfEmployees = ?, SlotGap = ?, LimitPerSlot = ?
      LIMIT 1
    `;

    const values = [
      formatTime(data.officeStartTime),
      formatTime(data.officeEndTime),
      data.noOfEmployees,
      data.slotGap,
      data.maxMOT, // map to LimitPerSlot
    ];

    const [result] = await connection.execute(query, values);
    connection.end();

    return NextResponse.json({
      status: "success",
      message: "Booking config updated",
      result,
    });
  } catch (error) {
    console.error("UPDATE error", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to update Configuration",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
