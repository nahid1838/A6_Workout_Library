'use client';

import { LibraryContext } from "@/context/LibraryProvider";
import { ILibrary } from "@/types/type";
import { useContext } from "react";
import { MdAddCard } from "react-icons/md";
import { toast } from "react-toastify";

const AddTodaysPlanButton = ({library}: {library: ILibrary}) => {

    const {addedTodaysPlan, setAddedTodaysPlan} = useContext(LibraryContext);

    const handleAddTodaysPlan = () => {
    const alreadyAdded = addedTodaysPlan.some(
        (currentLibrary) => currentLibrary.id === library.id
    );

    if (alreadyAdded) {
        toast.error(`${library.name} Already Added`);
        return;
    }

    toast.success(`${library.name} Added to Today's Plan`);

    setAddedTodaysPlan([...addedTodaysPlan, library]);
    };

    return (
        <div>
            <button onClick={()=> handleAddTodaysPlan()}
            className='bg-[#CCFF00] text-black font-semibold px-4 py-2 rounded-xl cursor-pointer flex items-center gap-1'><MdAddCard className='text-lg'/> Add to today's plan</button>
        </div>
    );
};

export default AddTodaysPlanButton;