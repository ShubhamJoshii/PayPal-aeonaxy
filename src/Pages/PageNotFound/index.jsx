import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
        <div className='flex flex-col gap-2 shadow-2xl px-8 py-16 rounded-lg'>
            <p>Sorry, this page not available right now.</p>
            <p>We'll let you as soon as we are!</p>
            <NavLink to="/" className="border bg-button-Color text-white border-button-Color p-2 hover:opacity-80 text-center ">Go Home</NavLink>
        </div>
    </div>
  )
}

export default PageNotFound 