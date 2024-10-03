import React from 'react';
import { MdCardTravel } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaBug } from "react-icons/fa";

const Cards = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center gap-6 m-4'>

            <div className='w-full sm:w-auto border border-b-[#E9B949] border-b-4 rounded-md px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 font-bold bg-white'>
                <h3 className='flex justify-between items-center text-3xl sm:text-4xl md:text-5xl text-[#E9B949]'>
                    <div>28</div>
                    <div className='border rounded-md outline-0 px-4 sm:px-5 py-3 sm:py-4 text-2xl sm:text-3xl bg-[#FCEFC7]'>
                        <MdCardTravel />
                    </div>
                </h3>
                <p className='text-[#102A43] py-2 text-lg sm:text-xl font-medium'>Pending Applications</p>
            </div>

            <div className='w-full sm:w-auto border border-b-[#647ACB] border-b-4 rounded-md px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 font-bold bg-white'>
                <h3 className='flex justify-between items-center text-3xl sm:text-4xl md:text-5xl text-[#647ACB]'>
                    <div>25</div>
                    <div className='border rounded-md outline-0 px-4 sm:px-5 py-3 sm:py-4 text-2xl sm:text-3xl bg-[#E0E8F9]'>
                        <FaCalendarCheck />
                    </div>
                </h3>
                <p className='text-[#102A43] py-2 text-lg sm:text-xl font-medium'>Interviews Scheduled</p>
            </div>

            <div className='w-full sm:w-auto border border-b-[#D66A6A] border-b-4 rounded-md px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 font-bold bg-white'>
                <h3 className='flex justify-between items-center text-3xl sm:text-4xl md:text-5xl text-[#D66A6A]'>
                    <div>22</div>
                    <div className='border rounded-md outline-0 px-4 sm:px-5 py-3 sm:py-4 text-2xl sm:text-3xl bg-[#FFEEEE]'>
                        <FaBug />
                    </div>
                </h3>
                <p className='text-[#102A43] py-2 text-lg sm:text-xl font-medium'>Job Declined</p>
            </div>

        </div>
    );
}

export default Cards;
