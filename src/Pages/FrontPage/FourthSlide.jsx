import React from "react";
import CardsDesign2 from "../../Components/CardsDesign2";
import Image1 from "../../Assets/Image1.png";
import Image2 from "../../Assets/Image2.png";
import Image3 from "../../Assets/Image3.png";

const data = [
  {
    Heading: "Get paid early",
    Description: <p>Get paychecks and government payments automatically transferred to your PayPal balance<sup>1</sup> up to 2 days early.<sup>2</sup></p>,
    LinkText: "More about Direct Deposit",
    LinkURL: "/",
    Image: Image1,
  },
  {
    Heading: "Digitize your cash",
    Description: <p>Add cash<sup>3</sup> with the app or the PayPal cash card,<sup>4</sup>, at 100,000+ stores across the US, including Walmart, CVS, and 7-Eleven., </p>,
    LinkText: "More about adding cash",
    LinkURL: "/",
    Image: Image2,
  },
  {
    Heading: "Skip the bank",
    Description: <p>Snap photos of checks with the Cash a Check<sup>5</sup> feature in the app and add that money to your PayPal balance.</p>,
    LinkText: "Explore mobile check cashing",
    LinkURL: "/",
    Image: Image3,
  },
];
const dataOLD = [
  {
    Heading: "Get paid early",
    Description: [
      "Get paychecks and government payments",
      <br />,
      " automatically transferred to your PayPal",
      <br />,
      " balance",
      <sup>1</sup>,
      " up to 2 days early.",
      <sup>2</sup>,
    ],
    LinkText: "More about Direct Deposit",
    LinkURL: "/",
    Image: Image1,
  },
  {
    Heading: "Digitize your cash",
    Description: [
      "Add cash",
      <sup>3</sup>,
      " with the app or the",
      <br />,
      " PayPal cash card",
      <sup>4</sup>,
      " at 100,000+",
      <br />,
      " stores across the US, including",
      <br />,
      " Walmart, CVS, and 7-Eleven.",
    ],
    LinkText: "More about adding cash",
    LinkURL: "/",
    Image: Image2,
  },
  {
    Heading: "Skip the bank",
    Description: [
      "Snap photos of checks with the",
      <br />,
      " Cash a Check",
      <sup>5</sup>,
      " feature in the app",
      <br />,
      " and add that money to your PayPal",
      <br />,
      " balance.",
    ],
    LinkText: "Explore mobile check cashing",
    LinkURL: "/",
    Image: Image3,
  },
];

const FourthSlide = () => {
  return (
    <>
      <div className="my-16  m-auto text-center">
        <h1 className="text-[#001c62] text-2xl sm:text-3xl  lg:text-5xl font-extrabold">
          Make the most of your <br /> money
        </h1>
        <p className="text-[#031b61]  text-base sm:text-xl  lg:text-2xl font-extrabold mt-4">
          We make it simple to use and organize your money. <br />
          So you're always in control of your finances.
        </p>
      </div>
      <div className="my-16 flex flex-col gap-12">
        {data.map((curr, id) => {
          return <CardsDesign2 data={curr} position={id} key={id}/>;
        })}
      </div>
    </>
  );
};

export default FourthSlide;
