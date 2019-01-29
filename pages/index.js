import React from "react";
import "@globalstyle";
import Logo from "@comp/logo/";
import LogoImage from "@static/logo.png";
import Link from "next/link";
import LinkButton from "../components/linkButton";

const IndexPage = () => (
  <React.Fragment>
    <h1>Haberi Yakala SSR Test</h1>
    <p>SSR Deneme paragraf</p>
    <Logo
      src={LogoImage}
      title="Haberi Yakala Logosu"
    />
    <Link href="/about" passHref>
      <LinkButton text="Deneme" type="nav" />
    </Link>
  </React.Fragment>
);

export default IndexPage;
