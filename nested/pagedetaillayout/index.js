import "./assets/styles.scss";
import React, { Component } from "react";
import Container from "@comp/container/";
import { Block } from "@comp/layouts";
import Article from "@comp/article/";
import Breadcrumb from "@comp/breadcrumb";
import propTypes from "prop-types";
import { StoreConsumerHOC, InfiniteProvider } from "@utils";
import {
  DFPSlotsProvider,
  AdSlot
} from "react-dfp";
import CardManager from "@comp/cardmanager/";
import Infinite from "@comp/infinite";

class PageDetailLayout extends Component {
  static displayName = "NewsDetail";

  constructor(props) {
    super(props);
  }

  render() {
    const {
      content,
      store: {
        state: { adNetworkID }
      }
    } = this.props;
    const {
      title,
      description,
      ancestors,
      path,
      haber_metni,
      haber_gorsel,
      url,
      id
    } = content;

    const breadcrumbs = {
      active: {
        title: title,
        url: url
      },
      cat: {
        title: ancestors[0].title,
        url: path
      }
    };
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

        <Block type="main">
          <Container
            width={970}
            bg="#fff"
            padding="20"
            boxSizing="border-box"
          >
            <Breadcrumb
              cat={breadcrumbs.cat}
              active={breadcrumbs.active}
            />

            <Block
              type="div"
              id="ssr-article"
              className={`articles-${id}`}
            >
              <Article
                title={title}
                desc={description}
                cat={breadcrumbs.cat.title}
                catUrl={breadcrumbs.cat.url}
                className="main-article"
                cover={haber_gorsel[0]._id}
                isSSR={true}
                content={haber_metni}
              >
                <CardManager
                  dataset="cat-gundem"
                  limit={2}
                  vertical={true}
                  cardBg="#282841"
                  className="section-cards__sag-manset-yani"
                  imgClassName="nomargin"
                  border="#ffa200"
                  width={303}
                  lineHeight="24"
                  textColor="#fff"
                />
                <AdSlot
                  sizes={[[970, 120]]}
                  adUnit={"HaberDetay_970x250"}
                  slotId="HaberDetay_970x250"
                />
              </Article>
              <InfiniteProvider>
                <Infinite dataset="cat-gundem" />
              </InfiniteProvider>
            </Block>
          </Container>
        </Block>
      </DFPSlotsProvider>
    );
  }
}

PageDetailLayout.propTypes = {
  content: propTypes.object,
  store: propTypes.object
};

export default StoreConsumerHOC(PageDetailLayout);
