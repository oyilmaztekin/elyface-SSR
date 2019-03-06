
import "./assets/styles.scss";
import React from "react";
import propTypes from "prop-types";
import moment from "moment";
import "moment/locale/tr";

const Moment = props => {
  const momentFormat = moment().format(
    props.format
  );
  return (
    <div className={props.className}>
      {props.children}
      <span data-test="moment-format">
        {momentFormat}
      </span>
    </div>
  );
};

Moment.propTypes = {
  format: propTypes.string.isRequired,
  children: propTypes.node,
  className: propTypes.string
};

export default Moment;
