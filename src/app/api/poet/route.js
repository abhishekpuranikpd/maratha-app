import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { getCurrentUser } from "../../../lib/session";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET(request) {
  try {
    const data = await db.poet.findMany();
    return NextResponse.json({ data, success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch poets", success: false }, { status: 500 });
  }
}

export async function POST(request) {
  const data = await request.formData();
  const image = await data.get("file");
  const name = await data.get("name");
  const borndate = await data.get("borndate");
  const dieddate = await data.get("dieddate");
  const gender = await data.get("gender");
  const location = await data.get("location");

  // Validate form data
  if (!image || !name || !borndate || !dieddate || !gender || !location) {
    return NextResponse.json({ error: "All fields are required", success: false }, { status: 400 });
  }

  // Handle file upload to Cloudinary
  let imageUrl;
  try {
    const fileBuffer = await image.arrayBuffer();
    const mime = image.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");
    const fileUri = "data:" + mime + ";" + encoding + "," + base64Data;

    const result = await cloudinary.uploader.upload(fileUri, { invalidate: true });
    imageUrl = result.secure_url;
  } catch (error) {
    return NextResponse.json({ error: "Failed to upload image to Cloudinary", success: false }, { status: 500 });
  }

  // Create poet in the database
  try {
    const poet = await db.poet.create({
      data: {
        name,
        borndate:new Date(borndate),
        dieddate:new Date(dieddate) ,
        gender,
        location,
        image: imageUrl,
      },
    });
    return NextResponse.json({ result: "New poet added", success: true, poet }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Failed to create poet", success: false }, { status: 500 });

  }
}
