/* eslint-disable */
import React from "react";

import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text,
  boolean
} from "@storybook/addon-knobs";
import Link from "next/link";
import LinkButton from "@comp/linkButton/";

const navStyle = {
  backgroundColor: "#ffa200",
  padding: 40 + "px"
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: 40 + "px",
  width: 600 + "px"
};

storiesOf("LinkButton", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Navigation Buttons", () => {
    return (
      <div style={navStyle}>
        <Link
          href={text("href", "#")}
          passHref={boolean("passHref", true)}
        >
          <LinkButton
            text={text(
              "text for title and alt",
              "Sample Button"
            )}
            type={text("type", "navBtn")}
          >
            <span>Sample Button</span>
          </LinkButton>
        </Link>
      </div>
    );
  })

  .add("Card & Content Buttons", () => {
    return (
      <div style={cardStyle}>
        <div className={"link-bread-wrapper"}>
          <Link
            href={text("href", "#")}
            passHref={boolean("passHref", true)}
          >
            <LinkButton
              text={text(
                "text for title and alt",
                "Sample Button"
              )}
              type={text("type", "bread")}
            >
              <span>Sample Button</span>
            </LinkButton>
          </Link>
        </div>
      </div>
    );
  });
