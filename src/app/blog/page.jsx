import { getCurrentUser } from "../../lib/session";
import React from "react";
import { redirect } from "next/navigation";
// import Navbar from "../../components/navbar"
import { db } from "../../lib/db";
import Link from "next/link";
import Image from 'next/image'

import Blogcompo from "../components/blogcompo";


 
const Dashboard = async () => {

  const data = await db.Post.findMany({
    include: {
      user: true,
    },
  });
  return (
    <div>
      <div className=" min-h-screen container mx-auto ">
        {/* <Navbar /> */}
<div className="">
            
        <Blogcompo blogdata={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;