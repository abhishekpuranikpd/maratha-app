import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";
import Heading from "@/components/ui/heading";
import AllCompo from "../components/allcompo"

export default async function HomeShayari() {
  const data = await db.Shayari.findMany({
    include: {
      poet:true
    }
  
  });

  return (
    <div className="container mx-auto mt-8 bg-yellow-500 rounded-md">
      {" "}
      
      <Heading name={"Shayaris"} />

  <Link href={`/shayari`}>
    <span className="font-sans text-2xl font-bold text-blue-600 rounded-lg container mx-auto flex justify-end ">
      See all{">"}
    </span>
  </Link>


      <div className="container flex justify-between">
        <AllCompo resultdata={data.slice(0, 6).reverse()} />
        
      </div>
   
    </div>
    
  );
}
