
import "./assets/styles.scss";
import Image from "@comp/image/";
import React from "react";
import propTypes from "prop-types";

const Logo = props => {
  return <Image {...props} />;
};

Logo.propTypes = {
  src: propTypes.string.isRequired,
  title: propTypes.string,
  alt: propTypes.string,
  responsive: propTypes.bool,
  className: propTypes.string
};

export default Logo;
