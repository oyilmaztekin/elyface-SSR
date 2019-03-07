import React, { Fragment } from "react";
import Cards from "@comp/cards/";
import Carousel from "@comp/carousel/";
import Container from "@comp/container/";
import Lists from "@comp/lists/";
import propTypes from "prop-types";

const IndexLayout = props => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

IndexLayout.propTypes = {
  dataset: propTypes.object,
  registry: propTypes.registry
};

export default IndexLayout;
