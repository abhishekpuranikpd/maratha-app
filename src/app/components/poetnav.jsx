"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";

const PoetNav = ({ poetid }) => {
  const router = useRouter();

  return (
    <nav className="bg-white p-4 border border-b-2 rounded-2xl container mx-auto w-full h-full">
      <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-12 ml-1 md:ml-60 pt-1 font-semibold">
        <Link href={`/poet/${poetid}`}>
          <span className="text-red-700 underline active:text-red-500">
            All
          </span>
        </Link>
        <Link href={`/poet/${poetid}/shayari`}>
          <span className="hover:text-red-700 hover:underline">Shayari</span>
        </Link>
        <Link href={`/poet/${poetid}/poem`}>
          <span className="hover:text-red-700 hover:underline">Poems</span>
        </Link>
        <Link href={`/poet/${poetid}/info`}>
          <span className="hover:text-red-700 hover:underline">Info</span>
        </Link>
        <Link href={`/poet/${poetid}/ebook`}>
          <span className="hover:text-red-700 hover:underline">E-Books</span>
        </Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default PoetNav;
