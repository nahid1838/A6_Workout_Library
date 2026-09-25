'use client';

import { LibraryContext } from "@/context/LibraryProvider";
import { ILibrary } from "@/types/type";
import { useContext } from "react";
import { RiSaveLine } from "react-icons/ri";
import { toast } from "react-toastify";

const SaveForLetterButton = ({library}: {library: ILibrary}) => {

    const {addedAsSave, setAddedAsSave} = useContext(LibraryContext);
    
        const handleSave = () => {
        const alreadyAdded = addedAsSave.some(
            (currentLibrary) => currentLibrary.id === library.id
        );
    
        if (alreadyAdded) {
            toast.error(`${library.name} Already Saved`);
            return;
        }
    
        toast.success(`${library.name} Saved`);
    
        setAddedAsSave([...addedAsSave, library]);
        };

    return (
        <div>
            <button onClick={()=> handleSave()}
            className='border border-gray-500 font-semibold px-4 py-2 rounded-xl cursor-pointer flex items-center gap-1'><RiSaveLine className='text-lg'/> Save for later</button>
        </div>
    );
};

export default SaveForLetterButton;