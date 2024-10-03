import React from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
     <main className='w-full flex h-screen'>

   <SideBar />
      <div className='flex-1'>
      <Navbar />
      <Outlet/>
      </div>
      
     </main>
  )
}

export default Dashboard
