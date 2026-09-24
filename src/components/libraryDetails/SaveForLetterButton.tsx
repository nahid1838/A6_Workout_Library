import { ILibrary } from "@/types/type";
import { RiSaveLine } from "react-icons/ri";

const SaveForLetterButton = ({library}: {library: ILibrary}) => {
    return (
        <div>
            <button className='border border-gray-500 font-semibold px-4 py-2 rounded-xl cursor-pointer flex items-center gap-1'><RiSaveLine className='text-lg'/> Save for later</button>
        </div>
    );
};

export default SaveForLetterButton;