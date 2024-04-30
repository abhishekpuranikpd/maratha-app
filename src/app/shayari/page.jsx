import React from 'react';
import { db } from "../../lib/db"
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Featured from '../featured/page';
import Heading from "@/components/ui/heading"

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
    return [];
  }
};

export default async function Shayari() {
  const shayaris = await fetchShayaris();

  return (
    <div>
    <div className="container w-full flex flex-col md:flex-row gap-8 py-6">
  
      <div className="md:w-3/4 md:p-2 border-2 rounded-md shadow-md">  
        <Heading name={"Shayaris"}/>
        <div className="flex flex-wrap">
          {shayaris.map((data) => (
            <div key={data.id} className="w-full md:w-1/3 p-3">
              <div className="rounded-lg border-2 bg-opacity-100">
                <div className="text-center text-neutral-content rounded-lg md:h-[200px] bg-gray-100">
                  <div className="h-full flex flex-col justify-center">
                    <p className="font-semibold p-4 text-black overflow-hidden overflow-ellipsis">
                      {data.description}
                    </p>
                    <p className="font-sans text-end mr-4 text-black pb-2">
                      {data.poet && (
                        <Link href={`/poet/${data.poet.id}`}>
                          {" "}
                          - {data.poet.name}
                        </Link>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      <div className="md:w-1/4">
        <Featured />
      </div>
    </div>
  </div>
  
  );
}
