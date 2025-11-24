import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

export interface UpdateSMSStatusRequest {
  client_id: number;
  status: 'success' | 'failed' | 'pending';
}

// POST /api/update-sms-status - Update SMS status for a client
export async function POST(request: NextRequest) {
  try {
    const body: UpdateSMSStatusRequest = await request.json();
    const { client_id, status } = body;

    const connection = await mysql.createConnection(connectionParams);

    const query = `
      UPDATE clientdetail 
      SET SMS_Status = ?, SMS_Timestamp = NOW() 
      WHERE ID = ?
    `;
    
    await connection.execute(query, [status, client_id]);
    connection.end();

    return NextResponse.json({ 
      success: true, 
      message: "SMS status updated successfully" 
    });

  } catch (err) {
    console.log("ERROR: Update SMS Status API - ", (err as Error).message);
    
    return NextResponse.json({
      error: (err as Error).message,
      returnedStatus: 500,
    }, { status: 500 });
  }
}