import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { getCurrentUser } from "../../../lib/session";

export async function GET(request) {
    try {
      const data = await db.Quote.findMany({where:{isfeatured:true}});
      return NextResponse.json({ data, success: true });
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch Quotes", success: false }, { status: 500 });
    }
  }

export async function POST(request) {
    const data = await request.formData();
    const description = await data.get("description");
    const category = await data.get("category");
    const isfeatured = await Boolean(data.get("isfeatured"));
  
    try {
      // Create Shayari in the database
      const Shayari = await db.Quote.create({
        data: {
          description,
          category,
          isfeatured,
         
        },
      });
  
      return NextResponse.json(
        { result: "New Quote added", success: true, Shayari },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to create Quote", success: false },
        { status: 500 }
      );
    }
  }
  