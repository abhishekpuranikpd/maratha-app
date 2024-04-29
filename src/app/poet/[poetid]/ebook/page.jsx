import React from "react";
import { db } from "../../../../lib/db";
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
import PoetNav from "../../../components/poetnav";

const PoetEbook = async ({ params }) => {
  const poetid = params.poetid;
  const data = await db.Poet.findFirst({
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
      <div
        className="w-full rounded-lg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
        }}
      >
        <div className="">
          <div className="rounded-lg w-full shadow-md  overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                {/* Image */}
                <div className="p-4 md:pl-24 flex justify-center md:justify-start items-center">
                  <Avatar className="h-36 w-36 border border-white shadow-lg">
                    <AvatarImage src={data.image || undefined} />
                    <AvatarFallback className="text-4xl">
                      {data.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="p-2 md:pt-10">
                {/* Name */}
                <h2 className="text-3xl font-semibold text-center md:text-start text-white shadow-lg mb-2">
                  {data.name}
                </h2>
                {/* Location */}
                <p className="text-white text-center md:text-start mb-2">
                  {data.location}
                </p>
                {/* Born & Died Dates */}
                <div className="flex items-center text-white justify-center mb-4">
                  <span className="mr-2">
                    {data.borndate
                      ? new Date(data.borndate).toLocaleDateString()
                      : "Unknown"}
                  </span>
                  <span>
                    -{" "}
                    {data.dieddate
                      ? new Date(data.dieddate).toLocaleDateString()
                      : "Present"}{" "}
                    | {data.gender || "Unknown"}
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
        <div className="pb-2">
          <PoetNav poetid={poetid} />
    
        </div>
      </div>
      <div className="flex flex-col text-center w-full ">
         
         <h1 className="sm:text-3xl text-2xl font-serif font-semibold title-font pt-1 text-red-600">
E Books of {data.name} Will Be Adding Soon
   </h1>
   <hr
     className="w-48 h-1 mx-auto my-4 rounded border-collapse"
     style={{ backgroundColor: "red" }}
   />
 </div>
      </>
  )}
  export default PoetEbook