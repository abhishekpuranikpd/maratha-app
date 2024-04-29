"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "../../lib/db";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newsLink, setNewsLink] = useState(null);
  const pathname = usePathname()
  // State to store the news link

  const navlinks = [
    {
      title: "Home",
      link: "/",
    },
    { title: "Shayaris", link: "/shayari", },
    { title: "Poets", link: "/poet" },
    { title: "Poems", link: "/poem" },
    { title: "Quotes", link: "/quote" },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-20 w-full bg-white border border-b-2">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between pt-1">
        <Link href="/">
          <span className="flex cursor-pointer items-center rtl:space-x-reverse">
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-red-600 p-2">
              KAVITVA
            </span>
          </span>
        </Link>
        <div className="hidden space-x-6 rtl:space-x-reverse md:order-2 md:flex md:space-x-4">

          {navlinks.map ((nav)=>(
            <Link href={nav.link} key={nav.link}>
            <span className={cn("cursor-pointer font-semibold text-black p-4 rounded-lg hover:bg-slate-100 dark:text-black",pathname==nav.link&& "text-red-700")}>
       {nav.title}
            </span>
          </Link>
          ))}
          
         
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:hidden md:space-x-0">
          <button
            onClick={toggleDrawer}
            className="block p-2 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-gray-900 dark:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-900 dark:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } fixed top-0 z-30 h-full w-1/2  transition-all duration-300 ease-in-out  md:hidden`}
        >
          <div className="p-4 bg-white h-full">
            <Link href="/">
              <span className="flex cursor-pointer items-center rtl:space-x-reverse">
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-red-600 p-2">
                  KAVITVA
                </span>
              </span>
            </Link>
            <hr className="w-auto h-1 mx-auto my-4  border-0 rounded md:my-10 dark:bg-yellow-400" />
            <ol className="flex flex-col space-y-4 pt-6 ">
              {/* Render menu items in the drawer for small screens */}
              <li>
                <Link href="/">
                  <span className="cursor-pointer p-4 rounded-lg hover:bg-slate-100 dark:text-black">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/poet">
                  <span className="cursor-pointer p-4 rounded-lg hover:bg-slate-100 dark:text-black">
                    Poets
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/poem">
                  <span className="cursor-pointer p-4 rounded-lg hover:bg-slate-100 dark:text-black">
                    Poems
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/shayari">
                  <span className="cursor-pointer p-4 rounded-lg hover:bg-slate-100 dark:text-black">
                    Shayaris
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/quote">
                  <span className="cursor-pointer p-4 rounded-lg hover:bg-slate-100 dark:text-black">
                    Quotes
                  </span>
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* {newsLink && (
        <marquee behavior="scroll" direction="left">
          <Link href={newsLink.nlink}>
            <a className="bg-red-500 text-black rounded-md px-2">{newsLink.name}</a>
          </Link>
        </marquee>
      )} */}
    </nav>
  );
};

export default NavBar;
