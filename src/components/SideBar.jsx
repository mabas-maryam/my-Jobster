import React from 'react';
import logo from '../assets/logo.svg';
import { IoBarChart } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const sideBarStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'black' : 'normal',
    };
  };

  return (
    <div className="bg-white h-screen sm:w-[40%] md:w-[30%] lg:w-[20%] px-6 py-6 hidden sm:block">
      {/* Logo Section */}
      <div className="w-full">
        <img src={logo} alt="logo" className="w-20 sm:w-28 md:w-32" />
      </div>

      {/* Navigation Links */}
      <div className="pt-10">
        <ul className="mt-2 flex flex-col space-y-4 cursor-pointer gap-4">
          <NavLink style={sideBarStyles} to={'/stats'}>
            <li className="flex items-center gap-2 p-2 hover:bg-blue-50 hover:pl-4 rounded-md text-sm sm:text-base md:text-lg font-semibold text-[#849AAF] hover:text-gray-900">
              <span className="text-[#3B82F6] text-xl sm:text-2xl">
                <IoBarChart />
              </span>
              Stats
            </li>
          </NavLink>

          <NavLink style={sideBarStyles} to={'/allJobs'}>
            <li className="flex items-center gap-2 p-2 hover:bg-blue-50 hover:pl-4 rounded-md text-sm sm:text-base md:text-lg font-semibold text-[#849AAF] hover:text-gray-900">
              <span className="text-[#3B82F6] text-xl sm:text-2xl">
                <MdOutlineManageSearch />
              </span>
              All Jobs
            </li>
          </NavLink>

          <NavLink style={sideBarStyles} to={'/addJobs'}>
            <li className="flex items-center gap-2 p-2 hover:bg-blue-50 hover:pl-4 rounded-md text-sm sm:text-base md:text-lg font-semibold text-[#849AAF] hover:text-gray-900">
              <span className="text-[#3B82F6] text-xl sm:text-2xl">
                <GrDocumentPerformance />
              </span>
              Add Job
            </li>
          </NavLink>

          <NavLink style={sideBarStyles} to={'/profile'}>
            <li className="flex items-center gap-2 p-2 hover:bg-blue-50 hover:pl-4 rounded-md text-sm sm:text-base md:text-lg font-semibold text-[#849AAF] hover:text-gray-900">
              <span className="text-[#3B82F6] text-xl sm:text-2xl">
                <ImProfile />
              </span>
              Profile
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
