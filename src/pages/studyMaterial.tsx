// react imports

import Footer from "@/components/Footer/Footer";
import { NavigationBar } from "@/components/Header/NavigationBar";
import { TopBar } from "@/components/Header/TopBar";
import Image from "next/image";
import Link from "next/link";



// third party imports
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const studyMaterial = () => {


    return (
        <div className="h-screen">
            <div className="sticky top-0 z-10">
                <TopBar />
                <NavigationBar />
            </div>
            <div className="md:flex justify-around items-center bg-white py-20">
                <div>
                    <div className="text-center w-full m-auto py-20 flex gap-10 justify-center">
                        <button className="shadow-md hover:-translate-y-5 duration-700">
                            <Link
                                target="_blank"
                                href="https://drive.google.com/drive/folders/17SgbduZ8WRFtXp97Yj5sNq28G2rzNGI1?usp=drive_link"
                                className="bg-rose-600 border border:bg-slate-800 rounded-md font-bold px-5 w-48 h-min py-2.5 ">
                                L2, T1
                            </Link>
                        </button>
                        <button className="shadow-md hover:-translate-y-5 duration-700">
                            <Link
                                target="_blank"
                                href="https://drive.google.com/drive/folders/1IGZ5eEYAuAnzgg843q2tX9kxOTAD8O34?usp=drive_link"
                                className="bg-rose-600 border border:bg-slate-800 rounded-md font-bold px-5 w-48 h-min py-2.5 ">
                                L2, T2
                            </Link>
                        </button>
                        <button className="shadow-md hover:-translate-y-5 duration-700">
                            <Link
                                target="_blank"
                                href="https://drive.google.com/drive/folders/1D16sZfdS8CFDCnPZJWwEQi2BXETKBZvy?usp=drive_link"
                                className="bg-rose-600 border border:bg-slate-800 rounded-md font-bold px-5 w-48 h-min py-2.5 ">
                                L3, T1
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="px-5">
                    <h2 className="text-2xl font-bold border-b-4 border:rose-400 hover:text-amber-400 text-black duration-700">PDF Contributor</h2>

                    <div className="mt-5">
                        <Image
                            height={100}
                            width={150}
                            src="https://i.imgur.com/zoeWx2o.jpeg"
                            alt="13 batch shohag ( wet dept )"
                            className="shadow-md rounded-2xl"
                        />
                    </div>
                    <div className="text-xs text-slate-800 font-semibold">
                        <p>Mohammad Shohag</p>
                        <p> Wet Department</p>

                        <p>Ptec&apos;13</p>
                        <div className="flex gap-5 mt-5">
                        <a href="https://www.linkedin.com/in/mohammad-shohag/">
                            <FaLinkedin className='text-slate-800 text-xl' />
                        </a>
                        <a href="mailto:careerclubptec@gmail.com">
                            <SiGmail className='text-slate-800 text-xl' />
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default studyMaterial;
