
import Link from 'next/link';


const FeaturedPoet = ({ poetData }) => {
  return (
    <div className="flex flex-wrap md:flex justify-between md:p-2 rounded-full">
      {poetData && poetData.length > 0 ? ( // Check if poetData is not null and has at least one item
        poetData.map((item) => (
          <div className="w-full p-3" key={item.id}>
            <div className="rounded-lg bg-opacity-100">
              <div className="text-center text-neutral-content rounded-lg h-full">
                <div className="h-full flex flex-col justify-center">
                  <p className="font-semibold p-4 text-black overflow-hidden overflow-ellipsis">
                    {item.description}
                  </p>
                  {item.poet && ( 
                    <p className="font-sans text-end mr-4 text-black pb-2">
                      <Link href={`/poet/${item.poet.id}`}>
                        {item.poet.name}
                      </Link>
                    </p>
                  )}
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
};

export default FeaturedPoet;





