import "@globalstyle";
import "./assets/styles.scss";
import Image from "@comp/image/";
import React from "react";
import propTypes from "prop-types";

const Logo = props => {
  return (
    <Image
      src={props.src}
      title={props.title}
      alt={props.title}
      responsive={props.responsive}
    />
  );
};

Logo.propTypes = {
  src: propTypes.string.isRequired,
  title: propTypes.string,
  alt: propTypes.string,
  responsive: propTypes.bool
};

export default Logo;
