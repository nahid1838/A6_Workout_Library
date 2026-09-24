"use client";

import { LibraryContext } from "@/context/LibraryProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiFillFire } from "react-icons/ai";
import { LuClock2 } from "react-icons/lu";
import { MdStar } from "react-icons/md";

const TodaysPlan = () => {
  const { addedTodaysPlan } = useContext(LibraryContext);

  return (
    <>
      <div>
        {addedTodaysPlan.map((library) => {
          return (
            <div key={library.id}>
              <div className="flex justify-between items-center bg-[#232732] px-5 py-4 rounded-2xl">
                <div className="flex items-center gap-8">
                  <div className="relative w-[180px] h-[100px]">
                    <Image
                      src={library.image}
                      alt="Library Image"
                      fill
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <div>
                        <h3 className="text-xl font-bold scale-y-120">{library.name.toUpperCase()}</h3>
                        <p>{library.equipment}</p>
                    </div>

                    <div className="flex gap-5 text-[#9CA3AF]">
                      <p className="flex items-center gap-1">
                        <LuClock2 className="text-white" />
                        {library.duration} min
                      </p>
                      <p className="flex items-center gap-1">
                        <AiFillFire className="text-white" />
                        {library.caloriesBurned} kcal
                      </p>
                      <p className="flex items-center gap-1">
                        <MdStar className="text-orange-500 text-xl" />
                        {library.rating}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href={`/${library.id}`}
                  className="border border-gray-500 px-3 py-1 rounded-xl cursor-pointer">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodaysPlan;
