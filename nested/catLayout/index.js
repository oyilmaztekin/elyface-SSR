import React, { Fragment } from "react";
import Cards from "@comp/cards/";
import Carousel from "@comp/carousel/";
import Container from "@comp/container/";
import Row from "@comp/row/";
import Lists from "@comp/lists/";
import propTypes from "prop-types";

const CategoryLayout = props => {
  return (
    <Fragment>
      <Container
        width={970}
        className="section-cards"
      >
        <Row>
          <Carousel
            width={632}
            height={422}
            layout="bottom"
            slides={props.registry.datacarousel}
            className="manset-alti-slider"
            bg="#fff"
          />
          <Cards
            dataset={props.dataset.data}
            className="section-cards__sag-manset-yani"
            registry={props.registry.data}
            vertical={true}
            width={303}
            limit={2}
            // height={196}
            containerBG="#ffffff"
            bg="#ffa200"
            textColor="#323232"
            fontSize="16"
            gallery={false}
            imgClassName="img-slider-width"
            lineHeight="16"
          />
        </Row>

        <Row>
          <Cards
            dataset={props.dataset.data}
            registry={props.registry.data}
            vertical={false}
            containerBG="#ffffff"
            bg="#fff"
            textColor="#323232"
            fontSize="18"
            gallery={false}
            imgClassName="className"
            className="nested-cards"
            border="#ffa200"
            width={303}
            lineHeight="24"
          />
        </Row>
      </Container>
      <Container
        width={100}
        percentage={true}
        bg="#fff"
      >
        <Container width={970}>
          <Row>
            <Lists
              registry={
                props.registry.seohaberleri
              }
              dataset={props.dataset.seohaberleri}
              className="list-link seo-haberleri"
              linkClassName="link-footer-category"
              vertical={false}
              tagType="section"
            />
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

CategoryLayout.propTypes = {
  dataset: propTypes.object,
  registry: propTypes.registry
};

export default CategoryLayout;
