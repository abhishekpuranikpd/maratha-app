"use client"
import Link from "next/link";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import Image from "next/image";

const Blogcompo = ({ blogdata }) => {
  return (
    <div className=" mx-auto w-full bg-slate-100">
    <div className="container mx-auto grid grid-cols-1  gap-4 md:grid-cols-3 xl:grid-cols-3 h-auto">
      {blogdata && blogdata.length > 0 ? (
        blogdata.map((item) => (
          <section className="py-8" key={item.id}>
            <div className="flex justify-center md:h-[500px]">
              <div className="w-full bg-white rounded-lg  shadow-md p-8">
                <Image
                  src={item.image}
                  width={600}
                  height={600}
                  alt={item.image}
                />

                <h1 className="text-1xl font-sans font-semibold  text-gray-900 mb-6">
                  {item.title}
                </h1>
                <p className="text-gray-700 leading-relaxed mb-5">
                  {item.description.slice(0, 100)}
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-indigo-500 text-xs font-medium tracking-widest mb-4">
                    {item.category}
                  </h2>
                  <Link
                    href={`/blog/${item.id}`}
                    className="text-indigo-500 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
                <br />
                <span className="text-gray-900 flex justify-between">
                  <span>Author: {item.user.name}</span>
                  <span>
                    <WhatsappShareButton
                      url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${item.id}`}
                      title={`${item.description}`}
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </span>
                </span>
              </div>
            </div>
          </section>
        ))
      ) : (
        <div>No Blogs found.</div>
      )}
    </div></div>
  );
};

export default Blogcompo;
