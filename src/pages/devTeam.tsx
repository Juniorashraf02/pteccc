import Image from "next/image";


// third party imports
import { MdOutgoingMail } from 'react-icons/md';
import { AiFillLinkedin, AiOutlineWhatsApp,AiFillInstagram } from 'react-icons/ai';
import Link from "next/link";
import { TopBar } from "@/components/Header/TopBar";
import { NavigationBar } from "@/components/Header/NavigationBar";


export const devTeam = () => {
    return (
        <div className="bg-white h-max pb-20">
            <div className="">
        <TopBar />
        <NavigationBar />
        </div>

            <p className="md:text-3xl text-2xl font-bold text-center text-rose-400 py-10">PTEC DevTEAM</p>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-gray-100 py-10">
               <div className="pt-5">
               <img
                    src="https://i.imgur.com/VjKmjcA.jpeg"
                    alt="istiak 13 batch (apparel dept)"
                    className="mx-auto rounded-xl shadow-xl w-2/3"
                />
               </div>

                
            </div>

        </div>
    )
}

export default devTeam;