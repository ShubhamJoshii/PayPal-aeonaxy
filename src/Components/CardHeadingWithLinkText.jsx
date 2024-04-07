import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const CardHeadingWithLinkText = ({ Text, Link, LogoBG }) => {
  return (
    <>
      <h2>{Text}</h2>
      <NavLink to={Link} className={`rounded-[50%] ${LogoBG} p-[2px] sm:p-0`}>
        <LiaLongArrowAltRightSolid className="translate-x-[-8px] lg:translate-x-[-14px] hover:translate-x-[8px] lg:hover:translate-x-[14px] text-xl sm:text-3xl lg:text-4xl duration-300" />
      </NavLink>
    </>
  );
};

export default CardHeadingWithLinkText;
