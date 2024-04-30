import Image from "next/image";
import HeroPage from "../app/components/hero"
import Featured from "../app/featured/home"
import { db } from "@/lib/db";

export default async function Home() {

  const posts = await db.Post.findMany({
    
  })

  

  return (
    <div className="">
    
<HeroPage/>
    <Featured/>
    <div>
      {posts.map((i)=>(
        <div key={i.id}> {i.description} </div>
      ))}
    </div>

   </div>
  );
}
