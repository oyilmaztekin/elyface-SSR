
import "./assets/styles.scss";
import React from "react";
import propTypes from "prop-types";
import dateFns from "date-fns";
import tr from 'date-fns/locale/tr'


const Moment = props => {
  const momentFormat = dateFns.format(
    new Date(), props.format, { locale: tr }
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
