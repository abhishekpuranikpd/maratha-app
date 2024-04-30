import React from "react";
import { db } from "../../../lib/db";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PoetNav from "../../components/poetnav";
import Heading from "@/components/ui/heading";
import SinglePoetView from "../../components/poet"

const PoetView = async ({ params }) => {
  const poetid = params.poetid;
  const data = await db.Poet.findUnique({
    where: {
      id: poetid,
    },
    include: {
      Shayari: true,
      Poem: true,
    },
  });

  return (
    <>
     <SinglePoetView singlepoetdata={data}/>
      <div className="container mx-auto w-full h-full">
      <div className="pb-2">
          <PoetNav poetid={poetid} />
        </div>
      <div className="">
        {" "}
        <Heading name={"Shayari"}/>
        <div className="flex flex-wrap md:flex justify-between p-2 md:p-6">
          {data.Shayari.slice(0, 10).map((data) => (
            <div key={data.id} className="w-full md:w-1/3 p-3 ">
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
      </div>
      

      <div className="pt-4 ">
     <Heading name={"Poems"}/>
 
 <div className="flex flex-wrap md:flex justify-between p-2 md:p-6 rounded-md shadow-md border border-b-2">
        {data.Poem.slice(0, 10).map((data) => (
          <div key={data.id} className="w-full md:w-1/3 p-3 ">
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
      </div>
      </div>
    </>
  );
};

export default PoetView;
