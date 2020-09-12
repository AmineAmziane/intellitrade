import React from "react";
import "./index.scss";
import shema from "./../images/shema.svg";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="info">
        <h1>About Us</h1>
        <p>
          IntelliTrade provides actionable low risk/high return trade signals in
          an easy to follow format. The research team at IntelliTrade uses a
          process that has been developed from decades of professional trading
          experience.
        </p>
        <p>
          Unlike Wall Street where the goal is to make themselves money off the
          customer’s
          <br />
          back, there is no bullshit with IntelliTrade.
        </p>

        <p>
          We have a strict policy of not front running trades or providing trade
          signals to higher paying customers first.
        </p>

        <p>All customers are treated equal at IntelliTrade.</p>
      </div>
      <div className="shema">
        <img src={shema} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
