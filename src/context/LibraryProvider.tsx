import { createContext, ReactNode } from "react";

interface ILibraryContext {

}

export const LibraryContext = createContext<ILibraryContext>({
    
})

const LibraryProvider = ({children}: {children: ReactNode}) => {


    const sharedData = {

    }

    return (
        <LibraryContext.Provider value={sharedData}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;