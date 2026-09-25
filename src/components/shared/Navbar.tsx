'use client';

import navLogo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { LibraryContext } from "@/context/LibraryProvider";

const Navbar = () => {

  const {addedTodaysPlan, addedAsSave} = useContext(LibraryContext)
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link href={"/"}
        className={pathname === "/" ? "text-[#C2F800] font-bold bg-[#1a2312] border border-gray-600" : ""}
        >Workouts</Link>
      </li>
      <li></li>
      <li>
        <Link href={"/myPlan"}
        className={pathname === "/myPlan" ? "text-[#C2F800] font-bold bg-[#1a2312] border border-gray-600" : ""}
        >My Plan</Link>
      </li>
    </>
  );

  return (
    <div className="border-b border-gray-600">
      <div className="container mx-auto navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              
            </ul>
          </div>
            <Link href={"/"} 
            className="flex items-center gap-1">
                <Image
                src={navLogo}
                alt="Nav Logo"
                width={30}
                height={30}
                />
                <h3 className="text-lg font-bold">FITLOG</h3>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {links}

          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5">
          <Link href={"/myPlan"} className="flex gap-1">
            <p>Plan</p>
            <p className="bg-[#C2F800] rounded-full px-2 text-black font-bold">{addedTodaysPlan.length}</p>
          </Link>

          <Link href={"/myPlan"} className="flex gap-1">
            <p>Saved</p>
            <p className="border border-gray-400 rounded-full px-2 font-bold">{addedAsSave.length}</p>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
