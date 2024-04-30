"use client"
import { useState } from 'react';
import Link from 'next/link';

const FooterBar = () => {
 


  return (
    <footer className="bg-slate-800 text-white font-sans font-semibold py-4 p-10 bottom-0">
            <div className="container mx-auto">
                <div className="justify-between items-center">
                    <div>
                        <p className="text-sm">&copy; {new Date().getFullYear()} Kavitva. All rights reserved.</p>
                        <p className="text-sm">Developed By Shivendu Infotech Pvt Ltd</p>
                    </div>
                   
                </div>
            </div>
        </footer>
  );
};

export default FooterBar;