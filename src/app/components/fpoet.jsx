"use client"
import React, { useEffect, useState } from 'react';

// const fetchFeaturedPoet = async () => {
//   try {
//     const res = await fetch("/api/poet?isFeatured=true", {
//       method: "GET",
//     });
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     throw new Error("Something Went Wrong");
//   }
// };

const FeaturedPoet = ({poetData}) => {
  // const [poetData, setPoetData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchFeaturedPoet();
  //       setPoetData(data);
  //     } catch (error) {
  //       console.error(error.message);
  //       // Handle error state
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>; // You can replace this with a loading spinner or message
  // }

  return (
    <div className="flex flex-wrap md:flex justify-between md:p-2 rounded-full">
      {poetData && poetData.length >= 0 ? (
        poetData.map(poet => (
          <div className="w-full  p-3" key={poet.id}>
            <div className="rounded-lg  bg-opacity-100">
              <div className="text-center text-neutral-content rounded-lg h-full">
                <div className="h-full flex flex-col justify-center">
                  <p className="font-semibold p-4 text-black overflow-hidden overflow-ellipsis">
                    {poet.name||poet.description}
                  </p>
                  <p className="font-sans text-end mr-4 text-black pb-2">
                    {poet.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No featured poets found.</div>
      )}
    </div>
    
  );
}

export default FeaturedPoet;
