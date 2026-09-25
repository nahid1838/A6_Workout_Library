import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import { FaDumbbell, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <div className="mt-15 pb-3 bg-[#1B1F28]">
            <hr className="text-gray-500"/>
            <div className="container mx-auto pt-8 pb-10 flex justify-between">
                <Link href={"/"}
                className="text-lg font-bold flex items-center gap-2"><FaDumbbell className="text-2xl font-bold text-[#C2F800]" /> FITLOG</Link>

                <div className="space-y-4 pr-4">
                    <p className="md:text-lg font-semibold text-gray-400">SOCIAL MIDEA</p>
                    <div className="flex gap-4 md:text-xl cursor-pointer">
                        <span><FaFacebookSquare /></span>
                        <span><IoLogoYoutube /></span>
                        <span><FaInstagramSquare /></span>
                        <span><AiFillTikTok /></span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center space-y-3">
                <hr className="text-gray-700"/>
                <p className="text-gray-400 text-sm">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;