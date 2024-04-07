import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const CardHeadingWithLinkText = ({ Text, Link, LogoBG = "#ffffff46" }) => {
  return (
    <>
      <h2 className="text-sm sm:text-lg lg:text-xl">{Text}</h2>
      <NavLink to={Link} className={` rounded-[50%] bg-[${LogoBG}] p-[2px] sm:p-0`}>
        <LiaLongArrowAltRightSolid className="translate-x-[-5px] sm:translate-x-[-8px] lg:translate-x-[-14px] hover:translate-x-[8px] lg:hover:translate-x-[14px] text-xl sm:text-3xl lg:text-5xl duration-300" />
      </NavLink>
    </>
  );
};

export default CardHeadingWithLinkText;
