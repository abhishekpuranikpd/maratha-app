import React from 'react';
import { db } from '../../../lib/db';


const PoetView = async ({ params }) => {
  const poetid = params.poetid;
  const data = await db.Poet.findFirst({
    where: {
      id: poetid,
     },
    
  });

  return (
    
    <div className="bg-gray-700 min-h-screen">
     
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
              <h2 className="text-indigo-500 text-xs font-medium tracking-widest mb-4">
                {data.name}
              </h2>
              <h1 className="text-3xl font-medium text-gray-900 mb-6">
                {data.location}
              </h1>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoetView;
