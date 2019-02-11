import "@globalstyle";
import "./assets/styles.scss";
import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import Image from "@comp/image/";
import LinkButton from "@comp/linkButton/";
import Link from "next/link";
import Icon from "@comp/icon/";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  let {
    id,
    bg,
    className,
    loading,
    gallery,
    iconSize,
    iconTop,
    children
  } = props;
  return (
    <div
      id={id}
      className={classNames(
        "card",
        className && `card-${className}`,
        loading && `card-loading`
      )}
      style={{ backgroundColor: bg }}
    >
      {gallery ? (
        <Icon
          icon={faCamera}
          size={iconSize}
          iconTop={iconTop}
          className="card-icon"
        />
      ) : null}
      {children}
    </div>
  );
};

Card.constructor.displayName = "Card";

Card.propTypes = {
  id: propTypes.string.isRequired,
  bg: propTypes.string,
  className: propTypes.string,
  loading: propTypes.bool,
  children: propTypes.node,
  gallery: propTypes.bool,
  iconSize: propTypes.string,
  iconTop: propTypes.string
};

Card.IMG = props => {
  const ImgDivider = (
    <div
      className="card-divider"
      style={{ backgroundColor: props.border }}
    >
      {" "}
    </div>
  );
  return (
    <React.Fragment className={props.className}>
      <Link href="#" passHref>
        <LinkButton
          text="Sample Button"
          type={props.type}
        >
          <Image
            src={props.src}
            responsive
            alt={props.alt}
            longdesc={props.longdesc}
          />
        </LinkButton>
      </Link>
      {props.border && ImgDivider}
    </React.Fragment>
  );
};

Card.IMG.displayName = "Card.IMG";

Card.IMG.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string,
  longdesc: propTypes.string,
  className: propTypes.string,
  type: propTypes.string,
  border: propTypes.string
};

Card.Title = props => (
  <div
    className={classNames(
      "card-title",
      props.className &&
        `card-title-${props.className}`
    )}
  >
    <Link href="#" passHref>
      <LinkButton
        text="Sample Button"
        type={props.type}
      >
        <span
          style={{
            color: props.color && props.color,
            fontSize:
              props.fontSize &&
              props.fontSize + "px"
          }}
        >
          {props.title}
        </span>
      </LinkButton>
    </Link>
  </div>
);

Card.Title.displayName = "Card.Title";

Card.Title.propTypes = {
  title: propTypes.string.isRequired,
  color: propTypes.string,
  fontSize: propTypes.string,
  className: propTypes.string,
  type: propTypes.string
};

export default Card;
