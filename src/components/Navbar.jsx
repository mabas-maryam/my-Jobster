import React, { useState } from 'react';
import { FaAlignLeft } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const show = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className='flex justify-between items-center bg-white w-full text-[#3B82F6] text-2xl sm:text-3xl md:text-4xl py-4 sm:py-6 md:py-7 px-4 sm:px-6 md:px-10'>
        {/* Hamburger Menu Icon */}
        <FaAlignLeft className='cursor-pointer' />

        {/* Dashboard Title */}
        <h1 className='text-gray-700 text-lg sm:text-xl md:text-2xl'>Dashboard</h1>

        {/* User Profile and Dropdown */}
        <div className='relative'>
          <div 
            onClick={show} 
            className='flex items-center space-x-2 text-sm sm:text-base md:text-lg border rounded-md px-3 sm:px-4 py-1.5 bg-[#3B82F6] hover:bg-blue-700 text-white cursor-pointer'
          >
            <IoMdContact />
            <p>Test Users</p>
            <TiArrowSortedDown />
          </div>

          {/* Dropdown Menu */}
          {toggle && (
            <div className='absolute right-0 mt-2 w-36 sm:w-40 md:w-44 cursor-pointer'>
              <Link to={'/'}>
                <p className='rounded-md py-2 px-4 sm:px-5 text-[#3B82F6] bg-[#DBEAFE] text-sm sm:text-base md:text-lg text-center'>
                  Logout
                </p>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
