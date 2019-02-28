/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text,
  number,
  boolean
} from "@storybook/addon-knobs";
import readmeDOC from "@nest/cardManager/README.md";
import { withReadme } from "storybook-readme";
import CardManager from "@nest/cardManager/";

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(readmeDOC))
  .add("Card Manager", () => {
    return (
      <CardManager
        dataset={text("dataset", "cat-gundem")}
        limit={number("limit", 5)}
        vertical={boolean("vertical", false)}
        containerBG={text(
          "containerBG",
          "#ffffff"
        )}
        cardBg={text("cardBg", "#fff")}
        textColor={text("textColor", "#323232")}
        fontSize={text("fontSize", "18")}
        gallery={boolean("gallery", false)}
        imgClassName={text("imgClassName", "")}
        border={text("borderColor", "#ffa200")}
        width={number("width", 400)}
        height={number("height", 320)}
        lineHeight={text("lineHeight", "24")}
        border={text("border", "#ffa200")}
      />
    );
  });
