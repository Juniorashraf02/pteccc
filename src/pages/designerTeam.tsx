// pages/designerTeam.js
import React from 'react';


// third party imports
import { MdOutgoingMail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { TopBar } from '@/components/Header/TopBar';
import { NavigationBar } from '@/components/Header/NavigationBar';
import Footer from '@/components/Footer/Footer';

const designerTeam = () => {
  // Your component logic here
  return <div className='bg-white h-screen mx-auto'>


    <div className="">
      <TopBar />
      <NavigationBar />
    </div>

    <p className='text-gray-800 font-bold py-8 text-center md:text-3xl text-xl'>Designer Team </p>
    <div className='md:flex grid grid-cols-1 gap-5 justify-center gap-5 py-10'>
      <div className='md:w-1/6 p-2 bg-blue-100 py-5'>
        <img className='shadow-md border rounded-xl' src="https://i.imgur.com/DsJ6XBZ.jpeg" alt="" />
        <p className="font-bold text-2xl  text-center text-gray-600 mt-5">Mehedi</p>
        <p className="font-semibold text-xs text-center text-gray-600 mt-5">Graphic Designer || Host</p>
        <div className="flex justify-around items-center mb-4 mt-5">
          <Link
            href="https://www.linkedin.com/in/md-mehedi-hasan-0b68b91a7"
            className="text-2xl text-gray-800"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="mailto:mehedihasanptec@gmail.com"
            className="text-2xl text-gray-800"
          >
            <MdOutgoingMail />
          </Link>
        </div>
      </div>
      <div className='md:w-1/6 p-2 bg-blue-100 py-5'>
        <img className='shadow-md border rounded-xl' src="https://i.imgur.com/L7oF8qG.jpeg" alt="" />
        <p className="font-bold text-2xl  text-center text-gray-600 mt-5">Fazle Rabbi</p>
        <p className="font-semibold text-xs text-center text-gray-600 mt-5">Graphic Designer || Host</p>
        <div className="flex justify-around items-center mb-4 mt-5">
          <Link
            href="https://www.linkedin.com/in/fazlerabbi-ptec"
            className="text-2xl text-gray-800"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="mailto:fazlerabbi124@gmail.com"
            className="text-2xl text-gray-800"
          >
            <MdOutgoingMail />
          </Link>
        </div>
      </div>
      <div className='md:w-1/6 p-2 bg-blue-100 py-5'>
        <img className='shadow-md border rounded-xl' src="https://i.imgur.com/VWf4sw7.jpeg" alt="" />
        <p className="font-bold text-2xl  text-center text-gray-600 mt-5">MD. Abdullah Bin Nahid Redoy</p>
        <p className="font-semibold text-xs text-center text-gray-600 mt-5">Graphic Designer</p>
        <div className="flex justify-around items-center mb-4 mt-5">
          <Link
            href="https://bd.linkedin.com/in/mdabdullah-bin-nahid-redoy-9ba98a253"
            className="text-2xl text-gray-800"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="mailto:redoyabdullahbinnahid@gmail.com"
            className="text-2xl text-gray-800"
          >
            <MdOutgoingMail />
          </Link>
        </div>
      </div>

    </div>
    <Footer />
  </div>;
};

export default designerTeam;