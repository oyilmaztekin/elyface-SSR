/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  object,
  text
} from "@storybook/addon-knobs";
import Carousel from "@comp/carousel/";
import { withReadme } from "storybook-readme";
import carouselReadme from "@comp/carousel/README.md";
import mockData from "@mock/carouselMocks.json";

storiesOf("Carousel", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(carouselReadme))
  .add("Simple Carousel", () => {
    return (
      <Carousel
        width={text("width", "600")}
        layout={text("layout", "bottom")}
        slides={object("slides", mockData)}
        onMouseEnter={action("mouse entered")}
      />
    );
  });
