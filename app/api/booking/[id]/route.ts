import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET: /api/booking/id
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  console.log(request);
  try {
    const id = (await params).id;
    const connection = await mysql.createConnection(connectionParams);

    const [results] = await connection.execute(
      "SELECT * FROM appointments WHERE ID = ?",
      [id]
    );
    connection.end();

    // eslint-disable-next-line
    if ((results as any[]).length === 0) {
      return NextResponse.json(
        { status: "error", message: "appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(results[0]);
  } catch (err) {
    console.log("ERROR: API - ", (err as Error).message);
    const response = {
      error: (err as Error).message,
      returnedStatus: 200,
    };
    return NextResponse.json(response, { status: 200 });
  }
}

// POST: /api/booking/id (for updating appointment)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data = await request.json();
  console.log(data);
  if (!id) {
    return Response.json(
      { status: "error", message: "Missing appointment ID" },
      { status: 400 }
    );
  }

  try {
    const connection = await mysql.createConnection(connectionParams);
    const query = `UPDATE appointments SET BookingDate=?, BookingTime=?, Title=?, FirstName=?, LastName=?, PostCode=?, Email=?, ServiceType=?, RegistrationNo=?, Comments=?, PhoneNo=? WHERE ID=?`;

    const values = [
      data.bookingDate || null,
      data.bookingTime || null,
      data.title || null,
      data.firstName || null,
      data.lastName || null,
      data.postCode || null,
      data.email || null,
      data.serviceType || null,
      data.registrationNo || null,
      data.comments || null,
      data.phoneNo || null,
      id,
    ];
    console.log("Executing Query:\n", query);
    console.log("With Values:\n", values);

    const [results] = await connection.execute(query, values);
    console.log("update appointment result: ", results);
    connection.end();

    return NextResponse.json({
      status: "success",
      message: "Appointment data updated successfully",
      error: "",
      results: results,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: "error",
      message: "Failed to update appointment data",
      error: error,
    });
  }
}
