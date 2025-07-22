import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET /api/bookingconfig
export async function GET(request: Request) {
  console.log(request)
  try {
    console.log(connectionParams);
    const connection = await mysql.createConnection(connectionParams);

    const [rows] = await connection.execute("SELECT * FROM bookingconfig LIMIT 1");
    connection.end();

    if (Array.isArray(rows) && rows.length > 0) {
      const dbRow = rows[0] as any;

      // map DB → Form
      const configFormData = {
        officeStartTime: `1970-01-01T${dbRow.OfficeStartTime}`, // make it Date
        officeEndTime: `1970-01-01T${dbRow.OfficeEndTime}`,
        noOfEmployees: dbRow.NoOfEmployees,
        slotGap: dbRow.SlotGap,
        maxMOT: dbRow.LimitPerSlot, // map!
      };

      return NextResponse.json(configFormData);
    } else {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
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