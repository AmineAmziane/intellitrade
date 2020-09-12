import React from "react";
import contract from "./../images/contract.svg";
import idea from "./../images/idea-2.svg";
import gift from "./../images/gift.svg";
import "./index.scss";

const Feature = () => {
  return (
    <div className="feature">
      <h1>Features</h1>
      <p>Short description could go here.</p>
      <div className="inner-feature">
        <div className="card">
          <img src={contract} alt="" />
          <h2>Daily Briefing</h2>
          <p>
            The IntelliTrade daily briefing provides insight into the latest and
            most important market developments so that you are prepared for the
            trading day. The one-page briefing will be delivered every trading
            day before the market opens. The IntelliTrade team is very skilled
            at making the complex simpler.
          </p>
        </div>
        <div className="card">
          <img src={idea} alt="" />
          <h2>Experience</h2>
          <p>
            The team at IntelliTrade does not chase stocks, throw darts at a
            board, or pass on stock tips from chat rooms. We follow a strict
            research and risk management process to not only tell you when to
            enter a trade but when to exit as well.
          </p>
        </div>
        <div className="card">
          <img src={gift} alt="" />
          <h2>Giving Back</h2>
          <p>
            IntelliTrade gives back 10% of all proceeds via interest free
            microloans to small business start-ups. The twist is all
            IntelliTrade customers get to vote on which businesses receive the
            loans. When loans are payed back the money goes back to the pool in
            order to help start more businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
