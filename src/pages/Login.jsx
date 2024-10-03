import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/logo.svg';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault()
        if (email === '' || password === '') {
            toast.error('Password and Email are required')
            return
        }
        try {
            const userData = {
                email, password
            }
            console.log(userData)
            const response = await fetch('http://localhost:4000/api/v1/auth/signin', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)

            })
            const data = await response.json()
            console.log(data)

            if (!response.ok) {
                throw new Error(data.message)
                return
            }
            toast.success('Login successfully')


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='flex flex-col mx-50 p-10 w-2/7 max-w-md bg-white border border-t-4 border-t-blue-600 rounded-md'>
                <form className='flex flex-col items-center justify-center' onSubmit={handleLogin}>
                    <img src={logo} alt="Logo" width='200' />
                    <p className='mt-4 text-3xl pb-5'>Login</p>
                    <label className='flex self-start text-lg' htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-80 mt-2 my-1 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                    />

                    <label className='flex self-start py-2 text-lg' htmlFor="password">Password</label>
                    <input
                        id='password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-80 mb-5 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <Link to={'/dashboard'}>
                    <button className='bg-[#3B82F6] hover:bg-blue-600 w-80 py-1 my-3 text-white rounded-md'
                    >Submit</button>
                    </Link>
                    <button className='bg-blue-200 hover:bg-blue-600 w-80 py-1 my-3 text-[#3B82F6] hover:text-white rounded-md'>Demo App</button>
                    <p>Not a member yet? <Link to="/register" className='text-blue-500 hover:underline'>Register</Link></p> {/* Updated Link */}
                </form>
            </div>
        </div>
    );
}

export default Login;
