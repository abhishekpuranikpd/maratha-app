import Image from "next/image";
import HeroPage from "../app/components/hero"
import Featured from "../app/featured/page"

export default async function Home() {

  

  return (
    <div className="container mx-auto w-full h-full">
    

    <Featured/>

   </div>
  );
}
