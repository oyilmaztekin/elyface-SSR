import React, { Fragment } from "react";
import Image from "@comp/image/";
import Container from "@comp/container/";
import Row from "@comp/row/";
import SocialMediaIcon from "./socialmediaicon";

const Row1 = () => {
  return (
    <Container
      width={970}
      className="footer__row1"
    >
      <Row paddingTop={40} paddingBottom={40}>
        <div className="logo">
          <Image
            src="/static/logo-white.png"
            title="Haberi Yakala Logosu"
            className=""
          />
        </div>
        <div className="copyright">
          <strong>haberiyakala.com</strong>{" "}
          Copyright © 2019 - Tüm hakları saklıdır.
        </div>
        <div className="social-media">
          <SocialMediaIcon
            icon="facebook"
            className="facebook"
            href="https://www.facebook.com/yakalahaberi"
          />
          <SocialMediaIcon
            icon="twitter"
            className="twitter"
            href="https://twitter.com/haberiyakala"
          />
          <SocialMediaIcon
            icon="instagram"
            className="instagram"
            href="http://instagram.com/haberiyakala"
          />
          <SocialMediaIcon
            icon="google-plus"
            className="google-plus"
            href="https://plus.google.com/u/0/109851901555941769237"
          />
          <SocialMediaIcon
            icon="youtube"
            className="youtube"
            href="https://www.youtube.com/channel/UCJsk25gZ9jh3OKQUfyjOPtg"
          />
        </div>
      </Row>
    </Container>
  );
};

export default Row1;
