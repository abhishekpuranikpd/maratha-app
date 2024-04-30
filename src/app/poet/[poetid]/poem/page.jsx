import React from 'react';
import { db } from '../../../../lib/db';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import PoetNav from "../../../components/poetnav";
import Heading from '@/components/ui/heading';
const PoetPoemView = async ({ params }) => {
  const poetid = params.poetid;
  const data = await db.Poet.findFirst({
    where: {
      id: poetid,
    },
    include: {
     Poem: true
    }
  });

  return (
<>
<div className="w-full"
     style={{
       backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
       backgroundSize: 'cover',

     }}>

  <div className="">
    <div className="rounded-lg w-full shadow-md  overflow-hidden">
      <div className="md:flex">
        
        <div className="md:flex-shrink-0">
          {/* Image */}
          <div className="p-4 md:pl-24 flex justify-center md:justify-start items-center">
            <Avatar className="h-48 w-48 border border-white shadow-lg">
              <AvatarImage src={data.image || undefined} />
              <AvatarFallback className="text-4xl">
                {data.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="p-2 md:pt-20">
          {/* Name */}
          <h2 className="text-3xl font-semibold text-center md:text-start text-white shadow-lg mb-2">
            {data.name}
          </h2>
          {/* Location */}
          <p className="text-white text-center md:text-start mb-1">{data.location}</p>
          {/* Born & Died Dates */}
          <div className="flex items-center text-white mb-4 justify-center">
            <span className="mr-2 text-center md:text-start">
             {data.borndate ? new Date(data.borndate).toLocaleDateString() : 'Unknown'}
            </span>
            <span className='text-center md:text-start'>
             -  {data.dieddate ? new Date(data.dieddate).toLocaleDateString() : 'Present'} | {data.gender || 'Unknown'}
            </span>
          </div>
          {/* Gender */}
          {/* <p className="text-white mb-4">
            Gender: {data.gender || 'Unknown'}
          </p> */}
          {/* Featured */}
          {/* {data.isfeatured && (
            <p className="text-green-500 mb-4">Featured Poet</p>
          )} */}
        </div>

        
      </div>
    </div>
  </div>

</div>
{/* Shayari */}
<div className="pb-2">
          <PoetNav poetid={poetid} />
        </div>
        <Heading name={"Poems"}/> 
<div className="grid grid-cols-1 p-2 gap-4 md:grid-cols-3 xl:grid-cols-3">

    {data.Poem.map(data => (
      <div key={data.id} className="w-full  p-3 ">
        <div className="rounded-lg border-2 bg-opacity-100">
          <div className="text-center text-neutral-content rounded-lg h-full ">
            <div className="h-full flex flex-col justify-center shadow-lg  ">
             
              <p className="font-semibold p-4 text-black overflow-hidden overflow-ellipsis">
                {data.description}
              </p>
              <p className="font-sans text-end mr-4 text-black pb-2">
             - {data.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
{/*  */}

      </>
  );
};

export default PoetPoemView;
