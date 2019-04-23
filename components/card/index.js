import "./assets/styles.scss";
import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import Image from "@comp/image/";
import LinkButton from "@comp/linkButton/";
import Link from "next/link";
import Icon from "@comp/icon/";

const Card = props => {
  let {
    id,
    className,
    bg,
    loading,
    children,
    height,
    width,
    gallery
  } = props;
  return (
    <div
      id={id}
      data-content-id={id}
      className={classNames(
        "card",
        className && `card-${className}`,
        loading && `card-loading`
      )}
      style={{
        width: width,
        height: height,
        backgroundColor: bg
      }}
    >
      {gallery ? (
        <Icon
          icon="gallery"
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
  height: propTypes.number,
  width: propTypes.number
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
      <Link href={props.href} passHref>
        <LinkButton text={props.alt}>
          {!props.placeholder ? (
            <Image
              src={props.src}
              placeholder={false}
              responsive
              alt={props.alt}
              longdesc={props.longdesc}
            />
          ) : (
            <Image
              source={props.src}
              placeholder={true}
              responsive
              alt={props.alt}
              longdesc={props.longdesc}
            />
          )}
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
  border: propTypes.string,
  href: propTypes.string,
  placeholder: propTypes.bool
};

Card.Title = props => {
  let {
    className,
    color,
    fontSize,
    lineHeight,
    title,
    href
  } = props;
  return (
    <div
      className={classNames(
        "card-title",
        className && `card-title-${className}`
      )}
    >
      <Link href={href} passHref>
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
  className: propTypes.string,
  href: propTypes.string
};

export default Card;
