/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import {
  withKnobs,
  text,
  object
} from "@storybook/addon-knobs";
import Image from "@comp/image/";
import Logo from "@comp/logo/";
import { withReadme } from "storybook-readme";
import ImageReadme from "@comp/image/README.md";
import LogoReadme from "@comp/logo/README.md";
import IconReadme from "@comp/icon/README.md";
import Icon from "@comp/icon/";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

storiesOf("Atomic", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(withReadme(ImageReadme))
  .add("Image", () => {
    return (
      <Image
        src={text(
          "src",
          "http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg"
        )}
        longdesc={text(
          "desc",
          "Enflasyon haberi"
        )}
        width={text("width", "240")}
        height={text("height", "")}
      />
    );
  })
  .addDecorator(withReadme(LogoReadme))
  .add("Logo", () => {
    return (
      <Logo
        src={text(
          "src",
          "http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
        )}
        title={text(
          "title",
          "Haberi Yakala Logosu"
        )}
      />
    );
  })
  .addDecorator(withReadme(IconReadme))
  .add("Icon", () => {
    return (
      <Icon
        icon={object("icon", faCoffee)}
        size={text("size", "24")}
      />
    );
  });
