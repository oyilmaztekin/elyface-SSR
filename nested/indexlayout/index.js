import React, { Component } from "react";
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
import {
  StoreConsumerHOC,
  OptimizationConsumerHOC
} from "@utils";

class IndexLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {
      context,
      initialLoadImages
    } = this.props;

    initialLoadImages &&
      context &&
      context.startInitialLoad &&
      context.startInitialLoad(initialLoadImages);

    context &&
      context.state &&
      context.attachLazyLoadListener &&
      context.attachLazyLoadListener();
  }
  render() {
    const {
      store: {
        state: { adNetworkID }
      }
    } = this.props;

    return (
      <DFPSlotsProvider
        dfpNetworkId={adNetworkID}
      >
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
            dataset={this.props.dataset.surmanset}
            registry={
              this.props.registry.surmanset
            }
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
              slides={this.props.registry.manset}
              className="manset-alti-slider"
              bg="#fff"
            />
            <Cards
              dataset={
                this.props.dataset.sagmanset
              }
              className="section-cards__sag-manset-yani"
              registry={
                this.props.registry.sagmanset
              }
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
              dataset={
                this.props.dataset.mansetalti
              }
              registry={
                this.props.registry.mansetalti
              }
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
              slides={
                this.props.registry.cokokunanlar
              }
              className="manset-alti-slider"
              bg="#fff"
            />
          </Row>

          <Row>
            <Cards
              dataset={this.props.dataset.galeri}
              registry={
                this.props.registry.galeri
              }
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
              dataset={this.props.dataset.gundem}
              registry={
                this.props.registry.gundem
              }
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
              dataset={this.props.dataset.ekonomi}
              registry={
                this.props.registry.ekonomi
              }
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
              dataset={this.props.dataset.magazin}
              registry={
                this.props.registry.magazin
              }
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
              dataset={this.props.dataset.siyaset}
              registry={
                this.props.registry.siyaset
              }
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
              dataset={this.props.dataset.yasam}
              registry={this.props.registry.yasam}
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
              dataset={
                this.props.dataset.teknoloji
              }
              registry={
                this.props.registry.teknoloji
              }
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
              dataset={this.props.dataset.dunya}
              registry={this.props.registry.dunya}
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
              dataset={this.props.dataset.saglik}
              registry={
                this.props.registry.saglik
              }
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
              dataset={this.props.dataset.egitim}
              registry={
                this.props.registry.egitim
              }
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
                  this.props.registry.seohaberleri
                }
                dataset={
                  this.props.dataset.seohaberleri
                }
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
  }
}

IndexLayout.propTypes = {
  dataset: propTypes.object,
  registry: propTypes.registry,
  initialLoadImages:propTypes.number,
  store: propTypes.shape({
    state: propTypes.shape({
      activeURL: propTypes.string,
      pageTitle: propTypes.string,
      isHeaderSticky: propTypes.bool,
      adNetworkID: propTypes.string,
      updateValue: propTypes.func
    })
  }),
  context: propTypes.shape({
    state: propTypes.shape({
      initialLoadImages:propTypes.number,
      imageElements: propTypes.object,
      isInitialLoadCompleted:propTypes.bool
    }),
    startInitialLoad:propTypes.func,
    attachLazyLoadListener:propTypes.func
  })
};

IndexLayout.displayName = "Index Layout";

// eslint-disable-next-line
IndexLayout = OptimizationConsumerHOC(
  IndexLayout
);

export default StoreConsumerHOC(IndexLayout);
