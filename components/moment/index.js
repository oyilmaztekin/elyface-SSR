import "./assets/styles.scss";
import React from "react";
import propTypes from "prop-types";
import dayjs from "dayjs";
import "dayjs/locale/tr";

dayjs.locale("tr");

const Moment = props => {
  const momentFormat = dayjs().format(props.format).toString();
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
