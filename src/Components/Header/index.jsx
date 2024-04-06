import React from "react";
import { NavLink } from "react-router-dom";
import PayPalLogo from "../../Assets/PayPalLogo.png";
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

const index = () => {
  return (
    <header className="flex items-center p-8 justify-between border-b-2  text-lg ">
      <div className="flex items-center gap-12">
        <img
          src={PayPalLogo}
          id="logo"
          alt="PayPal"
          className="w-[35px] aspect-square"
        />
        <div className="flex gap-12 font-700 text-Primary-Text">
          {HeaderList.map((curr, id) => {
            return (
              <NavLink
                href={curr.Link}
                key={id}
              >
                {curr.Name}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex gap-4 font-bold ">
        <NavLink to="/login" className="px-10 py-3 text-[#003188] border-2  border-[#003188] rounded-[50px] hover:bg-[#003188] hover:text-white">
          Log In
        </NavLink>
        <NavLink to="/signup" className="px-10 py-3 bg-[#003188] text-white border-2 border-[#003188] rounded-[50px] hover:bg-white hover:text-[#003188]">
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default index;
