import React, {
  Fragment,
  Component
} from "react";
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

class CategoryLayout extends Component {
  constructor(props){
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
        <Container
          width={970}
          className="section-cards"
        >
          <Row>
            <Carousel
              width={632}
              height={422}
              layout="bottom"
              slides={this.props.registry.datacarousel}
              className="manset-alti-slider"
              bg="#fff"
            />
            <Cards
              dataset={this.props.dataset.data}
              className="section-cards__sag-manset-yani"
              registry={this.props.registry.data}
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
              dataset={this.props.dataset.data}
              registry={this.props.registry.data}
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

CategoryLayout.propTypes = {
  initialLoadImages:propTypes.number,
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

CategoryLayout.defaultProps = {
  initialLoadImages:1
}

//eslint-disable-next-line
CategoryLayout = OptimizationConsumerHOC(CategoryLayout);

export default StoreConsumerHOC(CategoryLayout);
