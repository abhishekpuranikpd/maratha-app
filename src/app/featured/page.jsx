import FeaturedPoet from "../components/fpoet";
import Poetf from "../components/fpoetreal";
import { db } from "../../lib/db";

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
    <div className="border-2 rounded-md shadow-md">
      <div className="flex flex-col text-center w-full ">
        <h1 className="sm:text-2xl text-2xl font-serif font-semibold title-font pt-1 text-red-600">
          Featured Collections Of Today
        </h1>
        <hr
          className="w-48 h-1 mx-auto my-4 rounded border-collapse"
          style={{ backgroundColor: "red" }}
        />
      </div>

      <div className="grid grid-cols-1  gap-4 p-4 mb-4">
        <div class="flex h-full rounded-lg flex-wrap ">
          <div class="w-full px-8 py-6">
            <div className="flex flex-col text-center w-full ">
              <h1 className="sm:text-3xl text-2xl font-serif font-semibold title-font pt-1 text-red-600">
                Quote
              </h1>
              <hr
                className="w-48 h-1 mx-auto my-4 rounded border-collapse"
                style={{ backgroundColor: "red" }}
              />
            </div>

            <FeaturedPoet poetData={data} />
          </div>
        </div>
        <div class="flex h-full rounded-lg flex-wrap ">
          <div class="w-full px-8 py-6">
            <div className="flex flex-col text-center w-full ">
              <h1 className="sm:text-3xl text-2xl font-serif font-semibold title-font pt-1 text-red-600">
                Poem
              </h1>
              <hr
                className="w-48 h-1 mx-auto my-4 rounded border-collapse"
                style={{ backgroundColor: "red" }}
              />
            </div>

            <FeaturedPoet poetData={poemdata} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  gap-4 p-4 mb-4">
        <div class="flex h-full rounded-lg flex-wrap ">
          <div class="w-full px-8 py-6">
            <div className="flex flex-col text-center w-full ">
              <h1 className="sm:text-3xl text-2xl font-serif font-semibold title-font pt-1 text-red-600">
                Shayari
              </h1>
              <hr
                className="w-48 h-1 mx-auto my-4 rounded border-collapse"
                style={{ backgroundColor: "red" }}
              />
            </div>
            <FeaturedPoet poetData={Shayaridata} />
          </div>
        </div>
        <div class="flex h-full rounded-lg flex-wrap ">
          <div class="w-full px-8 py-6">
            <div className="flex flex-col text-center w-full ">
              <h1 className="sm:text-3xl text-2xl font-serif font-semibold title-font pt-1 text-red-600">
                Poet
              </h1>
              <hr
                className="w-48 h-1 mx-auto my-4 rounded border-collapse"
                style={{ backgroundColor: "red" }}
              />
            </div>

            <Poetf poetData={poetresult} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
