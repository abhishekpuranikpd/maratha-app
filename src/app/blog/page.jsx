import { getCurrentUser } from "../../lib/session";
import React from "react";
import { redirect } from "next/navigation";
// import Navbar from "../../components/navbar"
import { db } from "../../lib/db";
import Link from "next/link";
import Image from 'next/image'

async function getposts() {
  const data = await db.Post.findMany({
    include: {
      user: true,
    },
  });
  return data;
}

const Dashboard = async () => {
  const user = await getCurrentUser();

  
  const posts = await getposts();

  return (
    <div>
      <div className=" min-h-screen container mx-auto ">
        {/* <Navbar /> */}
<div className="grid grid-cols-1 p-2 gap-4 md:grid-cols-3 xl:grid-cols-3">
            {posts.map((post) => (
            <section className="py-8" key={post.id}>
              <div className="flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
                  <Image
                    src={post.image}
                    width={600} 
                    height={600}
                    alt={post.image}
                  />

                  <h1 className="text-3xl font-medium text-gray-900 mb-6">
                    {post.title}
                  </h1>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {post.description.slice(0, 100)}
                  </p>
                  <div className="flex justify-between items-center">
                    <h2 className="text-indigo-500 text-xs font-medium tracking-widest mb-4">
                      {post.category}
                    </h2>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-indigo-500 hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                  <br />
                  <span className="text-gray-900">
                    Author: {post.user.name}
                  </span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;