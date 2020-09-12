import React from "react";
import "./index.scss";
import tw from "./../images/tw.svg";
import vector2 from "./../images/vector2.svg";
import msg from "./../images/msg.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="p1-f">
        <img src={vector2} alt="" />
        <p>© 2020 Intellitrade. All rights reserved.</p>
      </div>
      <div className="p2-f">
        <img src={tw} alt="" />
        <img src={msg} alt="" />
        <p>Disclaimer can go in here.</p>
      </div>
    </div>
  );
};

export default Footer;
