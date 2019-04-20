import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import autobind from "autobind-decorator";
import Sticky from "react-stickynode";
import Logo from "@comp/logo/";
import Navigation from "@comp/navigation/";
import Moment from "@comp/moment/";
// import SearchForm from "@comp/searchform/";
import LinkButton from "@comp/linkButton/";
import Icon from "@comp/icon/";
import Container from "@comp/container/";
import { StoreConsumerHOC } from "@utils";

class Header extends Component {
  static displayName = "Header";
  constructor(props) {
    super(props);
  }
  @autobind
  handleStateChange(status) {
    if(status.status === 2) {
      this.props.store.updateValue("isHeaderSticky", true)
    }
    else {
      this.props.store.updateValue("isHeaderSticky", false)
    }
  }
  render() {

    let {
      sticky,
      top,
      bottom,
      zIndex,
      activeClass,
      releasedClass,
      stickyClassName,
      LogoImage,
      navElements
    } = this.props;
    return (
      <Sticky
        onStateChange={this.handleStateChange}
        sticky={sticky}
        top={top}
        bottom={bottom}
        innerZ={zIndex}
        activeClass={activeClass}
        releasedClass={releasedClass}
        className={stickyClassName}
      >
        <Container display="block" width={970}>
          <header className="header">
            <div className="row header__row-one">
              <LinkButton
                text="ana sayfa"
                href="/"
              >
                <Logo
                  src={LogoImage}
                  title="Haberi Yakala Logosu"
                  className="header__row-one-logo"
                />
              </LinkButton>
              <Navigation
                navElements={navElements}
                onMouseEnter={
                  this.props.onMouseEnter
                }
                className="header__row-one-nav"
              />
            </div>

            <div className="row header__row-two">
              <Moment
                format="Do MMMM YYYY, dddd"
                className="header__row-two-moment"
              >
                <Icon icon="clock" />{" "}
              </Moment>
              <div className="header__row-two-input-buttons-container">
                {/* <SearchForm
                  id="searh_form"
                  name="searh_form"
                  value="Ara"
                  type="search"
                  className="search-form-input header__row-two-input-buttons-container-form"
                /> */}

                <div className="header__row-two-input-buttons-container-btn">
                  <LinkButton
                    text="Galeriler"
                    className="link-nav-btn"
                    href="#"
                  >
                    <span>
                      <Icon icon="gallery" color="#fff" />{" "}
                      Galeriler
                    </span>
                  </LinkButton>
                </div>
                <div className="header__row-two-input-buttons-container-btn">
                  <LinkButton
                    text="Videolar"
                    className="link-nav-btn"
                    href="#"
                  >
                    <span>
                      <Icon icon="video" color="#fff" />{" "}
                      Videolar
                    </span>
                  </LinkButton>
                </div>
              </div>
            </div>
          </header>
        </Container>
      </Sticky>
    );
  }
}

Header.propTypes = {
  navElements: propTypes.array.isRequired,
  LogoImage: propTypes.string.isRequired,
  stickyClassName: propTypes.string,
  sticky: propTypes.bool,
  onMouseEnter: propTypes.func,
  top: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  bottom: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  zIndex: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  activeClass: propTypes.string,
  releasedClass: propTypes.string,
  store: propTypes.shape({
    activeURL: propTypes.string,
    pageTitle: propTypes.string,
    isHeaderSticky:propTypes.bool,
    adNetworkID:propTypes.string,
    updateValue:propTypes.func
  })
};

export default StoreConsumerHOC(Header);
