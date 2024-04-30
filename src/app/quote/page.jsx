import React from 'react';
import { db } from "../../lib/db"
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Featured from '../featured/page';
import Heading from '@/components/ui/heading';

import AllCompo from "../components/allcompo"


   

export default async function Quote() {
  const quotedata = await db.Quote.findMany({
     
  });

  return (
    <div>
    <div className=" container w-full flex flex-col md:flex-row gap-8 py-6">

      <div className=" md:w-3/4 border-2 rounded-md shadow-md">  
        <Heading name={"Quotes"}/><div className="flex flex-wrap ">
     
   
        <AllCompo resultdata={quotedata}/>
   </div>{" "}</div>
      
      <div className="md:w-1/4"> <Featured /></div>
     </div>
     </div>
  
  );
}
