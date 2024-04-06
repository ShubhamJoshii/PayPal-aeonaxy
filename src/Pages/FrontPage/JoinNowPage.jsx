import React from "react";
import QRCode from "../../Assets/QRCode.png";
const JoinNowPage = () => {
  return (
    <div
      className="flex bg-[#f5f2e6] items-start gap-[200px] justify-center"
      id="JoinNowPage"
    >
      <div className="flex-1 flex justify-end">
        <div >
          <h1 className="text-[#001e60] text-5xl font-bold my-4">
            Join the millions <br />
            around the world
            <br /> who love PayPal{" "}
          </h1>
          <p className="text-[#243962]">
            Easily and securely spend. send, and manage your <br />{" "}
            transactions—all in one place. Download the app on <br /> your phone
            or sign up for free online.
          </p>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={QRCode} alt="QRCode" className="w-[150px] aspect-square"/>
          <form className="flex flex-col text-[#001e60] gap-4 items-center">
            <label htmlFor="phone_Number">
              Scan the code or enter your number to get the app.
            </label>
            <input
              type="number"
              placeholder="Phone number"
              name="phone_Number"
              id="phone_Number"
              className="py-2 px-8 bg-white border w-[100%] active:border-l-indigo-400    "
            />
            <input
              type="submit"
              className="px-10 py-3 bg-[#003188] text-white border-2 border-[#003188] rounded-[50px] hover:bg-white hover:text-[#003188]"
              value="Send Link"
            />
          </form>
          <p className="text-center text-sm">
            By clicking Send Link you agree to receive a text <br /> message
            with a link to the PayPal app. Message and <br /> data rates may
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinNowPage;
