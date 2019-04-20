import React from "react";
import propTypes from "prop-types";
import LinkButton from "@comp/linkButton/";
import "./assets/styles.scss";

const Navigation = props => {
  const navData = props.navElements;
  const navEls = navData.map((el, idx) => (
    <li key={idx} className="nav-item">
      <LinkButton
        className="link-nav"
        text={el.key}
        href={el.href}
      >
        <span>{el.key}</span>
      </LinkButton>
    </li>
  ));
  return <ul className="nav">{navEls}</ul>;
};

Navigation.propTypes = {
  navElements: propTypes.array.isRequired
};

export default Navigation;
