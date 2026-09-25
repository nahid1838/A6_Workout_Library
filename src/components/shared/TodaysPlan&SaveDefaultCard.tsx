import Link from "next/link";

const TodaysPlanSaveDefaultCard = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-6 py-20 border border-gray-600 rounded-2xl">
                <div className="text-center space-y-1">
                    <h3 className="text-3xl font-bold scale-y-125">NOTHING HERE YET</h3>
                    <p>Browse the library and add a lift to get today moving.</p>
                </div>

                <Link href={"/"} 
                className="bg-[#C2F800] px-5 py-2 rounded-xl cursor-pointer text-black font-semibold">Go To Workouts</Link>
            </div>
        </div>
    );
};

export default TodaysPlanSaveDefaultCard;