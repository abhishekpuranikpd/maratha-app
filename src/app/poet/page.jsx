
import React from 'react';
import { db } from "../../lib/db"
import Link from 'next/link';

const fetchPoets = async () => {
   try {
     const poetsData = await db.Poet.findMany({});
   
  return poetsData
   } catch (error) {
    
     console.error('Error fetching poets:', error);
   }
 };


export default async function Poet() {


   const poets = await  fetchPoets();
  


  return (
    <div className="bg-orange-500">
      {poets.map(poet => (  <h1 key={poet.id}><Link href={`/poet/${poet.id}`} >{poet.name}</Link></h1>
       
      ))}
    </div>
  );
}
