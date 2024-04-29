import React from "react";
import { db } from "../../lib/db";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Search from "@/components/ui/search"

const fetchPoets = async ({name}) => {
  try {
   let filters ={}
  //  let genderfilter ={}
if(name){
  filters ={ OR :[{name:{contains :name,mode: "insensitive"}}]}
}
// if(gender){
//   genderfilters = {  gender:"MALE"}
// }

    const poetsData = await db.Poet.findMany({
      where :{
     ...filters,
      }
    });

    return poetsData;
  } catch (error) {
    console.error("Error fetching poets:", error);
  }
};

export default async function Poet({searchParams}) {

const {query} = searchParams;

  const poets = await fetchPoets({name:query});

  return (
    <div className="container mx-auto h-full w-full">
      <Search byname={"name"}/>
      <div
          className="grid grid-cols-1 p-2 gap-4 md:grid-cols-3 xl:grid-cols-3"
        >
      {poets.map((data) => (
      
          <Link key={data.id} href={`poet/${data.id}`} >
            <div className="group flex cursor-pointer flex-col justify-between rounded-lg border bg-white p-4 shadow-lg transition duration-150 ease-in-out hover:border-indigo-500 hover:bg-gray-100 hover:shadow">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-white ">
                    <span aria-hidden="true">
                      <Avatar className="rounded-md border text-blue-500 bg-red-500">
                        <AvatarImage src={data.image} />
                        {/* <AvatarFallback className={cn(course.isActive ? "text-blue-500" : "bg-red-500 text-white")}>{course.name.charAt(0)}</AvatarFallback> */}
                      </Avatar>
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="truncate text-sm font-medium text-gray-900 xl:text-lg">
                      {data.name}
                    </p>
                    <p className="mt-1  cursor-default truncate text-xs text-gray-500">
                      Born :
                      {data.borndate
                        ? new Date(data.borndate).toLocaleDateString()
                        : "Unknown"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
      
      ))}
        </div>
    </div>
  );
}
