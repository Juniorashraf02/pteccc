import Footer from "@/components/Footer/Footer";
import { NavigationBar } from "@/components/Header/NavigationBar";
import { TopBar } from "@/components/Header/TopBar";
import React from "react";
import { GiGraduateCap } from "react-icons/gi";

const aboutus = () => {
  return (
    <div>
      <div className="">
        <TopBar />
        <NavigationBar />
        <div className="">
          <div className="bg-gray-100 py-8 px-5 md:px-10">
            <p className="text-6xl md:text-8xl font-bold text-slate-800">
              About us
            </p>
            <p className="border-l-4 border-purple-500 text-black tracking-widest pl-2 font-xs md:font-base">
              About us, our history, our agenda, our specialized teams details
            </p>
          </div>
        </div>
        <div className="md:flex justify-around bg-white py-8 px-4 text-slate-800 text-justify font-thin w-full">
          <div className="md:w-5/12 px-4">
            <h1 className="text-4xl font-semibold text-rose-400 text-left border-w-1/2 my-8">
              About PTECCC
            </h1>
            <p className="border-l-4 border-rose-400 pl-5">
              PTEC Career Forum is one of the best student organizations of
              Pabna Textile Engineering College. It aims to make students
              competent for the professional world by working on their overall
              career development, corporate grooming, and personal and
              professional skill enhancement. With the inspiration to uncover
              the pioneers within us, we are driven to do more for the students
              of PTEC. We organize a variety of career-oriented programs to
              encourage our members and other students to discover their
              aptitude and nurture it.
            </p>
          </div>
          <div className="md:w-5/12 px-4 ">
            <h1 className="text-4xl font-semibold text-lime-400 text-left border-w-1/2 my-8">
              History
            </h1>
            <p className="border-l-4 border-lime-400 pl-5">
              Founded in the year 2019, PTEC Career Club (PTECCC) started its
              journey with the assistance of a group of passionate students from
              the 10th batch at Pabna Textile Engineering College (PTEC). Every
              year, PTEC has progressed steadily, remaining dedicated to its
              goals and principles. Today, it has emerged as one of the
              prominent societies at PTEC. The primary objective of PTEC is to
              prioritize the career aspirations of PTEC students and assist them
              in finding a smoother path towards their goals.
            </p>
          </div>
        </div>

        <div className="bg-white py-8">
          <h1 className="text-4xl font-semibold text-center border-w-1/2 py-8 text-red-800">
            What we focus on
          </h1>

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 text-slate-800 text-justify font-thin w-full gap-5 px-2 md:px-8">
            <div className="md:w-10/12 px-4">
              <h1 className="text-xl md:text-4xl font-semibold text-blue-400 text-left border-w-1/2 my-8">
                Skill development programs
              </h1>
              <p className="border-l-4 border-blue-400 pl-5">
                Ptec career club is regularly arranging practice sessions, and
                classes to enhance the inner quality and self-improvement among
                the members of the Ptec career club. This organization
                consistently works to increase and develop both the soft and
                hard skills such as public speaking, spoken English,
                presentation, leadership qualities, and computer expertise of a
                member of this club.
              </p>
            </div>
            <div className="md:w-full px-4">
              <h1 className="text-4xl font-semibold text-purple-400 text-left border-w-1/2 my-8">
                Workshop
              </h1>
              <p className="border-l-4 border-purple-400 pl-5">
                Ptec Career Club regularly arranges workshop training sessions
                both offline and online on many different technical
                textile-related topics like Washing, IE, R&D, Merchandising,
                etc. Besides it has also arranged workshop training on CV/Resume
                making and ms office. These workshops provide valuable knowledge
                and enhance the professional development of participants. By
                offering a diverse range of topics, Ptec Career Club ensures
                that individuals interested in the technical textile industry
                can acquire specialized knowledge in areas such as washing,
                industrial engineering (IE), research and development (R&D), and
                merchandising.
              </p>
            </div>
            <div className="md:w-10/12 px-4">
              <h1 className="text-4xl font-semibold text-yellow-400 text-left border-w-1/2 my-8">
                Seminar
              </h1>
              <p className="border-l-4 border-yellow-400 pl-5">
                Every month this enthusiastic club arranges at least one seminar
                with expert guests from outside on different essential topics
                and where students of Pabna Textile Engineering College get the
                opportunity to gather knowledge and experiences from the
                countries' most expert professionals. Recently in the past 2/3
                years Ptec Career Club arranges seminars on "Basic Introduction
                of Industrial Engineering", "Denim and Washing", "Apparel
                Merchandising", "Seminar on DAAD Scholarship" and so on.
              </p>
            </div>
            <div className="md:w-full px-4">
              <h1 className="text-4xl font-semibold text-orange-400 text-left border-w-1/2 my-8">
                Career development
              </h1>
              <p className="border-l-4 border-orange-400 pl-5">
                PTEC Career Club (PTECCC) is a student organization that focuses
                on overall career development and corporate grooming. Through
                seminars, workshops, and competitions, PTECCC prepares students
                for job opportunities and business challenges. It keeps them
                updated with the latest job circulars and organizes a successful
                'Career Fair' where HR representatives from prominent companies
                recruit talented individuals. PTECCC bridges the gap between
                campus life and the professional world, providing valuable
                resources and networking opportunities for students at PTEC.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-0 md:px-16 py-5">
          <h1 className="text-xl md:text-4xl font-semibold text-rose-400">
            Career Fair
          </h1>
          <p className="text-gray-600 font-thin py-5 tracking-wide">
            The PTEC Career Club's signature event is the PTEC Career Fair/Job
            Fair. Since 2019, the PTEC Career Club has been organizing career
            fairs. The purpose of the Career Fair is to connect with HR
            professionals, engage with corporate entities, and expand job
            opportunities. Participating companies inspire fresh graduates and
            undergraduates to experience the realities of the corporate
            environment. The Career Fair features HR summits, seminars,
            workshops, and campus recruitment, providing students with a
            comprehensive corporate experience.
          </p>
        </div>

        <div className="bg-white pb-32">
          <h1 className="text-xl md:text-4xl font-semibold text-green-600 text-center py-20">
            Our Specialized Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:pl-16 font-thin gap-12">
            <div className="">
              <div className="flex gap-5">
                <h1 className="text-xl md:text-4xl font-semibold text-indigo-800">
                  PTEC Dev Team
                </h1>
                <GiGraduateCap className="text-indigo-800 text-5xl" />
              </div>
              <p className="text-slate-700 border-l-4 pl-5 border-indigo-800 text-justify">
                PTEC DevTeam, initially formed as a training group within PTEC,
                focused on web development. This website is maintained by this
                Dev Group. This group not only provide support to PTECCC website
                but also provide service to locals.
              </p>
            </div>
            <div>
              <div className="flex gap-5">
                <h1 className="text-xl md:text-4xl font-semibold text-fuchsia-400">
                  PTEC Design Team
                </h1>
                <GiGraduateCap className="text-fuchsia-800 text-5xl" />
              </div>
              <p className="text-slate-700 border-l-4 border-fuchsia-400 pl-5">
                The PTEC Design Team, one of the pioneer teams within PTEC,
                focuses on specialized tasks. They handle various promotional
                design work. After the recruitment process each year, the design
                team makes posters and banners regarding this.
              </p>
            </div>
            <div className="text-slate-700">
              <div className="flex gap-5">
                <h1 className="text-xl md:text-4xl font-semibold text-pink-800">
                  PTEC Content Team
                </h1>
                <GiGraduateCap className="text-pink-800 text-5xl" />
              </div>
              <p className="text-slate-700 border-l-4 border-pink-800 pl-5">
                The PTEC Content Team, an introductory team of the PTEC Career
                Club, plays a crucial role in crafting various written
                materials. They are responsible for everything from promotional
                posts to official documents.
              </p>
            </div>
            <div className="text-slate-700">
              <div className="flex gap-5">
                <h1 className="text-xl md:text-4xl font-semibold text-violet-950">
                  PTEC Event-Mangement Team
                </h1>
                <GiGraduateCap className="text-violet-950 text-5xl" />
              </div>
              <p className="text-slate-700 border-l-4 border-violet-950 pl-5">
                The PTEC Event Management Team is a dedicated group responsible
                for planning and organizing events. With their expertise and
                meticulous attention to detail, they ensure the smooth execution
                of various activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default aboutus;
