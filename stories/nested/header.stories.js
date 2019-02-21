/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  object
} from "@storybook/addon-knobs";
import Header from "@nest/header/";
import readmeDOC from "@nest/header/README.md";
import { withReadme } from "storybook-readme";
import mockData from "@mock/menuMocks.json";

storiesOf("Templates", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readmeDOC))
  .add("Header", () => {
    return (
      <Header
        LogoImage={text(
          "LogoImage",
          "http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
        )}
        stickyClassName={text(
          "className",
          "orange-bg container"
        )}
        navElements={object(
          "navElements",
          mockData
        )}
      />
    );
  });
