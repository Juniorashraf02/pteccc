import { NavigationBar } from "@/components/Header/NavigationBar";
import { TopBar } from "@/components/Header/TopBar";
import Link from "next/link";

// third party imports
import { MdOutgoingMail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { useEffect, useState } from "react";





const generalMembers = () => {
    const [newMember, setNewMember] = useState('');

    useEffect(() => {
        fetch('/generalMembersData.json',
            {
                referrerPolicy: 'strict-origin-when-cross-origin'
            })
            .then(response => response.json())
            .then(data => {
                setNewMember(data)
                // console.log(data)
            })
    }, []);



    return (
        <div>
            <TopBar />
            <NavigationBar />
            <div className="bg-white h-max py-5 px-10">

                <div>
                    <h1 className="text-xl font-bold text-rose-600 bg-black rounded-md border py-5 text-center mx-auto">General Members</h1>
                </div>
                {
                    Array.isArray(newMember) ? (
                        newMember.map((info) => (
                            <div
                                key={info.id}
                                className="bg-blue-100 h-max gap-5 justify-between items-center w-full px-2 md:px-5 my-5 shadow-lg grid md:grid-cols-2 grid-cols-1 border rounded-md border-gray-300 hover:-translate-x-5 duration-500 "
                            >
                                <div>
                                    <p className="text-slate-800 font-semibold text-center">{info.name}</p>
                                </div>
                                <div>
                                    <div className="flex justify-around my-5">
                                        <Link
                                            href={`mailto:${info.mail}`}
                                            className="text-black text-2xl flex gap-2 items-center justify-center"
                                        >
                                            <MdOutgoingMail className="text-red-500 hover:animate-pulse" />
                                            <p className="text-sm font-semibold">Contact</p>
                                        </Link>

                                        {
                                            info.linkedIn ? <div className="border border-l-4 border-lime-400"></div> : " "
                                        }

                                        <div>
                                            {
                                                info.linkedIn ? <Link
                                                    href={info.linkedIn}
                                                    className="text-black text-2xl flex gap-2 items-center justify-center"
                                                >
                                                    <AiFillLinkedin className="text-blue-900  hover:animate-pulse" />
                                                    <p className="text-sm font-semibold">LinkedIn</p>
                                                </Link> : " "
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No members found.</p>
                    )
                }
            </div>


        </div>
    )
}

export default generalMembers;