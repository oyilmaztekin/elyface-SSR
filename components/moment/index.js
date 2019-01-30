import "@globalstyle";
import "./assets/styles.scss";
import React from "react";
import propTypes from "prop-types";
import * as moment from "moment";
import "moment/locale/tr";

const Moment = props => {
  const momentFormat = moment().format(
    props.format
  );
  return (
    <React.Fragment>
      {props.children}
      <span>{momentFormat}</span>
    </React.Fragment>
  );
};

Moment.propTypes = {
  format: propTypes.string.isRequired,
  children: propTypes.node
};

export default Moment;
