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
    style: "bg-[#0070df] w-[100%] h-[200px] sm:w-[100%] sm:h-[500px] lg:w-[100%] lg:h-[500px]",
    Img: "",
    ImgStyle: "absolute bottom-0 ",
    textStyle: "absolute bottom-8",
    Link: "/",
  },
  {
    Text: "Buy and Sell Crypto",
    style: "bg-[#001c62] w-[100%] h-[380px] sm:w-[100%] sm:h-[650px] lg:w-[100%] lg:h-[700px]",
    Img: BuyAndSellCrypto,
    ImgStyle: "absolute BuyAndSellCrypto top-[50%] left-[50%]",
    textStyle: "absolute bottom-8",
    Link: "/",
  },
  {
    Text: "Pay Bills",
    style: "bg-[#fed140] w-[100%] h-[380px] sm:w-[100%] sm:h-[650px] lg:w-[100%] lg:h-[700px]",
    Img: PayBills,
    ImgStyle: "absolute bottom-0  h-[80%] object-cover sm:object-fill",
    textStyle: "absolute top-8",
    Link: "/",
  },
  {
    Text: "PayPal Savings",
    style: "bg-[#3672b0] w-[100%] h-[200px] sm:w-[100%] sm:h-[500px] lg:w-[100%] lg:h-[500px]",
    Img: PaypalSaving,
    ImgStyle: "absolute bottom-0 h-[100%] object-cover",
    textStyle: "absolute top-8",
    Link: "/",
  },
];

const Data2 = [
  {
    Text: "Set up Direct Deposit",
    style: "bg-[#fcddc0] h-[100%] w-[65%]",
    Img: Direct_Deposit,
    ImgStyle: "h-[100%] w-[100%] object-cover",
    textStyle: "absolute bottom-8  ",
    Link: "/",
  },
  {
    Text: "Cash a Check",
    style: "bg-[#0070df] h-[100%] w-[35%]",
    Img: "",
    ImgStyle: "",
    textStyle: "absolute bottom-8  ",
    Link: "/",
  },
];
const SecondSlide = () => {
  return (
    <>
      <div id="cards-Collection" className="w-[95vw] sm:w-[80vw] lg:w-[60vw] m-auto mt-[-170px] sm:mt-[50px] lg:mt-[-250px] gap-[1rem] text-xl columns-2">
        {Data.map((curr,id) => {
          return <CardsDesign1 data={curr} key={id}/>;
        })}
      </div>
      <div className="flex w-[95vw] sm:w-[80vw] lg:w-[60vw] mb-5 h-[300px] sm:h-[500px] lg:h-[700px] m-auto gap-[30px]">
        {Data2.map((curr,id) => {
          return <CardsDesign1 data={curr} key={id}/>;
        })}
      </div>
    </>
  );
};

export default SecondSlide;
