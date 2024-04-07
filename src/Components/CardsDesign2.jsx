import React from "react";
import CardHeadingWithLinkText from "./CardHeadingWithLinkText";

const CardsDesign2 = ({ data, position }) => {
  let classes =
    "flex flex-col items-center sm:flex-row gap-5 sm:gap-[40px] lg:gap-[80px] justify-center m-auto";
  if (position % 2 !== 0) {
    classes =
      "flex flex-col items-center sm:flex-row-reverse gap-5 sm:gap-[40px] lg:gap-[80px] justify-center";
  }
  return (
    <div className={classes}>
      <img
        src={data.Image}
        alt={data.Heading}
        className="w-[200px] sm:w-[300px] lg:w-[550px]"
      />
      <div className="text-center sm:text-start  w-[80vw] sm:w-[400px] text-primary-Color">
        <h1 className="font-extrabold text-xl sm:text-3xl lg:text-5xl mb-4  ">
          {data.Heading}
        </h1>
        <div className="text-third-Color ">{data.Description}</div>
        <div className="flex items-center justify-center sm:justify-start mt-3 gap-8 text-secondary-Color text-base ">
          <CardHeadingWithLinkText Text={data.LinkText} Link={data.Link} LogoBG="bg-[#0266d046]" />
        </div>
        </div>
        </div>
      );
};

export default CardsDesign2;