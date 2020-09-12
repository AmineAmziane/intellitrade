import React from "react";
import "./index.scss";
import download2 from "./../images/download-2.svg";
import password2 from "./../images/password-2.png";
import operator from "./../images/operator.svg";
import refund from "./../images/refund.svg";
import price from "./../images/price.svg";
const Faq = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <p>Please select a question.</p>
      <div className="faq-all">
        <div className="card">
          <img src={price} alt="" />
          <h6>What is the pricing of IntelliTrade ? </h6>
        </div>
        <div className="card">
          <img src={refund} alt="" />
          <h6>Is my purchase refundable? </h6>
        </div>
        <div className="card">
          <img src={operator} alt="" />
          <h6>How can I contact the support team?</h6>
        </div>
        <div className="card">
          <img src={download2} alt="" />
          <h6>Where can I download IntelliTrade? </h6>
        </div>
        <div className="card pass">
          <img src={password2} alt="" />
          <h6>Where can I change my password? </h6>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
