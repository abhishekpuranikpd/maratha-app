import { NextResponse } from "next/server";
import { Post } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";

import { db } from "../../../lib/db";
import { getCurrentUser } from "../../../lib/session";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET(request) {
  let data;
  try {
    data = await db.post.findMany();
  } catch (error) {
    data = { success: false };
  }
  console.log(data);
  return NextResponse.json({ data, success: true });
}

export async function POST(request) {
  const data = await request.formData();
  const image = await data.get("file");
  const title = await data.get("title");
  const description = await data.get("description");
  const category = await data.get("category");

  if (!image) {
    throw new Error("image is required");
  }

  const fileBuffer = await image.arrayBuffer();

  var mime = image.type;
  var encoding = "base64";
  var base64Data = Buffer.from(fileBuffer).toString("base64");
  var fileUri = "data:" + mime + ";" + encoding + "," + base64Data;

  const uploadToCloudinary = () => {
    return new Promise((resolve, reject) => {
      var result = cloudinary.uploader
        .upload(fileUri, {
          invalidate: true,
        })
        .then((result) => {
          console.log(result);
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const result = await uploadToCloudinary();

  let imageUrl = result.secure_url;

  //   const { title, description, category } = await request.json();
  const user = await getCurrentUser();
  console.log(user);

  console.log(title, "Post");

  const post = await db.Post.create({
    data: { title, description, category, UserId: user.id, image: imageUrl },
  });

  return NextResponse.json(
    { result: "New blog Posted", success: true, post },
    { status: 200 }
  );
}