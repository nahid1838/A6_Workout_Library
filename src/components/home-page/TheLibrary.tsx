import { getLibraryes } from "@/lib/FetchLibrary";
import LibraryCard from "../shared/LibraryCard";
import { ILibrary } from "@/types/type";

const TheLibrary = async() => {

    const libraryes = await getLibraryes();
    console.log(libraryes)

    return (
        <div className="container mx-auto my-10">
            <div className="py-7">
                <h3 className="scale-y-130 font-bold text-2xl">THE LIBRARY</h3>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5 gap-y-8">
                {
                    libraryes.map((library: ILibrary) => <LibraryCard 
                    key={library.id}
                    library={library}
                    ></LibraryCard>)
                }
            </div>
        </div>
    );
};

export default TheLibrary;