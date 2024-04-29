import React from 'react';
import { db } from "../../lib/db"
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const fetchShayaris = async () => {
  try {
    const shayarisData = await db.Shayari.findMany({
     include : {
      poet :true,
     }
    });
    console.log(shayarisData);
    return shayarisData;
  } catch (error) {
    console.error('Error fetching shayaris:', error);
  }
};

export default async function Shayari() {
  const shayaris = await fetchShayaris();

  return (
    <div className="flex flex-wrap md:flex justify-between md:p-2 rounded-full">
    {shayaris.map(data => (
      <div key={data.id} className="w-full md:w-1/3 p-3">
        <div className="rounded-lg border-2 bg-opacity-100">
          <div className="text-center text-neutral-content rounded-lg h-full">
            <div className="h-full flex flex-col justify-center ">
             
              <p className="font-semibold p-4 text-black overflow-hidden overflow-ellipsis">
                {data.description}
              </p>
              <p className="font-sans text-end mr-4 text-black pb-2">
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
}
