// react imports
import Link from "next/link";


// third party imports
import { MdOutgoingMail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';


// interface
interface CardData {
    name: string;
    title?: string;
    mailLink: string;
    linkedInlink?: string;
    className?: string;
    className2?: string;
    designation: string;
}


const Cards: React.FC<CardData> = ({ name, title, mailLink, linkedInlink, className, className2, designation }) => {

    return (
        <div className={`text-center md:w-full w-full mx-auto bg-white border border-x-4 py-3 rounded-xl duration-700 shadow-lg my-2 ${className}`}>
            <div>
                <p className="text-xl text-slate-800 font-semibold"> {name} </p>
                <p className="text-xs text-gray-400 font-bold"> {
                title?title: <span className="text-transparent">no title</span>
                }</p>
            </div>
            <div className="my-5">
                <button className={` text-white font-semibold px-5 py2.5 rounded-full ${className2}`}>{designation}</button>
            </div>
            <div className="flex justify-around my-5">
                <Link href={`mailto:${mailLink}`} className="text-black text-2xl flex gap-2 items-center justify-center">
                    <MdOutgoingMail className="text-red-500 hover:animate-pulse" />
                    <p className="text-sm font-semibold">Contact</p>
                </Link>
                {
                    linkedInlink && (
                        <div className="border border-l-4 border-lime-400"></div>
                    )
                }
                {
                    linkedInlink && (
                        <div>
                            
                            <Link href={linkedInlink} className="text-black text-2xl flex gap-2 items-center justify-center">
                                <AiFillLinkedin className="text-blue-900  hover:animate-pulse" />
                                <p className="text-sm font-semibold">LinkedIn</p>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Cards;