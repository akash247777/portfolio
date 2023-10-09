import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-blue-500 p-4 rounded-3xl m-4 shadow-xl select-none">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl flex  font-semibold hover:text-gray-300">
            <span>Akash </span> <span className="px-1 text-amber-300">S.G</span>
          </div>
          {/* <div className="hidden md:flex space-x-4 px-9">
            <a href="/" className="text-white font-bold hover:text-gray-300">
              Home
            </a>

            <a
              href="/about"
              className="text-white font-bold hover:text-gray-300"
            >
              About
            </a>
            <a
              href="/about"
              className="text-white font-bold hover:text-gray-300"
            >
              Education
            </a>
            <div className="relative group">
              <a href="#" className="text-white font-bold hover:text-gray-300">
                Experience
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div
              id="mobile-menu"
              className={`${
                isOpen ? "block" : "hidden"
              } mt-2 space-y-2 rounded-xl bg-white font-bold text-blue-500`}
            >
              <a href="/" className="block px-4 py-2">
                Home
              </a>
              <a href="/about" className="block px-4 py-2">
                About
              </a>
              <div className="group">
                <a href="#" className="block px-4 py-2">
                  Education
                </a>
                <a href="/about" className="block px-4 py-2">
                  Experience
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
}
