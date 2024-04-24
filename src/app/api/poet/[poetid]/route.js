import { getCurrentUser } from '../../../../../lib/session';
import { db } from '../../../../../lib/db';
import { NextResponse } from 'next/server';
import { Post } from '@prisma/client';

export async function PUT(request,{params}) {
  const id = params.poetid
  try {
    // const {title, description, category } = await request.json();
    const data = await request.formData();
  const image = await data.get("file");
  const name = await data.get("name");
  const borndate = await data.get("borndate");
  const dieddate = await data.get("dieddate");
  const gender = await data.get("gender");
  const location = await data.get("location");
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
  
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const existingPost = await db.poet.findFirst({
      where: {
        id,
        UserId: user.id,
      },
    });

    if (!existingPost) {
      return NextResponse.json({ error: 'Post not found or unauthorized' }, { status: 404 });
    }

    const updatedPost = await db.poet.update({
      where: { id },
      data: {    name,
        borndate,
        dieddate,
        gender,
        location, image: imageUrl},
    });

    return NextResponse.json({ result: 'Post updated successfully', success: true, updatedPost }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'An error occurred while updating the post' }, { status: 500 });
  }
}

export async function  GET(request){
  let data 
      try {
         
       data = await db.poet.findUnique({where : {id:poetid}});
      } catch (error) {
          data = {success:false}
      }
      console.log(data);
      return NextResponse.json({data,success:true})
  }

  export async function DELETE(request,{params}) {
    const id = params.poetid
    try {
      
      const user = await getCurrentUser();
  
      if (!user) {
        return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
      }
  
      // const existingPost = await db.Post.findFirst({
      //   where: {
      //     id,
      //     UserId: user.id,
      //   },
      // });
  
      // if (!existingPost) {
      //   return NextResponse.json({ error: 'Post not found or unauthorized' }, { status: 404 });
      // }
  
      const deletepoet = await db.poet.delete({
        where: { id },
       
      });
  
      return NextResponse.json({ result: 'Poet updated successfully', success: true, deletepoet }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'An error occurred while deleting the post' }, { status: 500 });
    }
  }
  