import React from "react";
import CardHeadingWithLinkText from "./CardHeadingWithLinkText";

const Cards = ({data}) => {
  return (
    <div className={data.style + " relative rounded-[40px] mb-[20px] text-white overflow-hidden"}>
    {
        data.Img && <img src={data?.Img} className={data.ImgStyle + " w-[100%]"} alt={data.Text}/>
    }
      <div className={data.textStyle + " w-[100%] z-10 flex justify-between items-center font-extrabold tracking-wider px-4 py-0 sm:px-8 sm:py-4 text-sm sm:text-lg lg:text-xl"}>
        <CardHeadingWithLinkText Text={data.Text} Link={data.Link} LogoBG="bg-[#ffffff46]"/>
      </div>
      </div>
      );
    };
    
    // <CardHeadingWithLinkText Text={data.Text} Link={data.Link} LogoBG="#ffffff46" />

export default Cards;
