import React from "react";
import "@globalstyle";
import Logo from "@comp/logo/";
import LogoImage from "@static/logo.png";

const IndexPage = () => (
  <React.Fragment>
    <h1>Haberi Yakala SSR Test</h1>
    <p>SSR Deneme paragraf</p>
    <Logo src={LogoImage} title="Haberi Yakala Logosu" />
  </React.Fragment>
);

export default IndexPage;
