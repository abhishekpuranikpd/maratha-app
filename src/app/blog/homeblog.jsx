import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";
import Heading from "@/components/ui/heading";
import Blogcompo from "../components/blogcompo";

export default async function HomeBlog() {
  const data = await db.Post.findMany({
    include: {
      user: true,
    },
  });

  return (
    <div className=" rounded-md  mt-8 bg-slate-100">
      {" "}
      
      <Heading name={"Recent Blogs"} />

  <Link href={`/blog`}>
    <span className="font-sans text-2xl font-bold text-blue-600 rounded-lg container mx-auto flex justify-end ">
      See all{">"}
    </span>
  </Link>


      <div className="flex justify-between">
        <Blogcompo blogdata={data.slice(0, 3).reverse()} />
        
      </div>
   
    </div>
    
  );
}
