import React, { Fragment } from "react";

import Header from "@nest/header/";
import mockData from "@mock/menuMocks.json";
import { getDataset, getContent } from "@utils";
import Cards from "@comp/cards/";
import Carousel from "@comp/carousel/";
import Container from "@comp/container/";
import propTypes from "prop-types";
import Lists from "@comp/lists/";
import Footer from "@nest/footer/";
import ScrollToTop from "react-scroll-up";
import Icon from "@comp/icon/";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "static/pagestyles/index.scss";

const IndexPage = props => {
  return (
    <Fragment>
      <Header
        LogoImage="http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
        navElements={mockData}
        zIndex={9}
        activeClass="sticky-now"
      />
      <Cards
        dataset={props.dataset.surmanset}
        registry={props.registry.surmanset}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
      />
      <Container paddingRight={0}>
        <Carousel
          width="720"
          layout="bottom"
          slides={props.registry.manset}
          className="manset-alti-slider"
        />
        <Cards
          dataset={props.dataset.sagmanset}
          className="section-cards__sag-manset-yani"
          registry={props.registry.sagmanset}
          vertical={true}
          containerBG="#ffffff"
          cardBg="#ffa200"
          textColor="#323232"
          fontSize="18"
          gallery={false}
          imgClassName="img-slider-width"
          lineHeight="24"
        />
      </Container>
      <Cards
        dataset={props.dataset.mansetalti}
        registry={props.registry.mansetalti}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
      />
      <Container>
        <Carousel
          width="440"
          height="250"
          layout="left"
          slides={props.registry.cokokunanlar}
          className="manset-alti-slider"
        />
      </Container>

      {/* GALERİ */}

      <Cards
        dataset={props.dataset.gundem}
        registry={props.registry.gundem}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Cards
        dataset={props.dataset.ekonomi}
        registry={props.registry.ekonomi}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Cards
        dataset={props.dataset.magazin}
        registry={props.registry.magazin}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Cards
        dataset={props.dataset.siyaset}
        registry={props.registry.siyaset}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Cards
        dataset={props.dataset.yasam}
        registry={props.registry.yasam}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Cards
        dataset={props.dataset.teknoloji}
        registry={props.registry.teknoloji}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Cards
        dataset={props.dataset.dunya}
        registry={props.registry.dunya}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Cards
        dataset={props.dataset.saglik}
        registry={props.registry.saglik}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Cards
        dataset={props.dataset.egitim}
        registry={props.registry.egitim}
        vertical={false}
        containerBG="#ffffff"
        cardBg="#fff"
        textColor="#323232"
        fontSize="18"
        gallery={false}
        imgClassName="className"
        border="#ffa200"
        width={400}
        lineHeight="24"
        heading={true}
      />

      <Container>
        <Lists
          registry={props.registry.seohaberleri}
          dataset={props.dataset.seohaberleri}
          bg="#ffffff"
          className="list-link seo-haberleri"
          linkClassName="link-footer-category"
          vertical={false}
          tagType="section"
        />
      </Container>
      <Footer />

      <ScrollToTop showUnder={160}>
        <span className="scroll-to-top">
          <Icon
            icon={faArrowAltCircleUp}
            color="#FFA200"
          />
        </span>
      </ScrollToTop>
    </Fragment>
  );
};

IndexPage.propTypes = {
  registry: propTypes.object,
  dataset: propTypes.object
};

IndexPage.getInitialProps = async () => {
  /**
   * TODO: galeri, magazin, sağlık, eğitim
   */
  const surmansetdataset = "sur-manset";
  const mansetdataset = "manset";
  const sagmansetdataset = "sag-manset";
  const mansetaltidataset = "manset-alti";
  const cokokunanlardataset = "cok-okunanlar";
  const gundemdataset = "cat-gundem";
  const ekonomidataset = "cat-ekonomi";
  const siyasetdataset = "cat-siyaset";
  const yasamdataset = "cat-yasam";
  const teknolojidataset = "cat-teknoloji";
  const dunyadataset = "cat-dunya";
  const seohaberleridataset = "seo-haberleri";
  const egitimdataset = "cat-egitim";
  const saglikdataset = "cat-saglik";
  const magazindataset = "cat-magazin";

  const surmanset = await getDataset(
    surmansetdataset
  )
    .then(data => data.data)
    .catch(err => err.response.data);
  const manset = await getDataset(mansetdataset)
    .then(data => data.data.data.items)
    .catch(err => err.response.data);

  const sagmanset = await getDataset(
    sagmansetdataset
  )
    .then(data => data.data)
    .catch(err => err.response.data);

  const mansetalti = await getDataset(
    mansetaltidataset
  )
    .then(data => data.data)
    .catch(err => err.response.data);

  const cokokunanlar = await getDataset(
    cokokunanlardataset
  )
    .then(data => data.data.data.items)
    .catch(err => err.response.data);

  const gundem = await getDataset(gundemdataset)
    .then(data => data.data)
    .catch(err => err.response.data);

  const ekonomi = await getDataset(ekonomidataset)
    .then(data => data.data)
    .catch(err => err.response.data);

  const siyaset = await getDataset(siyasetdataset)
    .then(data => data.data)
    .catch(err => err.response.data);

  const yasam = await getDataset(yasamdataset)
    .then(data => data.data)
    .catch(err => err.response.data);

  const teknoloji = await getDataset(
    teknolojidataset
  )
    .then(data => data.data)
    .catch(err => err.response.data);

  const dunya = await getDataset(dunyadataset)
    .then(data => data.data)
    .catch(err => err.response.data);

  const seohaberleri = await getDataset(
    seohaberleridataset
  )
    .then(data => data.data)
    .catch(err => err.response.data);

  const magazin = await getDataset(magazindataset)
    .then(data => data.data)
    .catch(err => err.response.data);
  const saglik = await getDataset(saglikdataset)
    .then(data => data.data)
    .catch(err => err.response.data);

  const egitim = await getDataset(egitimdataset)
    .then(data => data.data)
    .catch(err => err.response.data);
  return {
    registry: {
      surmanset: surmanset,
      manset: manset,
      sagmanset: sagmanset,
      mansetalti: mansetalti,
      cokokunanlar: cokokunanlar,
      gundem: gundem,
      ekonomi: ekonomi,
      siyaset: siyaset,
      yasam: yasam,
      teknoloji: teknoloji,
      dunya: dunya,
      seohaberleri: seohaberleri,
      egitim: egitim,
      saglik: saglik,
      magazin: magazin
    },
    dataset: {
      surmanset: surmansetdataset,
      manset: mansetdataset,
      sagmanset: sagmansetdataset,
      mansetalti: mansetaltidataset,
      cokokunanlar: cokokunanlardataset,
      gundem: gundemdataset,
      ekonomi: ekonomidataset,
      siyaset: siyasetdataset,
      yasam: yasamdataset,
      teknoloji: teknolojidataset,
      dunya: dunyadataset,
      seohaberleri: seohaberleridataset,
      egitim: egitimdataset,
      saglik: saglikdataset,
      magazin: magazindataset
    }
  };
};

export default IndexPage;
