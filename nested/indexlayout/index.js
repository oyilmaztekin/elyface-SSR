import React, { Fragment } from "react";
import Cards from "@comp/cards/";
import Carousel from "@comp/carousel/";
import Container from "@comp/container/";
import Row from "@comp/row/";
import Lists from "@comp/lists/";
import propTypes from "prop-types";
import {
  DFPSlotsProvider,
  AdSlot
} from "react-dfp";
import { StoreConsumerHOC } from "@utils";

const IndexLayout = props => {
  const {
    store: {
      state: { adNetworkID }
    }
  } = props;
  
  return (
    <DFPSlotsProvider dfpNetworkId={adNetworkID}>
      <AdSlot
        sizes={[[970, 250]]}
        adUnit={"AnasayfaMastHead"}
        slotId="anasayfaMastHead"
      />
      <AdSlot
        sizes={[[160, 600], [120, 600]]}
        adUnit={"anasayfa_sol1"}
        slotId="anasayfa_sol"
      />
      <Container width={970}>
        <Cards
          dataset={props.dataset.surmanset}
          registry={props.registry.surmanset}
          vertical={false}
          containerBG="#ffffff"
          bg="#fff"
          textColor="#323232"
          gallery={false}
          imgClassName="className"
          border="#ffa200"
          width={303}
        />
        <Row>
          <Carousel
            width={632}
            height={422}
            layout="bottom"
            slides={props.registry.manset}
            className="manset-alti-slider"
            bg="#fff"
          />
          <Cards
            dataset={props.dataset.sagmanset}
            className="section-cards__sag-manset-yani"
            registry={props.registry.sagmanset}
            vertical={true}
            width={303}
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
            dataset={props.dataset.mansetalti}
            registry={props.registry.mansetalti}
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

        <Row>
          <Carousel
            width={632}
            height={225}
            layout="left"
            slides={props.registry.cokokunanlar}
            className="manset-alti-slider"
            bg="#fff"
          />
        </Row>

        <Row>
          <Cards
            dataset={props.dataset.galeri}
            registry={props.registry.galeri}
            vertical={false}
            containerBG="#ffffff"
            bg="#fff"
            textColor="#323232"
            fontSize="18"
            gallery={true}
            imgClassName="className"
            className="nested-cards"
            border="#ffa200"
            width={303}
            lineHeight="24"
            heading={true}
          />
        </Row>

        <Row>
          <Cards
            dataset={props.dataset.gundem}
            registry={props.registry.gundem}
            vertical={false}
            containerBG="#ffffff"
            bg="#fff"
            textColor="#323232"
            fontSize="18"
            gallery={true}
            imgClassName="className"
            className="nested-cards"
            border="#ffa200"
            width={303}
            lineHeight="24"
            heading={true}
          />
        </Row>
        <Row>
          <Cards
            dataset={props.dataset.ekonomi}
            registry={props.registry.ekonomi}
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
            heading={true}
          />
        </Row>
        <Row>
          <Cards
            dataset={props.dataset.magazin}
            registry={props.registry.magazin}
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
            heading={true}
          />
        </Row>
        <Row>
          <Cards
            dataset={props.dataset.siyaset}
            registry={props.registry.siyaset}
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
            heading={true}
          />
        </Row>

        <Row>
          <Cards
            dataset={props.dataset.yasam}
            registry={props.registry.yasam}
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
            heading={true}
          />
        </Row>
        <Row>
          <Cards
            dataset={props.dataset.teknoloji}
            registry={props.registry.teknoloji}
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
            heading={true}
          />
        </Row>
        <Row>
          <Cards
            dataset={props.dataset.dunya}
            registry={props.registry.dunya}
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
            heading={true}
          />
        </Row>

        <Row>
          <Cards
            dataset={props.dataset.saglik}
            registry={props.registry.saglik}
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
            heading={true}
          />
        </Row>
        <Row>
          <Cards
            dataset={props.dataset.egitim}
            registry={props.registry.egitim}
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
            heading={true}
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
    </DFPSlotsProvider>
  );
};

IndexLayout.propTypes = {
  dataset: propTypes.object,
  registry: propTypes.registry,
  store: propTypes.shape({
    state: propTypes.shape({
      activeURL: propTypes.string,
      pageTitle: propTypes.string,
      isHeaderSticky: propTypes.bool,
      adNetworkID: propTypes.string,
      updateValue: propTypes.func
    })
  })
};

IndexLayout.displayName = "Index Layout"

export default StoreConsumerHOC(IndexLayout);
