import React from "react";
import CardHeadingWithLinkText from "./CardHeadingWithLinkText";

const CardsDesign3 = ({ data, position }) => {
  let classes =
    "flex items-center flex-row-reverse gap-[80px] justify-center w-[100%]";
  let classesText = "absolute lg:relative flex-1 flex items-end  flex-col pl-5";
  let class3 = "flex justify-end";
  if (position % 2 !== 0) {
    classes = "flex items-center gap-[80px] justify-center w-[100%]";
    classesText =
      "absolute lg:relative flex-1 flex justify-start flex-col pl-5";
    class3 = "flex justify-start";
  }
  return (
    <div className={classes}>
      <div
        className={`w-[100vw] h-[600px] lg:h-[100%] lg:w-[50.4%] ${class3} `}
      >
        <img
          src={data.Image}
          alt={data.Heading}
          className="w-[100vw] object-cover sm:object-iniial  sm:w-[50%] h-[100%] lg:w-[100%] lg:h-[100%]"
        />
      </div>
      <div
        className={`${classesText} bg-[#ffffffc9] p-6 shadow-lg rounded-lg sm:bg-none sm:shadow-none`}
      >
        <div className="w-[80vw] py-8 px-4 sm:p-0 sm:w-[400px] ">
          <h1 className="font-extrabold  text-xl sm:text-3xl  lg:text-5xl sm:mb-4 text-primary-Color ">
            {data.Heading}
          </h1>
          {data.Description.map((curr, ids) => {
            return (
              <span className="text-primary-Color " key={ids}>
                {curr}
              </span>
            );
          })}
          <div className="flex items-center  flex-wrap gap-x-8 text-secondary-Color  ">
            <CardHeadingWithLinkText
              Text={data.LinkText}
              Link={data.Link}
              LogoBG="bg-[#0266d046]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDesign3;
