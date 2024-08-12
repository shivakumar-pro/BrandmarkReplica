import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 w-3/5 mt-12" >
            <div className="flex items-center justify-between h-28">
                <div className="">
                    <div className="flex flex-col md:flex-row">
                        <a href="#3" className=" font-proxima text-white font-bold text-[35px] mr-4">BRAND</a>
                        <a href="#3" className="font-proxima text-black font-bold text-[35px]">MARK</a>
                    </div>
                </div>
                <div className="flex items-center justify-between h-full w-2/5">
                    {/* Horizontal Navbar (Visible on medium screens and larger) */}
                    <div className=" hidden md:flex space-x-4 h-full items-center w-full justify-between">
                        <a href="#" className="text-black-500 font-bold text-[13px] font-proxima w-1/4 hover:bg-[#f3ebeb] hover:rounded-3xl text-center p-1">
                            Tools
                        </a>
                        <a href="#" className="text-black-500 font-bold text-[13px] font-proxima w-1/4 hover:bg-[#f3ebeb]  hover:rounded-3xl text-center p-1">
                            Pricing
                        </a>
                        <a href="#" className="text-black-500 font-bold text-[13px] font-proxima w-1/4 hover:bg-[#f3ebeb]  hover:rounded-3xl text-center p-1">
                            Support
                        </a>
                        <a href="#" className="text-black-500 font-bold text-[13px] font-proxima w-1/4 bg-[#bdb7b7] rounded-3xl hover:bg-[#f3ebeb] hover:rounded-3xl text-center p-1">
                            Login
                        </a>
                    </div>
                    {/* Hamburger Icon (Visible on smaller screens) */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Vertical Sidebar (Visible on smaller screens when the menu is open) */}
            {isOpen && (
                <aside className="fixed right-0 top-0 h-full w-60 bg-gray-700">
                    <div className="flex items-center justify-around bg-gray-900 h-16">
                        <img className="w-40" src="https://brandmark.io/images/logo.svg" alt="BRANDMARK" />
                        <button onClick={toggleMenu} className="text-white text-4xl">
                            &times;
                        </button>
                    </div>
                    <div className="mt-2">
                        <ul className="mb-4">
                            <li>
                                <a href="#" className="block px-2 py-1 text-gray-300 hover:text-white">
                                    Tools
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-2 py-1 text-gray-300 hover:text-white">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-2 py-1 text-gray-300 hover:text-white">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-2 py-1 text-gray-300 hover:text-white">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            )}
        </nav>
    );
}
