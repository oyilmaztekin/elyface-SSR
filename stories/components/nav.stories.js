/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  object
} from "@storybook/addon-knobs";
import Navigation from "@comp/navigation/";
import mockData from "@mock/menuMocks.json";
import { withReadme } from "storybook-readme";
import navReadme from "@comp/navigation/README.md";

storiesOf("Navigation", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(navReadme))
  .add("Navigation Buttons", () => {
    return (
      <Navigation
        navElements={object(
          "navElements",
          mockData
        )}
      />
    );
  });
