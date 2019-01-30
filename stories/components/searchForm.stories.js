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
import SearchField from "@comp/searchfield/";

const headerBG = {
  backgroundColor: "#ffa200",
  padding: 40 + "px",
  width: 100 + "%"
};

storiesOf("Search Form", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Search Form", () => {
    return (
      <div style={headerBG}>
        <SearchField
          id={text("id", "unique_id")}
          name={text("name", "unique_name")}
          value={text("value", "Ara")}
          type={text("type", "search")}
          submitText={text("submit", "🔎")}
        />
      </div>
    );
  });
