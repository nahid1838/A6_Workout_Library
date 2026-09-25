'use client';

import { LibraryContext } from "@/context/LibraryProvider";
import Link from "next/link";
import { useContext } from "react";

const NavPlanAndSave = () => {

    const {addedTodaysPlan, addedAsSave} = useContext(LibraryContext)

    return (
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
    );
};

export default NavPlanAndSave;