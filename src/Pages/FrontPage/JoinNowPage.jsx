import React from "react";
import QRCode from "../../Assets/QRCode.png";
const JoinNowPage = () => {
  return (
    <div
      className="flex bg-[#f5f2e6] items-start flex-col lg:flex-row p-10 gap-10 sm:gap-10 lg:gap-[150px] justify-center"
      id="JoinNowPage"
    >
      <div className="flex-1 flex justify-center w-[100%]  lg:justify-end">
        <div className="flex flex-col items-center ">
          <h1 className="text-[#001e60] text-xl sm:text-3xl lg:text-5xl font-bold my-4">
            Join the millions <br />
            around the world <br /> who love PayPal
          </h1>
          <p className="text-[#243962] text-sm sm:text-base lg:text-[lg]">
            Easily and securely spend. send, and manage your <br />{" "}
            transactions—all in one place. Download the app on <br /> your phone
            or sign up for free online.
          </p>
        </div>
      </div>
      <div className="flex-1 flex w-[100%] justify-center mb-36 sm:mb-28  lg:mb-0 lg:justify-start">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={QRCode} alt="QRCode" className="w-[40%] aspect-square"/>
          <form className="flex flex-col text-[#001e60] gap-4 items-center">
            <label htmlFor="phone_Number">
              Scan the code or enter your number to get the app.
            </label>
            <input
              type="number"
              placeholder="Phone number"
              name="phone_Number"
              id="phone_Number"
              max={9999999999}
              className="py-2 px-8 bg-white border w-[90%] active:border-l-indigo-400    "
            />
            <input
              type="submit"
              className="px-10 py-3 bg-[#003188] text-white border-2 border-[#003188] rounded-[50px] hover:bg-white hover:text-[#003188]"
              value="Send Link"
            />
          </form>
          <p className="text-center text-sm sm:text-base">
            By clicking Send Link you agree to receive a text message <br/>
            with a link to the PayPal app. Message and  data rates may <br/>
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinNowPage;
