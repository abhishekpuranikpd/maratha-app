import Image from "next/image";
import HeroPage from "../app/components/hero"
import Featured from "../app/featured/home"
import HomeBlog from "../app/blog/homeblog"
import { db } from "@/lib/db";
import HomeShayari from "../app/shayari/home"

import HomePoem from "../app/poem/home"

export default async function Home() {


  

  return (
    <div className="">
    
<HeroPage/>
    <Featured/>
    <HomeShayari/>
<HomePoem/>
<HomeBlog/>

   </div>
  );
}
