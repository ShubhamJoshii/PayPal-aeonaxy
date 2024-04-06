import React from 'react'
import { NavLink } from 'react-router-dom'

const FirstSlide = () => {
  return (
    <div className='text-Primary-Text h-[1200px] w-[100%] mt-[80px]' id='first-Slide'>
      <div className=' px-[12%]'>
        <h2 className='text-2xl font-semibold'>Manage your money</h2>
        <h1 className='text-8xl font-extrabold'>Finesse your <br /> finances.</h1>
        <p className='text-Primary-Text text-xl'>More flexibility. More freedom. More choices. <br />We have so many ways to organize your personal <br /> finances—on the go or on the couch.</p>
        <div className="flex gap-4 font-bold mt-4">
        <NavLink to="/installApp" className="px-10 py-3 bg-[#003188] text-white border-2 border-[#003188] rounded-[50px] hover:bg-white hover:text-[#003188] ">
          Get the App
        </NavLink>
        <NavLink to="/signup" className="px-10 py-3 text-[#003188] border-2  border-[#003188] rounded-[50px] hover:bg-[#003188] hover:text-white">
          Sign Up
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default FirstSlide
