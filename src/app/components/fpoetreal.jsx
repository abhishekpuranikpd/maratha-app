import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Poetf = ({ poetData }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {poetData && poetData.length > 0 ? (
        poetData.map(data => (
          <div className="max-w-xs m-4" key={data.id}>
            <Avatar className="h-28 w-28 border border-white mx-auto">
              <AvatarImage src={data.image || undefined} />
              <AvatarFallback className="text-4xl">
                {data.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="p-2">
   
              <h2 className="text-2xl font-semibold text-center  text-black  mb-2">
                {data.name}
              </h2>
            
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">No featured poets found.</div>
      )}
    </div>
  );
};

export default Poetf;
