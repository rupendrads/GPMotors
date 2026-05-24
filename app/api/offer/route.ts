import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/sharedCode/dbSettings";

const connectionParams: IDBSettings = GetDBSettings();

export interface OfferContent {
  id: number;
  heading_line1: string;
  heading_line2: string;
  description: string;
  original_price: number;
  offer_price: number;
  discount_percent: number;
  perks: string[];
  testimonial_text: string;
  testimonial_author: string;
  rating: number;
  review_count: number;
  cta_button_text: string;
  cta_button_link: string;
  phone_number: string;
  badge_text: string;
  image_url: string;
  is_active: boolean;
  show_delay_ms: number;
}

// SQL to create table if not exists
const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS offer_content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  heading_line1 VARCHAR(100) NOT NULL DEFAULT 'Your Car Deserves',
  heading_line2 VARCHAR(100) NOT NULL DEFAULT 'The Best.',
  description VARCHAR(500) NOT NULL DEFAULT 'Get a full professional service with 30% off as our thank-you for trusting G.P. Motors.',
  original_price DECIMAL(10, 2) NOT NULL DEFAULT 199.00,
  offer_price DECIMAL(10, 2) NOT NULL DEFAULT 139.00,
  discount_percent INT NOT NULL DEFAULT 30,
  perks TEXT,
  testimonial_text VARCHAR(255) DEFAULT 'Fast, honest, and genuinely friendly. My car''s never run better!',
  testimonial_author VARCHAR(100) DEFAULT 'Sarah M., Teddington',
  rating DECIMAL(2, 1) DEFAULT 4.9,
  review_count INT DEFAULT 380,
  cta_button_text VARCHAR(100) DEFAULT 'Claim Your Welcome Offer',
  cta_button_link VARCHAR(255) DEFAULT '/book-appointment',
  phone_number VARCHAR(20) DEFAULT '020 8943 4103',
  badge_text VARCHAR(50) DEFAULT 'Welcome Offer For Our Community',
  image_url VARCHAR(255) DEFAULT '/images/garage-hero.jpg',
  is_active TINYINT(1) DEFAULT 0,
  show_delay_ms INT DEFAULT 800,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

// Default data to insert
const INSERT_DEFAULT_SQL = `
INSERT INTO offer_content (
  heading_line1, heading_line2, description, original_price, offer_price, 
  discount_percent, perks, is_active
) VALUES (
  'Your Car Deserves', 'The Best.',
  'Get a full professional service with 30% off as our thank-you for trusting G.P. Motors.',
  199.00, 139.00, 30,
  '["50-point inspection — every detail covered", "Genuine parts & certified technicians", "Same-day turnaround on most services"]',
  0
)`;

// Ensure table exists and has data
async function ensureTableExists(connection: mysql.Connection) {
  // Create table if not exists
  await connection.execute(CREATE_TABLE_SQL);
  
  // Check if table has any data
  const [rows] = await connection.execute("SELECT COUNT(*) as count FROM offer_content");
  const count = (rows as { count: number }[])[0].count;
  
  // Insert default data if empty
  if (count === 0) {
    await connection.execute(INSERT_DEFAULT_SQL);
  }
}

// GET /api/offer - Get active offer content
export async function GET() {
  try {
    const connection = await mysql.createConnection(connectionParams);

    // Auto-create table if needed
    await ensureTableExists(connection);

    const query = "SELECT * FROM offer_content WHERE is_active = 1 LIMIT 1";
    const [results] = await connection.execute(query);

    connection.end();

    const rows = results as mysql.RowDataPacket[];
    
    if (rows.length === 0) {
      return NextResponse.json({ 
        error: "No active offer found",
        is_active: false 
      }, { status: 200 });
    }

    const offer = rows[0];
    
    // Parse perks JSON if it's a string
    if (typeof offer.perks === 'string') {
      try {
        offer.perks = JSON.parse(offer.perks);
      } catch {
        offer.perks = [];
      }
    }

    return NextResponse.json(offer);
  } catch (err) {
    console.log("ERROR: API - ", (err as Error).message);

    return NextResponse.json({
      error: (err as Error).message,
      is_active: false
    }, { status: 200 });
  }
}

// POST /api/offer - Update offer content
export async function POST(request: Request) {
  const data = await request.json();

  try {
    const connection = await mysql.createConnection(connectionParams);

    // Auto-create table if needed
    await ensureTableExists(connection);

    const query = `
      UPDATE offer_content
      SET 
        heading_line1 = ?,
        heading_line2 = ?,
        description = ?,
        original_price = ?,
        offer_price = ?,
        discount_percent = ?,
        perks = ?,
        testimonial_text = ?,
        testimonial_author = ?,
        rating = ?,
        review_count = ?,
        cta_button_text = ?,
        cta_button_link = ?,
        phone_number = ?,
        badge_text = ?,
        image_url = ?,
        is_active = ?,
        show_delay_ms = ?
      WHERE id = ?
    `;

    const perksJson = typeof data.perks === 'string' 
      ? data.perks 
      : JSON.stringify(data.perks || []);

    const values = [
      data.heading_line1,
      data.heading_line2,
      data.description,
      data.original_price,
      data.offer_price,
      data.discount_percent,
      perksJson,
      data.testimonial_text,
      data.testimonial_author,
      data.rating,
      data.review_count,
      data.cta_button_text,
      data.cta_button_link,
      data.phone_number,
      data.badge_text,
      data.image_url,
      data.is_active ? 1 : 0,
      data.show_delay_ms,
      data.id || 1
    ];

    const [result] = await connection.execute(query, values);
    connection.end();

    return NextResponse.json({
      status: "success",
      message: "Offer content updated",
      result,
    });
  } catch (error) {
    console.error("UPDATE error", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to update offer content",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
