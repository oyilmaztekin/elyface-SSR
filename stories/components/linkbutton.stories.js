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
import Image from "@comp/image/";

const navStyle = {
  backgroundColor: "#ffa200",
  padding: 40 + "px"
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: 40 + "px",
  width: 600 + "px"
};

const footerStyle = {
  backgroundColor: "#282841",
  padding: 40 + "px"
};

storiesOf("SSR Link Buttons", module)
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
  })

  .add("Footer Buttons", () => {
    return (
      <div style={footerStyle}>
        <Link
          href={text("href", "#")}
          passHref={boolean("passHref", true)}
        >
          <LinkButton
            text={text(
              "text for title and alt",
              "Sample Button"
            )}
            type={text("type", "footerList")}
          >
            <span>Sample Button</span>
          </LinkButton>
        </Link>
      </div>
    );
  })

  .add("Link Img", () => {
    return (
      <Link
        href={text("href", "#")}
        passHref={boolean("passHref", true)}
      >
        <LinkButton
          text={text(
            "text for title and alt",
            "Sample Button"
          )}
          type={text("type", "footerList")}
        >
          <Image
            src={text(
              "src",
              "http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg"
            )}
            desc={text(
              "desc",
              "Enflasyon haberi"
            )}
            width={text("width", "240")}
            height={text("height", "")}
          />
        </LinkButton>
      </Link>
    );
  });
