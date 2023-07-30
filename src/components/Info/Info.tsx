import React from "react";

import { GiSkills } from 'react-icons/gi';
import { GrWorkshop } from 'react-icons/gr';
import { FaNetworkWired, FaComments, FaUserFriends } from 'react-icons/fa';
import { GiPublicSpeaker } from 'react-icons/gi';
import {FcCollaboration, FcFaq, FcVoicePresentation,FcMindMap, FcProcess} from 'react-icons/fc'






const Info = () => {
  return (
    <div className="bg-white py-5">
      <h1 className="font-bold text-4xl md:text-6xl uppercase text-center text-slate-800 py-5">
        we work on
      </h1>
      <div className="mx-auto flex items-center justify-center">
        <hr className="h-2 w-1/2 bg-amber-500" />
      </div>
      <div className="md:flex gap-5 mt-5  text-center py-5">
        <div className="flex flex-col items-center justify-center mx-auto my-8 md:my-0 hover:-translate-y-5 duration-300 cursor-pointer">
          <FcMindMap className="text-5xl"/>
          <p className="text-slate-800">Skill Development</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto my-8 md:my-0 text-slate-800 hover:text-amber-500 hover:-translate-y-5 duration-300 cursor-pointer">
          <FcCollaboration className="text-5xl"/>
          <p className="text-slate-800">Workshop</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto my-8 md:my-0 text-slate-800 hover:text-amber-500 hover:-translate-y-5 duration-300 cursor-pointer">
          <FcProcess className="text-5xl"/>
          <p className="text-slate-800">Networking</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto my-8 md:my-0 text-slate-800 hover:text-amber-500 hover:-translate-y-5 duration-300 cursor-pointer">
          <FcVoicePresentation className="text-5xl"/>
          <p className="text-slate-800">Public Speaking</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto my-8 md:my-0 text-slate-800 hover:text-amber-500 hover:-translate-y-5 duration-300 cursor-pointer">
          <FcFaq className="text-5xl"/>
          <p className="text-slate-800">Communication</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto my-8 md:my-0 text-slate-800 hover:text-amber-500 hover:-translate-y-5 duration-300 cursor-pointer">
          <FaUserFriends className="text-5xl text-red-500"/>
          <p className="text-slate-800">Creating Job opportunities</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
