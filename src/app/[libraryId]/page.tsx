import LibraryDetailCard from "@/components/shared/LibraryDetailCard";
import { getLibraryes } from "@/lib/FetchLibrary";
import { ILibrary } from "@/types/type";

interface LibraryDetailPageProps {
    params: Promise<{
        libraryId: number
    }>
}

const LibraryDetailPage = async({params}: LibraryDetailPageProps) => {

    const{libraryId} = await params;

    const allLibraryes = await getLibraryes();
    const library = allLibraryes.find((library: ILibrary) => String(library.id) === String(libraryId))

    return (
        <div>
            <LibraryDetailCard library={library}></LibraryDetailCard>
        </div>
    );
};

export default LibraryDetailPage;