import React from "react";
import Container from "@comp/container/";
import Row from "@comp/row/";
import Lists from "@comp/lists/";
import kategoriMock from "@mock/footerkategorimock.json";
import SocialMediaIcon from "./socialmediaicon";

const Row1 = () => {
  return (
    <Container
      className="footer__row2"
      width={970}
    >
      <Row paddingTop={40} paddingBottom={40}>
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
              icon="apple"
              className="apple"
              href="http://www.haberiyakala.com/"
              color="#ffffff"
              width="40"
            />
            <SocialMediaIcon
              icon="android"
              className="android"
              href="http://www.haberiyakala.com/"
              color="#4DC247"
              width="40"
            />
          </div>
          <h4>
            Yazılım Geliştirme ve Sistem Destek ||
            Elluga
          </h4>
        </div>
      </Row>
    </Container>
  );
};

export default Row1;
