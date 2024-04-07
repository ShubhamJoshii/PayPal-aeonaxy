import React from 'react'
import CardsDesign2 from '../../Components/CardsDesign2'
import CardsDesign3 from '../../Components/CardsDesign3'

import Grow_Your_PayPal from "../../Assets/Grow_Your_PayPal.png"
import Discover_crypto from "../../Assets/Discover_crypto.png"
import PayBillAtOnePlace from "../../Assets/PayBillAtOnePlace.png"
import PayPalCashCard from "../../Assets/PayPalCashCard.png"
const data = [
  {
    Heading:"Grow your PayPal Savings, with interest",
    Description:["Our 1.65% APY gives you even more room to build your rainy-day fund without monthly fees or minimum balances.",<sup>6</sup>],
    LinkText:"More about PayPal Savings",
    LinkURL:"/",
    Image:Grow_Your_PayPal,
  },
  {
    Heading:"Discover crypto",
    Description:["Learn how to buy, sell, transfer, and hold Bitcoin, Bitcoin Cash, Ethereum. and Litecoin with confidence.",<sup>7</sup>],
    LinkText:"More about adding cash",
    LinkURL:"/",
    Image:Discover_crypto,
  },
]

const data2 = [
  {
    Heading:"Pay your bills in one place",
    Description:<p>Securely pay your utilities, TV. internet. phone bills. and more.</p>,
    LinkText:"Pay bills with PayPal",
    LinkURL:"/",
    Image:PayBillAtOnePlace,
  },
  {
    Heading:"Meet the PayPal Cash Card",
    Description:<p>pay in person or online everywhere Mastercard®️ is accepted, Plus, there's no monthly fee, minimum balance, or credit Check required.<sup>4</sup></p>,
    LinkText:"About the PayPal Cash Card",
    LinkURL:"/",
    Image:PayPalCashCard,
  },
]

const FifthSlide = () => {
  return (
    <>
    <h1 className="text-[#001c62]  text-xl sm:text-3xl  lg:text-5xl font-extrabold mt-6 sm:mt-12 lg:mt-24  m-auto text-center">
    More ways to manage your <br /> money
        </h1>
    <div className='my-4 sm:my-8 lg:my-16 flex flex-col'>
    {
      data.map((curr, id)=>{
        return <CardsDesign3 data={curr} position={id} key={id}/> 
      })
    }
    </div>
    <div className='my-16 flex flex-col gap-12'>
    {
      data2.map((curr, id)=>{
        return <CardsDesign2 data={curr} position={id+1} key={id}/> 
      })
    }
    </div>
    </>
  )
}

export default FifthSlide
