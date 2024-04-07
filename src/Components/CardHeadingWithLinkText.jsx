import React, { useState } from "react";
// import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const CardHeadingWithLinkText = ({ Text, Link, LogoBG }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <h2>{Text}</h2>
      <NavLink to={Link} className={`rounded-[50%] aspect-square ${LogoBG} p-[2px] sm:p-0 w-6 sm:w-8 flex items-center`}  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className={` ${isHovered ? "translate-x-[8px] lg:translate-x-[14px]" : "translate-x-[-8px] lg:translate-x-[-14px]"} text-base sm:text-xl duration-300`}
        />
      </NavLink>
    </>
  );
};

export default CardHeadingWithLinkText;

// <LiaLongArrowAltRightSolid className="translate-x-[-8px] lg:translate-x-[-14px] hover:translate-x-[8px] lg:hover:translate-x-[14px] w-4 duration-300" />
