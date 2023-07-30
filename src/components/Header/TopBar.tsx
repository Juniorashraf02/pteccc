// react imports


// third party imports
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';



export const TopBar = () => {
    return (
        <div className='flex justify-between px-6 py-2 bg-gray-300'>
          <div className='flex md:gap-8 gap-5'>
            <a href="https://www.facebook.com/groups/1199004610301012">
              <FaFacebook className='text-slate-800 text-xl' />
            </a>
            <a href="https://www.linkedin.com/in/ptec-career-club">
              <FaLinkedin className='text-slate-800 text-xl' />
            </a>
            <a href="mailto:careerclubptec@gmail.com">
              <SiGmail className='text-slate-800 text-xl' />
            </a>
          </div>
          <div>
            <p className="text-slate-800 font-bold">PTEC Career Club</p>
          </div>
      </div>
    )
}