import React, { Fragment } from "react";
import Header from "@nest/header/";
import mockData from "@mock/menuMocks.json";
import Footer from "@nest/footer/";
import propTypes from "prop-types";
import ScrollToTop from "react-scroll-up";
import Icon from "@comp/icon/";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const PageLayout = props => {
  return (
    <Fragment>
      <Header
        LogoImage="http://cdn.haberiyakala.com/assets/default/desktop/img/logo.png"
        navElements={mockData}
        zIndex={9}
        activeClass="sticky-now"
      />
      <section
        className="content-section"
        data-content-id=""
      >
        {props.children}
      </section>

      <Footer />

      <ScrollToTop showUnder={160}>
        <span className="scroll-to-top">
          <Icon
            icon={faArrowAltCircleUp}
            color="#FFA200"
          />
        </span>
      </ScrollToTop>
    </Fragment>
  );
};

PageLayout.propTypes = {
  children: propTypes.node.isRequired
};

export default PageLayout;
