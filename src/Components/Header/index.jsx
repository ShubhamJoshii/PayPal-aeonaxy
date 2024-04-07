import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import PayPalLogo from "../../Assets/PayPalLogo.png";
import PayPalLogo2 from "../../Assets/PayPalFull.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const HeaderList = [
  {
    Name: "Personal",
    Link: "/",
  },
  {
    Name: "Business",
    Link: "/",
  },
  {
    Name: "Developer",
    Link: "/",
  },
  {
    Name: "Help",
    Link: "/",
  },
];

const Header = () => {
  const [headerShow, setHeaderShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setHeaderShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [headerShow]);
  return (
    <React.Fragment>
      <header className="flex items-center px-2 py-4 sm:p-8 justify-between border-b-2 text-sm lg:text-lg bg-white">
        <div className="text-4xl block lg:hidden text-black opacity-70 border hover:opacity-100 sm:text-5xl hover:border-black p-[2px] cursor-pointer delay-150">
          {headerShow ? (
            <IoMdClose
              onClick={() => setHeaderShow(!headerShow)}
              className=""
            />
          ) : (
            <IoMenu
              onClick={() => setHeaderShow(!headerShow)}
              className=""
            />
          )}
        </div>
        <div className="flex items-center gap-12">
          <img
            src={PayPalLogo}
            id="logo"
            alt="PayPal"
            className="w-[35px] aspect-square hidden lg:block"
          />
          <img
            src={PayPalLogo2}
            id="logo"
            alt="PayPal"
            className="w-[140px] block lg:hidden"
          />
          <div className="gap-12 font-700 text-Primary-Text hidden lg:flex">
            {HeaderList.map((curr, id) => {
              return (
                <NavLink href={curr.Link} key={id}>
                  {curr.Name}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex gap-4 font-bold ">
          <NavLink
            to="/login"
            className="py-2 px-5 sm:px-10 sm:py-3 text-[#003188] border-2  border-[#003188] rounded-[50px] hover:bg-[#003188] hover:text-white"
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className="px-10 py-3 bg-[#003188] text-white border-2 border-[#003188] rounded-[50px] hover:bg-white hover:text-[#003188] hidden lg:inline"
          >
            Sign Up
          </NavLink>
        </div>
      </header>
      <div
        className={` absolute flex flex-col left-0 bg-white w-[100%] delay-150 font-700 text-Primary-Text lg:hidden shadow-lg  ${
          headerShow ? "top-[80px] sm:top-[120px]" : "top-[-400px]"
        }`}
        ref={ref}
      >
        {HeaderList.map((curr, id) => {
          return (
            <NavLink
              href={curr.Link}
              key={id}
              className="px-10 py-4 hover:text-white hover:bg-[#003188]"
            >
              {curr.Name}
            </NavLink>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Header;
