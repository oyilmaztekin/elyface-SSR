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
import CardManager from "@nest/cardManager/";

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Card Manager", () => {
    return (
      <CardManager
        dataset={text("dataset", "cat-gundem")}
        limit={number("limit", 5)}
        direction={text(
          "direction",
          "horizontal"
        )}
        bg={text("bg", "#323232")}
        cardBg={text("cardBg", "#fff")}
        textColor={text("textColor", "#323232")}
        fontSize={text("fontSize", "18")}
        gallery={boolean("gallery", false)}
        imgClassName={text("imgClassName", "")}
        border={text("borderColor", "#ffa200")}
        width={number("width", 400)}
        height={number("height", 320)}
        lineHeight={text("lineHeight", "24")}
      />
    );
  });
