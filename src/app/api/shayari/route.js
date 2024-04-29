import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { getCurrentUser } from "../../../lib/session";
export async function GET(request) {
  try {
    const data = await db.Shayari.findMany({where:{isfeatured:true}});
    return NextResponse.json({ data, success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch poets", success: false },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const data = await request.formData();
  const description = await data.get("description");
  const category = await data.get("category");
  const poetId = await data.get("poetId");
  const isfeatured = await Boolean(data.get("isfeatured"));

  try {
    // Create Shayari in the database
    const Shayari = await db.Shayari.create({
      data: {
        description,
        category,
        isfeatured,
        poet: {
          connect: { id: poetId }, // Use the existing poet's ID to connect the Shayari
        },
      },
    });

    return NextResponse.json(
      { result: "New Shayari added", success: true, Shayari },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create Shayari", success: false },
      { status: 500 }
    );
  }
}
