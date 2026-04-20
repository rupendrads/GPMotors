import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// POST: /api/booking/[id]/delete (for deleting appointment using POST instead of DELETE)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  console.log(request);
  const id = (await params).id;

  if (!id) {
    return NextResponse.json(
      { status: "error", message: "Missing appointment ID" },
      { status: 400 }
    );
  }

  try {
    const connection = await mysql.createConnection(connectionParams);

    // Delete the appointment and free the slot
    const deleteQuery = `DELETE FROM appointments WHERE ID = ?`;
    const [deleteResults] = await connection.execute(deleteQuery, [id]);

    connection.end();

    return NextResponse.json({
      status: "success",
      message: "Appointment deleted successfully",
      results: deleteResults,
    });
  } catch (error) {
    console.log("Error in DELETE API:", error);
    return NextResponse.json({
      status: "error",
      message: "Failed to delete appointment",
      error,
    });
  }
}
