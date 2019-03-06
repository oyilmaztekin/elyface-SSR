import "./assets/styles.scss";
import React from "react";
import Row1 from "./lib/row1";
import Row2 from "./lib/row2";

const Footer = () => {
  return (
    <div className="footer">
      <Row1 />
      <hr />
      <Row2 />
    </div>
  );
};

export default Footer;
