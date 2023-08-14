import Link from "next/link";
import React from "react";
// third party imports
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-800 px-2 md:px-0 py-5 text-white">
      <div className="md:mx-auto mb-5 md:mb-0">
        <h1 className="text-3xl font-bold mb-2">Address</h1>
        <div>
          <p>Pabna Textile Engineering College</p>
          <p>Shalgaria, Pabna, Bangladesh</p>
        </div>

        <div className="flex md:gap-8 gap-5 my-5">
          <a href="https://www.facebook.com/groups/1199004610301012">
            <FaFacebook className="text-white text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/ptec-career-club">
            <FaLinkedin className="text-white text-xl" />
          </a>
          <a href="mailto:careerclubptec@gmail.com">
            <SiGmail className="text-white text-xl" />
          </a>
        </div>
      </div>
      <div className="md:mx-auto mb-5 md:mb-0" >
        <h1 className="font-bold text-3xl mb-2">Inquiries</h1>
        <p>
          For any inquiries, questions or commendations, please send us an
          e-mail to: careerclubptec@gmail.com{" "}
        </p>
      </div>
      <div className="md:mx-auto mb-5 md:mb-0">
        <h1 className="font-bold text-3xl mb-2">Quick Links</h1>
        <ul className="space-y-4 md:space-x-6 md:space-y-0 gap-3">
          <li className="text-white hover:text-amber-400 border-b-2  dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in pl-0 md:pl-6">
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li className="text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
            <Link href="/">
              <p>Blogs</p>
            </Link>
          </li>
          <li className="text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
            <Link href="/">
              <p>Contact Us</p>
            </Link>
          </li>
          <li className="text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
            <Link href="/">
              <p>PTEC Career & Education Fest</p>
            </Link>
          </li>
          <li className="text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
            <Link href="/">
              <p>About Us</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
      <div className="bg-white text-gray-800 font-semibold text-center">
        <p>&copy; All rights reserved by | PTECCC | Developed by <span></span>
          <Link
          href="/devTeam"
          className="text-blue-600">
          ISTIAK&apos;13 <span className="text-gray-400">(PTEC DevTEAM)</span> 
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
