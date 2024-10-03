import React from 'react'
import { MdCardTravel } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaBug } from "react-icons/fa";

const Cards = () => {

    return (
        <div className='flex justify-items-center items-center m-4 mx-6'>

            <div className='container border border-b-[#E9B949] border-b-4 rounded-md mr-6 px-12 py-9 font-bold bg-white'>
                <h3 className='flex justify-between items-center text-5xl  text-[#E9B949]'>
                    <div>28</div>
                    <div className='border rounded-md outline-0 px-5 py-4 text-3xl bg-[#FCEFC7]'><MdCardTravel /></div>
                </h3>
                <p className='text-[#102A43] py-2 text-xl font-medium'>Pending Applications</p>

            </div>

            <div className='container border rounded-md mr-6 px-12 py-9 font-bold bg-white border-b-[#647ACB] border-b-4'>
                <h3 className='flex justify-between items-center text-5xl text-[#647ACB]'>
                    <div>25</div>
                    <div className='border rounded-md outline-0 px-5 py-4 text-3xl bg-[#E0E8F9]'><FaCalendarCheck /></div>
                </h3>
                <p className='text=[#102A43] py-2 text-xl font-medium'>Interviews Schedules</p>

            </div>

            <div className='container border rounded-md mr-6 px-12 py-9 font-bold bg-white border-b-[#D66A6A] border-b-4'>
                <h3 className='flex justify-between items-center text-5xl text-[#D66A6A]'>
                    <div>22</div>
                    <div className='border rounded-md outline-0 px-5 py-4 text-3xl bg-[#FFEEEE]'><FaBug /></div>
                </h3>
                <p className='text=[#102A43] py-2 text-xl font-medium'>Job Declained</p>

            </div>

        </div>
    )
}

export default Cards
