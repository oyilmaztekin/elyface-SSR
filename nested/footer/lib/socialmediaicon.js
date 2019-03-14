import React from "react";
import Icon from "@comp/icon/";
import Link from "next/link";
import LinkButton from "@comp/linkButton/";
import propTypes from "prop-types";
const SocialMediaIcon = props => {
  return (
    <Link href={props.href} passHref={true}>
      <LinkButton
        text={props.desc}
        className={`${props.className} icons`}
        target="_blank"
      >
        <Icon
          icon={props.icon}
          color={props.color}
        />
      </LinkButton>
    </Link>
  );
};

SocialMediaIcon.propTypes = {
  icon: propTypes.object.isRequired,
  className: propTypes.string,
  color: propTypes.string,
  href: propTypes.string,
  desc: propTypes.desc
};

export default SocialMediaIcon;
