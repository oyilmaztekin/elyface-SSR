import "./assets/styles.scss";
import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

const Image = props => {
  let classN = classNames({
    responsive: props.responsive
  });
  if (!props.placeholder) {
    return (
      <img
        alt={props.alt}
        className={classN}
        {...props}
      />
    );
  }
  return (
    <img
      alt={props.alt}
      className={classN}
      src="/static/placeholder.jpg"
      data-source={props.source}
    />
  );
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  responsive: propTypes.bool,
  height: propTypes.string,
  width: propTypes.string,
  longdesc: propTypes.string,
  desc: propTypes.string,
  srcSet: propTypes.string,
  sizes: propTypes.string,
  source: propTypes.string,
  onLoad: propTypes.func,
  placeholder: propTypes.bool,
  alt: propTypes.string
};

export default Image;
