import { db } from '../../../../lib/db';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../lib/session';
export async function  GET(request){
    let data 
        try {
           
         data = await db.Poem.findUnique({where : {id:poemid}});
        } catch (error) {
            data = {success:false}
        }
        console.log(data);
        return NextResponse.json({data,success:true})
    }