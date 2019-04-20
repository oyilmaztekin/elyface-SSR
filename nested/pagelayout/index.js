import React, { Fragment } from "react";
import Header from "@nest/header/";
import mockData from "@mock/menuMocks.json";
import Footer from "@nest/footer/";
import propTypes from "prop-types";
import ScrollToTop from "react-scroll-up";
import Icon from "@comp/icon/";
import { StoreProvider } from "@utils";
import { Block } from "@comp/layouts";
import { InfiniteProvider } from "../../utils/providers/infinite";

const PageLayout = props => {
  return (
    <StoreProvider>
      <Header
        LogoImage="/static/logo.png"
        navElements={mockData}
        zIndex={9}
        activeClass="sticky-now"
      />

      <Block
        type="section"
        className="content-section"
      >
        {props.infinite ? (
          <InfiniteProvider>
            {props.children}
          </InfiniteProvider>
        ) : (
          props.children
        )}
      </Block>
      <Footer />

      <ScrollToTop showUnder={160}>
        <span className="scroll-to-top">
          <Icon
            icon="up-arrow"
            color="#FFA200"
            width="25"
          />
        </span>
      </ScrollToTop>
    </StoreProvider>
  );
};

PageLayout.propTypes = {
  children: propTypes.node.isRequired,
  infinite: propTypes.bool
};

export default PageLayout;
