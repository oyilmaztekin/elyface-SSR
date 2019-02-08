import "@globalstyle";
import React from "react";
import propTypes from "prop-types";
import Link from "next/link";
import LinkButton from "@comp/linkButton/";
import "./assets/styles.scss";

const Navigation = props => {
  const navClass = `nav ${props.className}`;
  const navData = props.navElements;
  const navEls = navData.map((el, idx) => (
    <li key={idx} className="nav-item">
      <Link href={el.href} passHref>
        <LinkButton
          type="nav"
          text={el.key}
          onMouseEnter={props.onMouseEnter}
        >
          <span>{el.key}</span>
        </LinkButton>
      </Link>
    </li>
  ));
  return <ul className={navClass}>{navEls}</ul>;
};

Navigation.propTypes = {
  navElements: propTypes.array.isRequired,
  onMouseEnter: propTypes.func,
  className: propTypes.string
};

export default Navigation;
