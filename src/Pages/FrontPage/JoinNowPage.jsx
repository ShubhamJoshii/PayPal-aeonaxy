import React from "react";
import QRCode from "../../Assets/QRCode.png";
const JoinNowPage = () => {
  return (
    <div className="flex bg-JoinNowPage bg-no-repeat bg-right-bottom bg-[#f5f2e6] min-h-[650px] bg-500px items-start flex-col lg:flex-row p-10 gap-10 sm:gap-10 lg:gap-[150px] justify-center">
      <div className="flex-1 flex justify-center w-[100%]  lg:justify-end">
        <div className="flex flex-col items-center ">
          <h1 className="text-third-Color  text-center lg:text-start text-xl sm:text-3xl lg:text-5xl font-bold my-4">
            Join the millions <br className="hidden sm:block" />
            around the world <br className="hidden sm:block" /> who love PayPal
          </h1>
          <p className="text-third-Color  text-center lg:text-start  text-sm sm:text-base lg:text-[lg]">
            Easily and securely spend. send, and manage your{" "}
            <br className="hidden sm:block" />
            transactions—all in one place. Download the app on{" "}
            <br className="hidden sm:block" /> your phone or sign up for free
            online.
          </p>
        </div>
      </div>
      <div className="flex-1 flex w-[100%] justify-center mb-36 sm:mb-28  lg:mb-0 lg:justify-start">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={QRCode} alt="QRCode" className="w-[40%] aspect-square" />
          <form className="flex flex-col text-third-Color  gap-4 items-center">
            <label htmlFor="phone_Number" className=" text-center ">
              Scan the code or enter your number to get the app.
            </label>
            <input
              type="number"
              placeholder="Phone number"
              name="phone_Number"
              id="phone_Number"
              max={9999999999}
              className="py-2 px-8 bg-white border w-[90%] active:border-l-indigo-400 "
            />
            <input
              type="submit"
              className="px-10 py-3 bg-button-Color cursor-pointer  text-white border-2 border-button-Color rounded-[50px] hover:bg-white hover:text-[#003188]"
              value="Send Link"
            />
          </form>
          <p className="text-center text-sm sm:text-base text-third-Color">
            By clicking Send Link you agree to receive a text message{" "}
            <br className="hidden sm:block" /> with a link to the PayPal app.
            Message and data rates may <br className="hidden sm:block" /> apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinNowPage;
