"use client"
import Link from "next/link";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import Image from "next/image";

const AllCompo = ({ resultdata }) => {
  return (
    <div className="mx-auto w-full">
    <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3 h-auto">
      {resultdata && resultdata.length > 0 ? (
        resultdata.map((item) => (
          <div key={item.id} className="w-full p-3">
            
            <div className="rounded-lg border-2 bg-opacity-100">
              <div className="text-center text-neutral-content rounded-lg md:h-[200px] bg-gray-100 ">
                <div className="h-full flex flex-col justify-center ">
                <span>
                    <WhatsappShareButton
                      url={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
                      title={`${item.description}`}
                      separator="::From Kavitva "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </span>
                  <p className="font-semibold p-4 text-black overflow-hidden overflow-ellipsis">
                    {item.description}
                  </p>
                  <p className="font-sans text-end mr-4 text-black pb-2">
                    {item.poet && (
                      <Link href={`/poet/${item.poet.id}`}>
                        {" "}
                        - {item.poet.name}
                      </Link>
                    )}
                      
                  </p>
               
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Not found.</div>
      )}
    </div>
  </div>
  
  );
};

export default AllCompo;
