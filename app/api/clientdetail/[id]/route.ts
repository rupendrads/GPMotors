import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

// GET: /api/clientdetail by Id
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  console.log(request);
  try {
    const id = (await params).id;
    const connection = await mysql.createConnection(connectionParams);

    const [results] = await connection.execute(
      "SELECT * FROM clientdetail WHERE ID = ?",
      [id]
    );
    connection.end();

    // eslint-disable-next-line
    if ((results as any[]).length === 0) {
      return NextResponse.json(
        { status: "error", message: "Client not found" },
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

// PUT: Update by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data = await request.json();
  //console.log(data);
  if (!id) {
    return Response.json(
      { status: "error", message: "Missing client ID" },
      { status: 400 }
    );
  }

  try {
    const connection = await mysql.createConnection(connectionParams);
    const query = `UPDATE clientdetail SET Title=?, FirstName=?, LastName=?, Address1=?, Address2=?, PostCode=?, ContactNo=?, ServiceType=?, ServiceDate=?, CreationDate=?, RegistrationNo=?, Remarks=? WHERE ID=?`;

    const values = [
      data.title || null,
      data.firstName || null,
      data.lastName || null,
      data.address1 || null,
      data.address2 || null,
      data.postCode || null,
      data.contactNo || null,
      data.serviceType || null,
      data.serviceDate ? data.serviceDate.slice(0, 10) : null, // convert to 'YYYY-MM-DD'
      data.creationDate ? data.creationDate.slice(0, 10) : null,
      data.registrationNo || null,
      data.remarks || null,
      id,
    ];
    console.log("Executing Query:\n", query);
    console.log("With Values:\n", values);

    const [results] = await connection.execute(query, values);
    console.log("update clientdetail result: ", results);
    connection.end();

    return NextResponse.json({
      status: "success",
      message: "Client data updated successfully",
      error: "",
      results: results,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: "error",
      message: "Failed to update client data",
      error: error,
    });
  }
}
