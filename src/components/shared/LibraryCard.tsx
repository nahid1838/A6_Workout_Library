import { ILibrary } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { AiFillFire } from "react-icons/ai";
import { LuClock2 } from "react-icons/lu";
import { MdStar } from "react-icons/md";

const LibraryCard = ({ library }: { library: ILibrary }) => {
  return (
    <Link href={`/${library.id}`}
    className="hover:shadow-lg hover:shadow-gray-300 hover:rounded-xl hover:transform hover:-translate-y-2 hover:duration-300 hover:border-2 hover:border-[#C2F800]">
      <div className="relative w-full h-[250px]">
        <Image
          src={library.image}
          alt="Library Image"
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      <div className="bg-[#222630] rounded-b-xl p-5 space-y-3">
        <div className="flex gap-5">
          {library.muscleGroups.length > 1 ? (
            <>
              <p className="bg-[#C2F800] px-2 py-0.5 rounded-xl text-sm text-black font-bold">
                {library.muscleGroups[0]}
              </p>

              <p className="bg-[#C2F800] px-2 py-0.5 rounded-xl text-sm text-black font-bold">
                {library.muscleGroups[1]}
              </p>
            </>
          ) : (
            <p className="bg-[#C2F800] px-2 py-0.5 rounded-xl text-sm text-black font-bold">
              {library.muscleGroups[0]}
            </p>
          )}
        </div>
        <div>
            <h3 className="text-2xl font-bold">{library.name}</h3>
            <p className="text-[#9CA3AF]">{library.equipment}</p>            
        </div>
        <hr className="text-[#9CA3AF]"/>

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
    </Link>
  );
};

export default LibraryCard;
