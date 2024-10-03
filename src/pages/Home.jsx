import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import img1 from '../assets/img1.svg';
import logo from '../assets/logo.svg';

const Home = () => {
    return (
        <div className='w-full px-20 h-screen'>
            <div className='w-full py-6'>
                <img src={logo} alt="logo" />
            </div>
            <div className='flex flex-row items-center gap-20'>
                <div className='space-y-14 '>
                    <header className='text-5xl font-semibold font-sans '>
                        Job <span className='text-[#3B82F6]'>Tracking </span>App
                    </header>
                    <p className='text-[#4D6581] text-lg'>
                        Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie <br/>raclette taxidermy
                        craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
                    </p>
                    <Link to="/login">
                        <button className='bg-[#3B82F6] hover:bg-[#3e3bf6] text-white rounded-md text-2xl font-semibold px-6 py-2 lead my-6'>
                            Login/Register
                        </button>
                    </Link>
                </div>
                <div>
                    <img className='h md:block hidden' src={img1} alt="" height="" />
                </div>
                                      </div>
        </div>
    );
}

export default Home;
