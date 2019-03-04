import React, {
  Component,
  Fragment
} from "react";
import "@globalstyle";
import Header from "@nest/header/";
import mockData from "@mock/menuMocks.json";
import { getDataset, getContent } from "@utils";
import Cards from "@comp/cards/";
import Carousel from "@comp/carousel/";
import Container from "@comp/container/";
import propTypes from "prop-types";
const IndexPage = props => {
  return (
    <Fragment>
      <Header
        LogoImage="http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
        stickyClassName="orange-bg container"
        navElements={mockData}
        zIndex={9}
      />
      <Cards
        dataset={props.dataset.surmanset}
        registry={props.registry.surmanset}
        limit={5}
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
        limit={5}
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

      {/* MAGAZİN */}

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

      {/* SAĞLIK */}
      {/* EĞİTİM */}
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
      dunya: dunya
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
      dunya: dunyadataset
    }
  };
};

export default IndexPage;
