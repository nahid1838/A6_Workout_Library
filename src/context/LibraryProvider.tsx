'use client';

import { ILibrary } from "@/types/type";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ILibraryContext {
    addedTodaysPlan: ILibrary[];
    setAddedTodaysPlan: Dispatch<SetStateAction<ILibrary[]>>;
    addedAsSave: ILibrary[];
    setAddedAsSave: Dispatch<SetStateAction<ILibrary[]>>;
}

export const LibraryContext = createContext<ILibraryContext>({
    addedTodaysPlan: [],
    setAddedTodaysPlan: () => {},
    addedAsSave: [],
    setAddedAsSave: () => {}
})

const LibraryProvider = ({children}: {children: ReactNode}) => {

    const [addedTodaysPlan, setAddedTodaysPlan] = useState<ILibrary[]>([]);
    const [addedAsSave, setAddedAsSave] = useState<ILibrary[]>([]);

    const sharedData = {
        addedTodaysPlan,
        setAddedTodaysPlan,
        addedAsSave,
        setAddedAsSave
    }

    return (
        <LibraryContext.Provider value={sharedData}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;