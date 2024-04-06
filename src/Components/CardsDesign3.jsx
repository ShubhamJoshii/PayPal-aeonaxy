import React from 'react'
import { NavLink } from 'react-router-dom'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const CardsDesign3 = ({data,position}) => {
  let classes = "flex items-center flex-row-reverse gap-[80px] justify-center w-[100%]"
  let classesText = "flex-1 flex items-end  flex-col"
  if(position % 2 !== 0){
    classes = "flex items-center gap-[80px] justify-center w-[100%]";
    classesText = "flex-1 flex justify-start flex-col"
  }
  return (
    <div className={classes}>
      <img src={data.Image} alt={data.Heading}  className='w-[50.4%]'/>
      <div className={classesText}>
      <div className='w-[400px] '>
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
    </div>
  )
}

export default CardsDesign3
