import React, { Fragment } from "react";
import Image from "@comp/image/";
import Container from "@comp/container/";
import SocialMediaIcon from "./socialmediaicon";
import {
  faFacebook,
  faTwitterSquare,
  faInstagram,
  faGooglePlusSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const Row1 = () => {
  return (
    <Container
      className="footer__row1"
      paddingTop={40}
      paddingBottom={40}
    >
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
          icon={faFacebook}
          className="facebook"
          href="https://www.facebook.com/yakalahaberi"
          color="#3b5998"
        />
        <SocialMediaIcon
          icon={faTwitterSquare}
          className="twitter"
          href="https://twitter.com/haberiyakala"
          color="#55acee"
        />
        <SocialMediaIcon
          icon={faInstagram}
          className="instagram"
          href="http://instagram.com/haberiyakala"
          color="#517fa4"
        />
        <SocialMediaIcon
          icon={faGooglePlusSquare}
          className="gogole-plus"
          href="https://plus.google.com/u/0/109851901555941769237"
          color="#dc4e41"
        />
        <SocialMediaIcon
          icon={faYoutube}
          className="youtube"
          href="https://www.youtube.com/channel/UCJsk25gZ9jh3OKQUfyjOPtg"
          color="#b31217"
        />
      </div>
    </Container>
  );
};

export default Row1;
