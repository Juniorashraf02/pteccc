import Footer from "@/components/Footer/Footer";
import { NavigationBar } from "@/components/Header/NavigationBar";
import { TopBar } from "@/components/Header/TopBar";
import React from "react";

const contact = () => {
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <div>
        <div className="bg-gray-300 py-8 px-5 md:px-10">
          <p className="text-6xl md:text-8xl font-bold text-slate-800">
            Contact us
          </p>
          <p className="border-l-4 border-purple-500 text-black tracking-widest pl-2 font-xs md:font-base">
            Get in touch with us
          </p>
        </div>
      </div>
      <div className="bg-white h-max md:flex justify-around py-12">
        <div className="p-5">
          <p className="text-4xl text-slate-700">
            We are open to any conversations!{" "}
          </p>
        </div>
        <div className="text-gray-600 bg-gray-200 p-10 rounded-xl tracking-wide">
          <p>Pabna Textile Engineering College</p>
          <p>Shalgaria, Pabna, Bangladesh</p>
          <p>mail: careerclubptec@gmail.com</p>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default contact;
