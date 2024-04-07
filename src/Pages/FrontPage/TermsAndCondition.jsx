import React from "react";
import { NavLink } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="w-[90vw] text-xs sm:w-[80vw] lg:w-[70vw] text-justify m-auto flex flex-col gap-4 text-primary-Color font-semibold sm:text-[13px] my-16">
      <p>
        <sup>1</sup> Direct Deposit is subject to the payor's support of this feature. Funds deposited via Direct Deposit will generally be available on the day we receive the funds transfer. You may review activity on your periodic statements or transaction history on www.PayPal.com, or call Customer Service at 1-888-221-1161 to verify receipt. We reserve the right to accept, reject, or limit transfers via Direct Deposit in our sole discretion. If you wish to cancel Direct Deposits, you must contact your employer. PayPal does not charge any fee to set up or maintain Direct Deposit. Refer to your PayPal User Agreement for complete Direct Deposit details.
      </p>
      <p>
        Once it's set up, Direct Deposit usually takes two (2) pay cycles to begin, but can vary across employers. Please check with your employer for specific timing.
      </p>
      <p>
        <sup>2</sup> New Direct Deposit enrollees will be eligible for early access, subject to the terms and conditions. The early access feature will be made available to all eligible Direct Deposit customers in the coming months. Early access can allow a user to access their funds up to 2 days early. Early access to funds depends on when we get payment instructions from the payor (your employer or government agency). When we get funds before the scheduled payment date, your money can be made available up to 2 days sooner than scheduled. Availability and timing can vary based on the payor and when we get payment instructions. Once the funds are received, they will be deposited directly into your PayPal balance.
      </p>
      <p>
        <sup>3</sup> Up to $4.95 cash reload fee applies. This service fee is to add cash into your PayPal Balance account.
      </p>
      <p>
        <sup>4</sup> The PayPal Cash Card is a debit card linked to your PayPal Balance account. The PayPal Cash Card is not a credit card. PayPal is not a bank and does not itself take deposits. You will not receive any interest on the funds in your PayPal Balance account. Cash funds held in a PayPal Balance account are not eligible for FDIC pass-through insurance coverage unless you have a PayPal Cash Card, or have enrolled in Direct Deposit, or have bought cryptocurrency. If your PayPal Balance account is eligible for FDIC pass-through insurance, PayPal will deposit your cash funds into one or more custodial accounts maintained for the benefit of eligible customers at one or more FDIC-insured banks. Funds in these custodial accounts are eligible for pass- through FDIC insurance coverage up to applicable limits. See the <NavLink to={"/"} className="text-secondary-Color  delay-100 hover:text-[#1167cac4]">PayPal Balance Terms and Conditions</NavLink> for additional information.
      </p>
      <p>
        The PayPal Cash Mastercard ("PayPal Cash Card") is issued by The Bancorp Bank pursuant to a license by Mastercard International Incorporated. Mastercard is a registered trademark, and the circles design is a trademark, of Mastercard International Incorporated. The Bancorp Bank is issuer of the Card only and not responsible for the associated accounts or other products, services or offers from PayPal. Card may be used everywhere Mastercard is accepted. The Bancorp Bank does not hold your PayPal Balance account funds.
      </p>
      <p>
        <sup>5</sup> The Cash a Check feature is a service provided by First Century Bank, N.A. and Ingo Money, Inc., subject to the First Century Bank and Ingo Money Terms and Conditions and Privacy Policy. Fees and terms apply. All checks subject to review for approval. Unapproved checks will not be funded to your account. For more details, see the <NavLink to={"/"} className="text-secondary-Color delay-100 hover:text-[#1167cac4]">terms and conditions</NavLink>.
      </p>
      <p>
        <sup>6</sup> As of July 28, 2022, the annual percentage yield (APY) for PayPal Savings is 1.65%. This is a variable rate and can change at any time, including after the account is opened. Banking services provided by Synchrony Bank, Member FDIC.
      </p>
      <p>
        <sup>7</sup> PayPal Balance account required. When you buy or sell cryptocurrency, including when you check out with crypto, we will disclose an exchange rate and any fees you will be charged for that transaction. The exchange rate includes a spread that PayPal earns on each purchase and sale. <NavLink to={"/"} className="text-secondary-Color delay-100 hover:text-[#1167cac4]">See cryptocurrency fees</NavLink>.
      </p>
      <p>
        Buying, selling, and holding cryptocurrencies is not regulated in many states, including the State of California. PayPal, Inc. is licensed to engage in virtual currency business activity by the New York State Department of Financial Services. Buying, selling, and holding cryptocurrency with PayPal is not available in Hawaii and where prohibited by law.
      </p>
      <p>
        Buying and selling cryptocurrency is subject to a number of risks and may result in significant losses. Please see our disclosure here for more details. PayPal does not make any recommendations regarding buying or selling cryptocurrency. Consider seeking advice from your financial and tax advisor. All custody of and buying and selling in cryptocurrency is performed for PayPal by its licensed service provider, Paxos Trust Company, LLC.
      </p>
    </div>
  );
};

export default TermsAndCondition;
