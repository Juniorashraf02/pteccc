// React imports
import Link from "next/link";
import React, { useState } from "react";

// third party imports



export const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [eventopt, setEventopt] = useState(false);
  const [committeopt, setCommitteopt] = useState(false);

  const teamDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleTeamMouseEnter = () => {
    setIsOpen(true);
  };
  const handleTeamMouseLeave = () => {
    setIsOpen(false);
  };

  const committeDropDown = () => {
    setCommitteopt(!committeopt);
  };
  const handleCommitteEnter = () => {
    setCommitteopt(true);
  };
  const handleCommitteLeave = () => {
    setCommitteopt(false);
  };

  const eventDropDown = () => {
    setEventopt(!eventopt);
  };
  const handleMouseEventEnter = () => {
    setEventopt(true);
  };
  const handleMouseEventLeave = () => {
    setEventopt(false);
  };

  return (
    <nav className="w-full bg-gray-800 dark:bg-slate-800 shadow">
      <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 gap-3">
              <li className="py-2 text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
                <Link href="/aboutus">
                  <p>About Us</p>
                </Link>
              </li>
              <li className="py-2 text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
                <Link href="/home">
                  <p>Home</p>
                </Link>
              </li>

              <div
                className="relative"
                onMouseEnter={handleMouseEventEnter}
                onMouseLeave={handleMouseEventLeave}
              >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2  font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in"
                  onClick={eventDropDown}
                >
                  Events
                  <svg
                    className="w-4 h-4 ml-2 -mr-1 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-6-6H5V2h10v4h1l-6 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {eventopt && (
                  <div className="origin-top-right absolute right-0  w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-0"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                    <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-amber-500 rounded-md duration-500 ease-in"
                        role="menuitem"
                      >
                        coming soon
                    </Link>
                      
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={handleCommitteEnter}
                onMouseLeave={handleCommitteLeave}
              >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2  font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in"
                  onClick={committeDropDown}
                >
                  Committee
                  <svg
                    className="w-4 h-4 ml-2 -mr-1 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-6-6H5V2h10v4h1l-6 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {committeopt && (
                  <div className="origin-top-right absolute right-0  w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-0"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="/committee/currentCommittee"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-amber-500 rounded-md duration-500 ease-in"
                        role="menuitem"
                      >
                       Executive Committee 2023-2024
                      </Link>
                      <Link
                        href="/committee/generalMembers"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-amber-500 rounded-md duration-500 ease-in"
                        role="menuitem"
                      >
                        General Members
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <li className="py-2  text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
                <Link href="/blogs">
                  <p>Blogs</p>
                </Link>
              </li>

              <div
                className="relative"
                onMouseEnter={handleTeamMouseEnter}
                onMouseLeave={handleTeamMouseLeave}
              >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2  font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in"
                  onClick={teamDropdown}
                >
                  Teams
                  <svg
                    className="w-4 h-4 ml-2 -mr-1 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-6-6H5V2h10v4h1l-6 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute right-0  w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-0"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                     <Link
                        href="/devTeam"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-amber-500 rounded-md duration-500 ease-in"
                        role="menuitem"
                      >
                        DevTeam
                     </Link>
                     <Link
                        href="/designerTeam"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-amber-500 rounded-md duration-500 ease-in"
                        role="menuitem"
                      >
                        Designer Team 
                    </Link>
                      
                      <Link
                        href="/honorBoard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-amber-500 rounded-md duration-500 ease-in"
                        role="menuitem"
                      >
                        Honor Board
                     </Link>
                      <Link
                        href="/alumni"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-amber-500 rounded-md duration-500 ease-in"
                        role="menuitem"
                      >
                        Alumni
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <li className="py-2 text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
                <Link href="/studyMaterial">
                  <p>Study Materials</p>
                </Link>
              </li>
              <li className="py-2 text-white hover:text-amber-400 border-b-2 dark:border-slate-800 border-slate-800 hover:border-amber-400 duration-500 ease-in">
                <Link href="/contact">
                  <p>Contact Us</p>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
