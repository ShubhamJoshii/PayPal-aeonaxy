import React from 'react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const CardsDesign2 = ({data,position}) => {
    let classes = "flex items-center gap-[80px] justify-center";
    if(position % 2 !== 0){
        classes = "flex items-center flex-row-reverse gap-[80px] justify-center"
    }
  return (
    <div className={classes}>
      <img src={data.Image} alt={data.Heading} className='w-[550px]'/>
      <div className='w-[400px]'>
        <h1 className='font-extrabold text-5xl mb-4 text-[#001b65]'>{data.Heading}</h1>
        {
          data.Description.map((curr, ids) => {
            return <span className='text-[#1e3165]' key={ids}>{curr}</span>
          })
        }
        <div className='flex items-center gap-8 text-[#2576d1] '>
            <p>{data.LinkText}</p>
            <NavLink to={data.Link} className="rounded-[50%] bg-[#0266d046]">
                <LiaLongArrowAltRightSolid className="translate-x-[-14px]  text-4xl hover:translate-x-[5px] duration-300" />
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default CardsDesign2
