import React from 'react'
import Cards from '../components/Cards'
import Chart from '../components/Chart'

const Stats = () => {
  return (
    <div>
      <Cards />
      <header className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl text-gray-900 my-3'>Monthly Application</h1>
      <p className='text-xl text-[#3B82F6]'>Area Chart</p>
      </header>
      <Chart />
    </div>
  )
}

export default Stats
