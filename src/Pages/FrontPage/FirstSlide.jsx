import React from 'react'
import { NavLink } from 'react-router-dom'

const FirstSlide = () => {
  return (
    <div className='text-primary-Color bg-first-Slide bg-no-repeat bg-right-top  h-[600px] sm-[800px] lg:h-[1200px] w-[100%] mt-[80px] text-sm sm:text-base' id='first-Slide'>
      <div className='px-[5%] sm:px-[12%]'>
        <h2 className='text-base sm:text-xl lg:text-2xl font-semibold'>Manage your money</h2>
        <h1 className='text-4xl sm:text-6xl lg:text-8xl font-extrabold'>Finesse your <br /> finances.</h1>
        <p className='text-Primary-Text text-sm sm:text-base lg:text-xl'>More flexibility. More freedom. More choices. <br />We have so many ways to organize your personal <br /> finances—on the go or on the couch.</p>
        <div className="flex gap-4 font-bold mt-4">
        <NavLink to="/installApp" className="px-5 py-2 sm:px-10 sm:py-3 bg-button-Color text-white border-2 border-button-Color rounded-[50px] hover:bg-white hover:text-button-Color ">
          Get the App
        </NavLink>
        <NavLink to="/signup" className="px-5 py-2 sm:px-10 sm:py-3 text-button-Color border-2  border-button-Color rounded-[50px] hover:bg-button-Color hover:text-white">
          Sign Up
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default FirstSlide
