import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Cards = ({data}) => {
  return (
    <div className={data.style + " relative"} id="box">
    {
        data.Img && <img src={data?.Img} className={data.ImgStyle + " w-[100%]"} alt={data.Text}/>
    }
      <div
        className={
          data.textStyle +
          " w-[100%] z-10 flex justify-between items-center font-extrabold tracking-wider px-8 py-4"
        }
      >
        <h2 className=" text-2xl ">{data.Text}</h2>
        <NavLink to={data.Link} className=" rounded-[50%] bg-[#ffffff46]">
          <LiaLongArrowAltRightSolid className="translate-x-[-14px]  text-5xl hover:translate-x-[14px] duration-300" />
        </NavLink>
      </div>
    </div>
  );
};


export default Cards;
