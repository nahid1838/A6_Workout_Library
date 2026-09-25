"use client";

import Saved from "@/components/myPlan/Saved";
import TodaysPlan from "@/components/myPlan/TodaysPlan";
import { LibraryContext } from "@/context/LibraryProvider";
import { useContext, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

type SortType = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const [buttonType, setButtonType] = useState("todaysPlan");

  const { addedTodaysPlan, addedAsSave } = useContext(LibraryContext);

  const activeData = buttonType === "todaysPlan" ? addedTodaysPlan : addedAsSave;

  const [sortType, setSortType] = useState<SortType>("duration");

  const sortedData = [...activeData].sort((a, b) => {
    if (sortType === "duration") {
      return a.duration - b.duration;
    }

    if (sortType === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortType === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalExercises = activeData.length;

  const totalMinutes = activeData.reduce(
    (total, exercises) => total + exercises.duration,
    0,
  );

  const totalCalories = activeData.reduce(
    (total, exercises) => total + exercises.caloriesBurned,
    0,
  );

  const handleButtons = (type: "todaysPlan" | "saved") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto py-10 space-y-7 ">
      <div className="space-y-2 text-center md:text-left">
        <h3 className="text-2xl font-bold scale-y-150">MY PLAN</h3>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <div className="grid grid-cols-3 gap-[10%] bg-[#232732] px-5 py-10 rounded-2xl">
        <div>
          <p className="text-gray-400">Exercises</p>

          <h3 className="text-3xl font-bold scale-y-120 text-[#C2F800]">
            {totalExercises}
          </h3>
        </div>

        <div className="border-l pl-5 border-gray-600">
          <p className="text-gray-400">Minutes</p>

          <h3 className="text-3xl font-bold scale-y-120">{totalMinutes}</h3>
        </div>

        <div className="border-l pl-5 border-gray-600">
          <p className="text-gray-400">Calories</p>

          <h3 className="text-3xl font-bold scale-y-120">{totalCalories}</h3>
        </div>
      </div>

      <div>
        <>
          <div className="flex flex-col md:flex-row justify-start md:justify-between">
            <div className="border border-gray-400 px-4 py-3 rounded-2xl w-fit flex gap-6 bg-[#232732] mb-5">
              <button
                onClick={() => handleButtons("todaysPlan")}
                className={
                  buttonType === "todaysPlan"
                    ? `border border-gray-400 px-2 py-1 rounded-xl bg-gray-600 font-bold cursor-pointer`
                    : ""
                }
              >
                Today's Plan
              </button>

              <button
                onClick={() => handleButtons("saved")}
                className={
                  buttonType === "saved"
                    ? `border border-gray-400 px-2 py-1 rounded-xl bg-gray-600 font-bold cursor-pointer`
                    : ""
                }
              >
                Saved
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <p className="text-gray-300">Sort By</p>

              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 bg-gray-700 rounded-xl px-5 border border-gray-400"
                >
                  {sortType === "duration" && "Duration"}
                  {sortType === "calories" && "Calories"}
                  {sortType === "rating" && "Rating"}

                  <span className="ml-2"><RiArrowDownSLine className="text-lg" /></span>
                </div>

                <ul
                  tabIndex={-1}
                  className="dropdown-content menu bg-gray-800 border border-gray-400 rounded-xl z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <button onClick={() => setSortType("duration")}>
                      Duration
                    </button>
                  </li>

                  <li>
                    <button onClick={() => setSortType("calories")}>
                      Calories
                    </button>
                  </li>

                  <li>
                    <button onClick={() => setSortType("rating")}>
                      Rating
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            {buttonType === "todaysPlan" ? (
              <TodaysPlan data={sortedData} />
            ) : (
              <Saved data={sortedData} />
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default MyPlanPage;
