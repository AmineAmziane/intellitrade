import React from "react";
import Navbar from "./../navbar/";
import phone4 from "./../images/svgphone.svg";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./index.scss";
const BootstrapButton = withStyles({
  root: {
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    fontSize: 22,
    textTransform: "none",
    borderRadius: "8px",
    padding: ".75em 3em",
    lineHeight: 1.5,
    background: "linear-gradient(180deg, #00DD41 0%, #00B134 100%)",
    color: "#fff",
    fontFamily: ["Mulish", "BlinkMacSystemFont"].join(","),
    "&:hover": {
      boxShadow: "none",
    },
  },
})(Button);
const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="inner-header">
        <div className="info">
          <h1>A short slogan or title can go here.</h1>
          <p>
            Some short description or selling point can go here. The description
            you sent me was pretty long but I think we can put it somewhere else
            where it’ll look better on the website.
          </p>
          <BootstrapButton variant="contained" color="primary" className="">
            Start Your Free Month
          </BootstrapButton>
          <h6>30 day free trial then $19.99 per month.</h6>
        </div>
        <div className="phone">
          <img src={phone4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
