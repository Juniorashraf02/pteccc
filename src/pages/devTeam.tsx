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
               <Image
               height={200}
               width={200}
                    src="https://i.imgur.com/VjKmjcA.jpeg"
                    alt="istiak 13 batch (apparel dept)"
                    className="mx-auto rounded-xl shadow-xl w-2/3"
                />
               </div>

                <div className="px-6 py-4 text-slate-800">
                <p className="font-bold text-2xl  text-center text-gray-600 mt-5">Istiak</p>
                    <div className="font-semibold text-xs text-gray-400 text-xl mb-2 text-center mt-5">Programmer || Graphic Designer || Artist</div>
                    <div className="flex justify-around items-center mb-4 mt-5">


                        <Link
                            href="https://www.linkedin.com/in/istiakashraf/"
                            className="text-2xl text-rose-400"
                        >
                            <AiFillLinkedin />
                        </Link>
                        <Link
                            href="mailto:shuvo.istiak11@gmail.com"
                            className="text-2xl text-rose-400"
                        >
                            <MdOutgoingMail />
                        </Link>
                        <Link
                            href="https://wa.me/+8801612016614"
                            className="text-2xl text-rose-400"
                        >
                            <AiOutlineWhatsApp />
                        </Link>
                        <Link
                            href="https://www.instagram.com/twilightmelody/"
                            className="text-2xl text-rose-400"
                        >
                            <AiFillInstagram />
                        </Link>

                    </div>

                    <div>
                        <Link
                            href="https://portfolio-of-istiak.netlify.app/"
                            className="text-2xl text-sky-400 text-center"
                        >
                            <p className="font-bold">Istiak&apos;s portfolio</p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default devTeam;