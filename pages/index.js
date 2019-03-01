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
    </Fragment>
  );
};

IndexPage.propTypes = {
  registry: propTypes.object,
  dataset: propTypes.object
};

IndexPage.getInitialProps = async () => {
  const surmansetdataset = "sur-manset";
  const mansetdataset = "manset";
  const sagmansetdataset = "sag-manset";
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
  return {
    registry: {
      surmanset: surmanset,
      manset: manset,
      sagmanset: sagmanset
    },
    dataset: {
      surmanset: surmansetdataset,
      manset: mansetdataset,
      sagmanset: sagmanset
    }
  };
};

export default IndexPage;
