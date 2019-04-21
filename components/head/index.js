/* eslint-disable */
import React, { Fragment } from "react";
import propTypes from "prop-types";
import Head from "next/head";

const HeaderWrapepr = props => {
  let title;
  props.title
    ? (title = props.title)
    : "Haberi Yakala";

  return (
    <Head>
      <title>{title}</title>
      <meta charset="UTF-8" />
      <style>{`
          svg {
            width: 0px;
            height:0px;
          }
        `}</style>
      <link
        rel="manifest"
        href="/static/manifest.json"
      />
      <meta
        name="robots"
        content="index, follow"
      />
      <meta
        name="yandex-verification"
        content="32afca9598e3670d"
      />
      <meta name="language" content="Turkish" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="apple-itunes-app"
        content="app-id=1204198607"
      />
      <meta
        name="google-play-app"
        content="com.elluga.haberiyakala"
      />
      <meta
        property="og:title"
        content="Haberi Yakala"
      />
      <meta
        property="og:image"
        content="http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
      />
      <meta
        property="og:site_name"
        content="Haberi Yakala"
      />
      <meta
        property="og:description"
        content={props.description}
      />
      <meta
        property="fb:pages"
        content="954208457922704"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content="@haberiyakala"
      />
      <meta
        name="twitter:title"
        content={props.description}
      />
      <meta
        name="twitter:description"
        content={props.description}
      />
      <meta
        name="twitter:image:src"
        content="http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
      />
      <meta
        name="twitter:url"
        content="http://www.haberiyakala.com/"
      />
      <meta
        name="keywords"
        content="Haberi Yakala, Algı yönetmiyoruz, Sadece doğru bilgi, doğru haber"
      />
      <meta
        name="description"
        content={props.description}
      />
      <meta http-equiv="Expires" content="0" />
      <meta
        http-equiv="Pragma"
        content="no-cache"
      />
      <meta
        http-equiv="Cache-Control"
        content="no-cache"
      />
      <meta
        http-equiv="imagetoolbar"
        content="no"
      />
      <meta
        http-equiv="x-dns-prefetch-control"
        content="off"
      />
    </Head>
  );
};

HeaderWrapepr.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string
};

HeaderWrapepr.defaultProps = {
  description:
    "Flaş gelişmeler ve son haberler haberiyakala.com&#039;da!"
};

export default HeaderWrapepr;
