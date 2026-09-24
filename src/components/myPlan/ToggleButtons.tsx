'use client';

import { useState } from "react";
import TodaysPlan from "./TodaysPlan";
import Saved from "./Saved";

const ToggleButtons = () => {

    const [buttonType, setButtonType] = useState("todaysPlan");

    const handleButtons = (type: "todaysPlan" | "saved") => {
        setButtonType(type);
    }

    return (
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
    );
};

export default ToggleButtons;