/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text,
  number,
  boolean,
  object
} from "@storybook/addon-knobs";
import readmeDOC from "@comp/lists/README.md";
import mockData from "@mock/cardMock.json";
import { withReadme } from "storybook-readme";
import Lists from "@comp/lists/";

storiesOf("Lists", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(readmeDOC))
  .add("seo haberleri", () => {
    return (
      <Lists
        limit={number("limit", 5)}
        bg={text("bg", "#ffffff")}
        className={text(
          "className",
          "list-link seo-haberleri"
        )}
        linkClassName={text(
          "linkClassName",
          "link-footer-category"
        )}
        vertical={boolean("vertical", false)}
        registry={object("registry", mockData)}
      />
    );
  });
