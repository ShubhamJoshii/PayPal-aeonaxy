import React from "react";
import PayBills from "../../Assets/PayBills.png";
import PaypalSaving from "../../Assets/PaypalSaving.jpg";
import BuyAndSellCrypto from "../../Assets/BuyAndSellCrypto.png";
// import Direct_Deposit from "../../Assets/Direct_Deposit.jpg";
import Direct_Deposit from "../../Assets/Direct_Deposit2.jpg";
import CardsDesign1 from "../../Components/CardsDesign1";

const Data = [
  {
    Text: "Add Cash",
    style: "bg-[#0070df] w-[660px] h-[850px]",
    Img: "",
    ImgStyle: "absolute bottom-0 ",
    textStyle: "absolute bottom-8",
    Link: "/",
  },
  {
    Text: "Buy and Sell Crypto",
    style: "bg-[#001c62] w-[660px] h-[1270px]",
    Img: BuyAndSellCrypto,
    ImgStyle: "absolute BuyAndSellCrypto top-[50%] left-[50%]",
    textStyle: "absolute bottom-8",
    Link: "/",
  },
  {
    Text: "Pay Bills",
    style: "bg-[#fed140] w-[660px] h-[1270px]",
    Img: PayBills,
    ImgStyle: "absolute bottom-0 ",
    textStyle: "absolute top-8",
    Link: "/",
  },
  {
    Text: "PayPal Savings",
    style: "bg-[#3672b0] w-[660px] h-[850px]",
    Img: PaypalSaving,
    ImgStyle: "absolute bottom-0 ",
    textStyle: "absolute top-8",
    Link: "/",
  },
];

const Data2 = [
  {
    Text: "Set up Direct Deposit",
    style: "bg-[#fcddc0] h-[700px] w-[900px]",
    Img: Direct_Deposit,
    ImgStyle: "",
    textStyle: "absolute bottom-8  ",
    Link: "/",
  },
  {
    Text: "Cash a Check",
    style: "bg-[#0070df] h-[700px] w-[500px]",
    Img: "",
    ImgStyle: "",
    textStyle: "absolute bottom-8  ",
    Link: "/",
  },
];
const SecondSlide = () => {
  return (
    <>
      <div id="cards-Collection">
        {Data.map((curr,id) => {
          return <CardsDesign1 data={curr} key={id}/>;
        })}
      </div>
      <div className="flex w-[80vw] m-auto gap-[30px]">
        {Data2.map((curr,id) => {
          return <CardsDesign1 data={curr} key={id}/>;
        })}
      </div>
    </>
  );
};

export default SecondSlide;
