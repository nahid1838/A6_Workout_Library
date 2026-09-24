import banner from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 bg-[#222630] pl-10 pt-12 pb-4 mt-8 rounded-2xl ">
            <div className="flex flex-col gap-8">
                <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
                <h1 className="text-5xl font-bold scale-y-150">TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>
                <p className="max-w-118 text-[#9CA3AF]">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <button className="bg-[#C2F800] text-black px-5 py-2 rounded-lg
                cursor-pointer font-semibold w-fit">
                    BROWSE WORKOUTS
                </button>
            </div>

            <Image className="mx-auto"
            src={banner}
            alt="Banner Image"
            width={334}
            height={334}
            />
        </div>
    );
};

export default Banner;