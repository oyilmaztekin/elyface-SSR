/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text,
  boolean
} from "@storybook/addon-knobs";
import Card from "@comp/card/";
import { withReadme } from "storybook-readme";
import CardReadme from "@comp/card/README.md";

const cardStyle = {
  width: 400 + "px"
};

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(CardReadme))
  .add("Image", () => {
    return (
      <div style={cardStyle}>
        <Card
          id={text("id", "unique_id")}
          bg={text("bg", "#ffffff")}
          gallery={boolean("gallery", true)}
          iconSize={text("iconSize", "24")}
          iconTop={text("iconTop", "15")}
        >
          <Card.IMG
            src={text(
              "src",
              "http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg"
            )}
            longdesc={text(
              "longdesc",
              "Enflasyon haberi"
            )}
            alt={text("alt", "Enflasyon haberi")}
            border={text("border", "#ffa200")}
          />
          <Card.Title
            title={text(
              "title",
              "Merkez Bankası'ndan Hükümete Açık Metkup"
            )}
            color={text("color", "#323232")}
            fontSize={text("fontSize", "20")}
            lineHeight={text("line-height", "28")}
          />
        </Card>
      </div>
    );
  });
