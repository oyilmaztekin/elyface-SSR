/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text
} from "@storybook/addon-knobs";
import SearchForm from "@comp/searchform/";
import { action } from "@storybook/addon-actions";
import { withReadme } from "storybook-readme";
import SearchFormREADME from "@comp/searchform/README.md";

const headerBG = {
  backgroundColor: "#ffa200",
  padding: 40 + "px",
  width: 100 + "%"
};

storiesOf("Search Form", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(SearchFormREADME))
  .add("Search Form", () => {
    return (
      <div style={headerBG}>
        <SearchForm
          id={text("id", "unique_id")}
          name={text("name", "unique_name")}
          value={text("value", "Ara")}
          type={text("type", "search")}
          onClick={action("submit")}
          className={text(
            "class",
            "search-form-input"
          )}
        />
      </div>
    );
  });
