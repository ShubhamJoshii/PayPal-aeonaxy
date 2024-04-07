import React from "react";
import PayPalLogo from "../../Assets/PayPalFull.png";
import america_flag from "../../Assets/america_flag.webp";

import { NavLink } from "react-router-dom";
const footer1Data = [
  {
    Text: "Help",
    Link: "/",
  },
  {
    Text: "Contact",
    Link: "/",
  },
  {
    Text: "Fees",
    Link: "/",
  },
  {
    Text: "Security",
    Link: "/",
  },
  {
    Text: "Apps",
    Link: "/",
  },
  {
    Text: "Shop",
    Link: "/",
  },
  {
    Text: "Enterprise",
    Link: "/",
  },
  {
    Text: "Partners",
    Link: "/",
  },
  {
    Text: "Feedback",
    Link: "/",
  },
];

const footer2DataPart1 = [
  {
    Text: "About",
    Link: "/",
  },
  {
    Text: "Newsroom",
    Link: "/",
  },
  {
    Text: "Jobs",
    Link: "/",
  },
  {
    Text: "Investor Relations",
    Link: "/",
  },
  {
    Text: "Values in Action",
    Link: "/",
  },
  {
    Text: "Public Policy",
    Link: "/",
  },
  {
    Text: "Sitemap",
    Link: "/",
  },
];

const footer2DataPart2 = [
  {
    Text: "Accessibilty",
    Link: "/",
  },
  {
    Text: "Privacy",
    Link: "/",
  },
  {
    Text: "Cookies",
    Link: "/",
  },
  {
    Text: "Legal",
    Link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="text-[#0e1e56] font-bold  text-xs sm:text-sm lg:text-base">
      <img src={PayPalLogo} alt="PayPalLogo" className="w-[200px]" />
      <div className="flex justify-between py-2 px-4 mx-2 lg:py-6 gap-4 lg:mx-4 lg:px-10 border-b-2 flex-col-reverse lg:flex-row">
        <div className="flex gap-4 lg:gap-8 flex-wrap ">
          {footer1Data.map((curr, ids) => {
            return <NavLink to={curr.Link} className="delay-100 hover:text-[#1168ca]" key={ids}>{curr.Text}</NavLink>;
          })}
        </div>
        <img src={america_flag} alt="America Flag " className="w-8 h-5" />
      </div>
      <div className="flex justify-between gap-4 flex-wrap  py-2 px-4 mx-2 lg:py-6 lg:mx-4 lg:px-10">
        <div className="flex gap-4 lg:gap-8 flex-wrap">
          {footer2DataPart1.map((curr, ids) => {
            return <NavLink to={curr.Link} className="delay-100 hover:text-[#1168ca]" key={ids}>{curr.Text}</NavLink>;
          })}
        </div>
        <div className="flex  gap-4 lg:gap-8 flex-wrap">
          <p className="text-[#747681] font-normal">©️ 1999-2022</p>
          <div className="flex gap-8">
            {footer2DataPart2.map((curr, ids) => {
              return <NavLink to={curr.Link} className="delay-100 hover:text-[#1168ca]" key={ids}>{curr.Text}</NavLink>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
