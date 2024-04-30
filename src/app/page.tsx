import Image from "next/image";
import HeroPage from "../app/components/hero"
import Featured from "../app/featured/home"
import HomeBlog from "../app/blog/homeblog"
import { db } from "@/lib/db";

export default async function Home() {


  

  return (
    <div className="">
    
<HeroPage/>
    <Featured/>
    
<HomeBlog/>
   </div>
  );
}
