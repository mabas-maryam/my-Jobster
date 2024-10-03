import React from 'react'
import logo from '../assets/logo.svg';
import { IoBarChart } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { NavLink } from 'react-router-dom';

const SideBar = () => {

const sideBarStyles = ({isActive}) =>{
  return{
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'black': 'normal'
  }
}

  return (
    <div className='w-[20%] px-10 bg-white h-screen'>
      <div className='w-full py-6'>
        <img src={logo} alt="logo" />
      </div>

      <div className='pt-10'>
        <ul className='mt-2 flex flex-col space-y-2 cursor-pointer gap-4'>
          <NavLink style={sideBarStyles} to={'stats'}>
          <li className="flex items-center gap-2 p-1.5 hover:bg-blue-50 hover:pl-4 rounded-md  text-sm text-[#849AAF] hover:text-gray-900 font-semibold "> <span
            className='text-[#3B82F6] text-2xl'>
            <IoBarChart />
          </span>Stats</li>
          </NavLink>


        <NavLink to={'allJobs'}>
          <li className="flex items-center gap-2 p-1.5 hover:bg-blue-50 hover:pl-4 rounded-md text-sm font-semibold text-[#849AAF] hover:text-gray-900"> <span
            className='text-[#3B82F6] text-2xl'>
          <MdOutlineManageSearch />
          </span>All Jobs</li>
          </NavLink>


          <NavLink to={'addJobs'}>
          <li className="flex items-center gap-2 p-1.5 hover:bg-blue-50 hover:pl-4 text-sm rounded-md font-semibold text-[#849AAF] hover:text-gray-900"> <span
            className='text-[#3B82F6] text-2xl'>
          <GrDocumentPerformance />
          </span>Add Job</li>
          </NavLink>
        
          <NavLink to={'profile'}>
          <li className="flex items-center gap-2 p-1.5 hover:bg-blue-50 hover:pl-4 rounded-md text-sm font-semibold text-[#849AAF] hover:text-gray-900"> <span
            className='text-[#3B82F6] text-2xl'>
          <ImProfile />
          </span>Profile</li>
          </NavLink>
        
        </ul>

      </div>


    </div>
  )
}

export default SideBar
