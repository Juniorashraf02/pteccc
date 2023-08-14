// pages/designerTeam.js
import React from 'react';


// third party imports
import { MdOutgoingMail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { TopBar } from '@/components/Header/TopBar';
import { NavigationBar } from '@/components/Header/NavigationBar';
import Footer from '@/components/Footer/Footer';

const honorBoard = () => {
  // Your component logic here
  return <div className='bg-white h-max mx-auto'>


    <div className="">
      <TopBar />
      <NavigationBar />
    </div>

    <p className='text-gray-800 font-bold py-8 text-center md:text-3xl text-xl'>Honor Board of Our Career Club </p>
    <div className='md:grid-cols-3 grid grid-cols-1 gap-5 justify-center gap-5 py-10'>
      <div className='md:w-full p-2 bg-red-100 h-min hover:-translate-y-5 duration-700 rounded shadow-md'>
        <img className='shadow-md border rounded-xl mx-auto h-40' src="/photos/honorBoard/principal.png" alt="" />
        <p className="font-bold text-2xl  text-center text-gray-600 mt-5">Engr. Md. Solaiman</p>
        <p className="font-semibold text-xs text-center text-gray-600 mt-5">Principal</p>
      </div>
      <div className='md:w-full p-2 bg-red-100 h-min hover:-translate-y-5 duration-700 rounded shadow-md'>
        <img className='shadow-md border rounded-xl h-40 mx-auto' src="/photos/honorBoard/asifSir.png" alt="" />
        <p className="font-bold text-2xl  text-center text-gray-600 mt-5">Engr. Md Asif Hassan</p>
        <p className="font-semibold text-xs text-center text-gray-600 mt-5">Lecturer</p>
        
      </div>
      <div className='md:w-full p-2 bg-red-100 h-min hover:-translate-y-5 duration-700 rounded shadow-md'>
        <img className='shadow-md border rounded-xl h-40 mx-auto' src="/photos/honorBoard/montajSir.png" alt="" />
        <p className="font-bold text-2xl  text-center text-gray-600 mt-5">Engr Md Montaj Ali</p>
        <p className="font-semibold text-xs text-center text-gray-600 mt-5">Lectuer</p>
       
      </div>

    </div>
    <Footer />
  </div>;
};

export default honorBoard;