import "./assets/styles.scss";
import React, { Component } from "react";
import Container from "@comp/container/";
import { Block } from "@comp/layouts";
import Breadcrumb from "@comp/breadcrumb";
import propTypes from "prop-types";
import {
  StoreConsumerHOC,
  InfiniteConsumerHOC
} from "@utils";
import {
  DFPSlotsProvider,
  AdSlot,
  DFPManager
} from "react-dfp";
import RenderArticle from "./lib/renderarticle";
import RenderGallery from "./lib/rendergallery";
import Infinite from "@comp/infinite";

class PageDetailLayout extends Component {
  static displayName = "NewsDetail";

  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.context.state.activeURL !==
      this.props.context.state.activeURL
    ) {
      DFPManager.refresh();
    }
  }

  render() {
    const {
      content,
      store: {
        state: { adNetworkID }
      },
      context: {
        state: { activeURL }
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
        url: path
      }
    };
    if(ancestors && ancestors.length < 0 && ancestors[0] && ancestors[0].title ){
      breadcrumbs.cat.title = ancestors[0].title;
    }

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
              {content &&
              content.galeri_gorsel ? (
                <RenderGallery
                  content={content}
                  breadcrumbs={breadcrumbs}
                />
              ) : (
                <RenderArticle
                  content={content}
                  breadcrumbs={breadcrumbs}
                />
              )}

              <Infinite dataset="cat-gundem" />
            </Block>
          </Container>
        </Block>
      </DFPSlotsProvider>
    );
  }
}

PageDetailLayout.propTypes = {
  content: propTypes.object,
  store: propTypes.object,
  context: propTypes.object
};

// eslint-disable-next-line
PageDetailLayout = InfiniteConsumerHOC(
  PageDetailLayout
);

export default StoreConsumerHOC(PageDetailLayout);
