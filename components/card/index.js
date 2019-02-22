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
    <div className={props.className}>
      <Link href="#" passHref>
        <LinkButton text="Sample Button">
          <Image
            src={props.src}
            responsive
            alt={props.alt}
            longdesc={props.longdesc}
          />
        </LinkButton>
      </Link>
      {props.border && ImgDivider}
    </div>
  );
};

Card.IMG.displayName = "Card.IMG";

Card.IMG.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string,
  longdesc: propTypes.string,
  className: propTypes.string,
  border: propTypes.string
};

Card.Title = props => {
  let {
    className,
    color,
    fontSize,
    lineHeight,
    title
  } = props;
  return (
    <div
      className={classNames(
        "card-title",
        className && `card-title-${className}`
      )}
    >
      <Link href="#" passHref>
        <LinkButton text="Sample Button">
          <span
            style={{
              color: color && color,
              fontSize: fontSize + "px",
              lineHeight: lineHeight + "px"
            }}
          >
            {title}
          </span>
        </LinkButton>
      </Link>
    </div>
  );
};

Card.Title.displayName = "Card.Title";

Card.Title.propTypes = {
  title: propTypes.string.isRequired,
  color: propTypes.string,
  fontSize: propTypes.string,
  lineHeight: propTypes.string,
  className: propTypes.string
};

export default Card;