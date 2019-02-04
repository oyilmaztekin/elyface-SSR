/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  object,
  text
} from "@storybook/addon-knobs";
import Carousel from "@comp/carousel/";
import { withReadme } from "storybook-readme";
import carouselReadme from "@comp/carousel/README.md";

const carouselSlidesData = [
  {
    src:
      "http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg",
    desc: "Enflasyon haberi",
    longdesc: "Enflasyon haberi"
  },
  {
    src:
      "http://cdn.haberiyakala.com/assets/uploads/images/manset/2019/02/04/manset_papanin-karsisinda-el-pence_0xooUF0U43d3GHM.jpg",
    desc: "Enflasyon haberi",
    longdesc: "Enflasyon haberi"
  }
];

storiesOf("Carousel", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(carouselReadme))
  .add("Simple Carousel", () => {
    return (
      <Carousel
        slides={object(
          "slides",
          carouselSlidesData
        )}
        width={text("width", "")}
        buttonClass={text(
          "buttonClass",
          "orange"
        )}
      />
    );
  });
