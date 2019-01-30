/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text,
  boolean,
  object
} from "@storybook/addon-knobs";
import Navigation from "@comp/navigation/";
import mockData from "@mock/menuMocks.json";

storiesOf("Navigation", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
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
