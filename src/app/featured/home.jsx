import FeaturedPoet from "../components/fpoet";
import Poetf from "../components/fpoetreal";
import { db } from "../../lib/db";
import Heading from "@/components/ui/heading";
import Link from "next/link";

const Featured = async () => {
  const data = await db.Quote.findMany({
    where: {
      isfeatured: true,
    },
  });
  const poetresult = await db.poet.findMany({
    where: {
      isfeatured: true,
    },
  });
  const poemdata = await db.Poem.findMany({
    where: {
      isfeatured: true,
    },
  });
  const Shayaridata = await db.Shayari.findMany({
    where: {
      isfeatured: true,
    },
  });
  return (
    <div className="container mx-auto border-2 rounded-md shadow-md pt-4">
      <div className="flex flex-col text-center w-full ">
        <Heading name={"Featured Collections Of the Day"} />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-2 rounded-md  mb-4">
        <div class="flex h-full rounded-lg flex-wrap bg-red-400 ">
          <div class="w-full px-8 py-6">
            
        <Heading name={"Quotes"} />

            <FeaturedPoet poetData={data} />
          </div>
        </div>
        <div class="flex h-full rounded-lg flex-wrap ">
          <div class="w-full bg-yellow-400 px-8 py-6">
          <Heading name={"Poem"} />


            <FeaturedPoet poetData={poemdata} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-md gap-4 p-2 mb-4">
        <div class="flex h-full rounded-lg flex-wrap ">
          <div class="w-full px-8 py-6 bg-teal-400">
           <Heading name={"Shayari"}/>
            <FeaturedPoet poetData={Shayaridata} />
          </div>
        </div>
        <div class="flex h-full rounded-lg flex-wrap ">
          <div class="w-full px-8 py-6 bg-gray-300 rounded-md">
          {poetresult.map((poet) => (
              <Link key={poet.id} href={`/poet/${poet.id}`}>
               
                  <Poetf poetData={poetresult} />
              
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
