const Heading = ({ name }) => {
  return <>
    <div className="flex flex-col text-center w-full ">
         
         <h1 className="sm:text-2xl text-2xl font-sans font-semibold title-font pt-1 text-black">
{name}
   </h1>
   <hr
     className="w-11 h-1 mx-auto my-4 rounded border-collapse"
     style={{ backgroundColor: "red" }}
   />
 </div>
  </>;
};

export default Heading;