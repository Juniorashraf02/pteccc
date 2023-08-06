// react imports

import { NavigationBar } from "@/components/Header/NavigationBar";
import { TopBar } from "@/components/Header/TopBar";
import Image from "next/image";
import Link from "next/link";


const studyMaterial = () => {


    return (
        <div className="h-screen">
            <div className="sticky top-0 z-10">
                <TopBar />
                <NavigationBar />
            </div>
            <div className="flex justify-around items-center">
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
                <div>
                    <h2 className="text-2xl font-bold border-b-4 border:rose-400 hover:">PDF contributor</h2>

                    <div className="mt-5">
                        <Image
                        height={200}
                        width={200}
                        src="https://drive.google.com/file/d/1mHbNY14HD2ah1gSG2Y3F9EHs9f8Lqab5/view?usp=drive_link"
                        alt="13 batch shohag ( wet dept )"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default studyMaterial;
