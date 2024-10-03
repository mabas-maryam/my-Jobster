import React, { useState } from 'react'

import { FaAlignLeft } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Cards from './Cards';

const Navbar = () => {
  const[toggle, setToggle] = useState(false)
  const show = () =>{
    setToggle(!toggle)
  }
  return (
    < >
    <nav className='flex justify-between items-center bg-white w-full text-[#3B82F6] text-4xl py-7 px-10'>
    <FaAlignLeft />
    <h1 className='text-gray-700'>Dashboard</h1>
    <div className='relative space-y-1'>
    <div onClick={show} className='flex justify-center items-center text-lg border rounded-md px-4 py-1.5 bg-[#3B82F6] hover:bg-blue-700 text-white cursor-pointer'>
    <IoMdContact />
    <p>Test Users</p>
    <TiArrowSortedDown />

    </div>
    {toggle && (
      <div className='absolute r-0 cursor-pointer'>
        <Link to={'/'}>
        <p className='rounded-md py-1 px-11 text-[#3B82F6] bg-[#DBEAFE] text-xl '>Logout</p>
        </Link>
      </div>
    )}
    </div>
    </nav>
    {/* <Cards /> */}
    </>
  )
}

export default Navbar
