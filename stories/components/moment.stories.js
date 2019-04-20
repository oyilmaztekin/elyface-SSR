/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text
} from "@storybook/addon-knobs";
import Moment from "@comp/moment/";
import { withReadme } from "storybook-readme";
import momentReadme from "@comp/moment/README.md";
import Icon from "@comp/icon/";

storiesOf("Moment", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(momentReadme))
  .add("Moment Header", () => {
    return (
      <Moment
        format={text(
          "format",
          "Do MMMM YYYY, dddd"
        )}
      >
        <Icon icon="clock" />{" "}
      </Moment>
    );
  });
