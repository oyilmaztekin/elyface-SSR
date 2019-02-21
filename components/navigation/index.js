import "@globalstyle";
import React from "react";
import propTypes from "prop-types";
import Link from "next/link";
import LinkButton from "@comp/linkButton/";
import "./assets/styles.scss";

const Navigation = props => {
  const navData = props.navElements;
  const navEls = navData.map((el, idx) => (
    <li key={idx} className="nav-item">
      <Link href={el.href} passHref>
        <LinkButton
          className="link-nav"
          text={el.key}
        >
          <span>{el.key}</span>
        </LinkButton>
      </Link>
    </li>
  ));
  return <ul className="nav">{navEls}</ul>;
};

Navigation.propTypes = {
  navElements: propTypes.array.isRequired
};

export default Navigation;
