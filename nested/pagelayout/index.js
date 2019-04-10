import React, { Fragment } from "react";
import Header from "@nest/header/";
import mockData from "@mock/menuMocks.json";
import Footer from "@nest/footer/";
import propTypes from "prop-types";
import ScrollToTop from "react-scroll-up";
import Icon from "@comp/icon/";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { StoreProvider } from "@utils";
import { Block } from "@comp/layouts";

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
        {props.children}
      </Block>
      <Footer />

      <ScrollToTop showUnder={160}>
        <span className="scroll-to-top">
          <Icon
            icon={faArrowAltCircleUp}
            color="#FFA200"
          />
        </span>
      </ScrollToTop>
    </StoreProvider>
  );
};

PageLayout.propTypes = {
  children: propTypes.node.isRequired
};

export default PageLayout;
