'use client';

import Saved from "@/components/myPlan/Saved";
import TodaysPlan from "@/components/myPlan/TodaysPlan";
import { LibraryContext } from "@/context/LibraryProvider";
import { useContext, useState } from "react";

const MyPlanPage = () => {

    const [buttonType, setButtonType] = useState("todaysPlan");
    const {addedTodaysPlan, addedAsSave} = useContext(LibraryContext)

    const activeData = buttonType === "todaysPlan" ? addedTodaysPlan : addedAsSave;


    const totalExercises = activeData.length
    const totalMinutes = activeData.reduce((total, exercises) => total + exercises.duration, 0);
    const totalCalories = activeData.reduce((total, exercises) => total + exercises.caloriesBurned, 0);
    
        const handleButtons = (type: "todaysPlan" | "saved") => {
            setButtonType(type);
        }

    return (
        <div className='container mx-auto py-10 space-y-7 '>
            <div className='space-y-2'>
                <h3 className='text-2xl font-bold scale-y-150'>MY PLAN</h3>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='flex gap-[33.3%] bg-[#232732] px-5 py-10 rounded-2xl'>
                <div>
                    <p className='text-gray-400'>Exercises</p>
                    <h3 className='text-3xl font-bold scale-y-120 text-[#C2F800]'>{totalExercises}</h3>
                </div>
                <div className='border-l pl-5 border-gray-600'>
                    <p className='text-gray-400'>Minutes</p>
                    <h3 className='text-3xl font-bold scale-y-120'>{totalMinutes}</h3>
                </div>
                <div className='border-l pl-5 border-gray-600'>
                    <p className='text-gray-400'>Calories</p>
                    <h3 className='text-3xl font-bold scale-y-120'>{totalCalories}</h3>
                </div>
            </div>

            <div>
                
                <>
        <div className='border border-gray-400 px-4 py-3 rounded-2xl w-fit flex gap-6 bg-[#232732] mb-5'>
            <button onClick={()=> handleButtons("todaysPlan")}
            className={buttonType === "todaysPlan" ? `border border-gray-400 px-2 py-1 rounded-xl bg-gray-600 font-bold cursor-pointer` : ""}>Today's Plan</button>


            <button onClick={()=> handleButtons("saved")}
            className={buttonType === "saved" ? `border border-gray-400 px-2 py-1 rounded-xl bg-gray-600 font-bold cursor-pointer` : ""}
            >Saved</button>
        </div>

            <div>
                {
                    buttonType === "todaysPlan" ? <TodaysPlan/> : <Saved/>
                }
            </div>
        </>
                
            </div>
        </div>
    );
};

export default MyPlanPage;