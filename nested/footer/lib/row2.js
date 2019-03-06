import React from "react";
import Container from "@comp/container/";
import Lists from "@comp/lists/";
import kategoriMock from "@mock/footerkategorimock.json";
import SocialMediaIcon from "./socialmediaicon";
import {
  faAppStoreIos,
  faAndroid
} from "@fortawesome/free-brands-svg-icons";

const Row1 = () => {
  return (
    <Container
      className="footer__row2"
      paddingTop={40}
      paddingBottom={40}
    >
      <div className="kategoriler">
        <h3>Kategoriler</h3>
        <Lists
          registry={kategoriMock}
          className="footer-cat"
          linkClassName=""
          vertical={false}
          tagType="span"
        />
      </div>
      <div className="hizli-menu">
        <h3>Hızlı Menü</h3>
        <Lists
          registry={kategoriMock}
          className="footer-cat"
          linkClassName=""
          vertical={false}
          tagType="span"
        />
      </div>
      <div className="referanslar">
        <h3>Uygulama Linkleri</h3>
        <div className="app-icons">
          <SocialMediaIcon
            icon={faAppStoreIos}
            className="apple"
            href="http://www.haberiyakala.com/"
            color="#ffffff"
          />
          <SocialMediaIcon
            icon={faAndroid}
            className="android"
            href="http://www.haberiyakala.com/"
            color="#4DC247"
          />
        </div>
        <h4>
          Yazılım Geliştirme ve Sistem Destek ||
          Elluga
        </h4>
      </div>
    </Container>
  );
};

export default Row1;
