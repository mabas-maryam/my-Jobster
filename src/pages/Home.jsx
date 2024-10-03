import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import img1 from '../assets/img1.svg';
import logo from '../assets/logo.svg';

const Home = () => {
    return (
        <div className='w-full px-4 md:px-10 lg:px-20 h-screen'>
            <div className='w-full py-4 md:py-6'>
                <img src={logo} alt="logo" className='w-32 md:w-40 lg:w-48' />
            </div>
            <div className='flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20'>
                <div className='space-y-8 md:space-y-14'>
                    <header className='text-3xl md:text-4xl lg:text-5xl font-semibold font-sans'>
                        Job <span className='text-[#3B82F6]'>Tracking</span> App
                    </header>
                    <p className='text-[#4D6581] text-base md:text-lg'>
                        Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie <br className='hidden md:block' />
                        raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
                    </p>
                    <Link to="/login">
                        <button className='bg-[#3B82F6] hover:bg-[#3e3bf6] text-white rounded-md text-lg md:text-2xl font-semibold px-4 md:px-6 py-2 my-6'>
                            Login/Register
                        </button>
                    </Link>
                </div>
                <div>
                    <img className='h-48 md:h-64 lg:h-80 md:block' src={img1} alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Home;
