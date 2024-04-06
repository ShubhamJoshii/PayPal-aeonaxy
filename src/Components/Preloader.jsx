import React from "react";
import ReactLoading from "react-loading";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[76vh]">
      <ReactLoading
        type="spin"
        color="#04aec8a6"
        height={"50px"}
        width={"50px"}
      />
    </div>
  );
};

export default Preloader;