/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text
} from "@storybook/addon-knobs";
import Moment from "@comp/moment/";

storiesOf("Moment", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Moment Header", () => {
    return (
      <Moment
        format={text(
          "format",
          "Do MMMM YYYY, dddd"
        )}
      >
        <span>⏰ </span>
      </Moment>
    );
  });
