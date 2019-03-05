import React from "react";
import propTypes from "prop-types";

const Container = props => {
  let perc;
  props.percentage ? (perc = "%") : (perc = "px");
  return (
    <div
      style={{
        width: props.width + perc,
        display: props.display,
        justifyContent: props.display,
        paddingTop: props.paddingTop + "px",
        paddingRight: props.paddingRight + "px",
        paddingBottom: props.paddingBottom + "px",
        paddingLeft: props.paddingLeft + "px"
      }}
    >
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: propTypes.node.isRequired,
  width: propTypes.number,
  percentage: propTypes.bool,
  display: propTypes.string,
  justify: propTypes.string,
  paddingLeft: propTypes.number,
  paddingRight: propTypes.number,
  paddingTop: propTypes.number,
  paddingBottom: propTypes.number
};

Container.defaultProps = {
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: 40,
  paddingRight: 40
};

export default Container;
