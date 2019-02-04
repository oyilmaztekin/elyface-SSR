import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import autobind from "autobind-decorator";
import LinkButton from "@comp/linkButton/";
import Link from "next/link";
import Image from "@comp/image/";
import classNames from "classnames";

const CarouselIndicator = props => {
  const conditionalClass = classNames({
    "carousel__indicator carousel__indicator--active":
      props.index === props.activeIndex,
    carousel__indicator:
      props.index !== props.activeIndex,
    "carousel-orange":
      props.buttonClass === "orange",
    "carousel-dark": props.buttonClass === "dark"
  });
  return (
    <li>
      <button
        className={conditionalClass}
        onMouseEnter={props.onMouseEnter}
      >
        {props.index + 1}
      </button>
    </li>
  );
};

CarouselIndicator.propTypes = {
  index: propTypes.number,
  activeIndex: propTypes.number,
  onMouseEnter: propTypes.func,
  buttonClass: propTypes.string
};

const CarouselSlide = props => {
  let { slide } = props;
  return (
    <li
      className={
        props.index === props.activeIndex
          ? "carousel__slide carousel__slide--active"
          : "carousel__slide"
      }
    >
      <div
        className="carousel-slide__content"
        style={{ width: props.width + "px" }}
      >
        <Link href="#" passHref>
          <LinkButton text="Sample Button">
            <Image
              src={slide.src}
              responsive
              alt={slide.desc}
              longdesc={slide.longdesc}
            />
          </LinkButton>
        </Link>
      </div>
    </li>
  );
};

CarouselSlide.propTypes = {
  index: propTypes.number,
  activeIndex: propTypes.number,
  slide: propTypes.object,
  width: propTypes.string
};

// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  @autobind
  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <ul className="carousel__slides">
          {this.props.slides.map(
            (slide, index) => (
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={
                  this.state.activeIndex
                }
                slide={slide}
                width={this.props.width}
              />
            )
          )}
        </ul>

        <ul className="carousel__indicators">
          {this.props.slides.map(
            (slide, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={
                  this.state.activeIndex
                }
                isActive={
                  this.state.activeIndex === index
                }
                // sub component olarak düzelt
                onMouseEnter={e =>
                  this.goToSlide(index)
                }
                buttonClass={
                  this.props.buttonClass
                }
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

Carousel.propTypes = {
  slides: propTypes.object,
  width: propTypes.string,
  buttonClass: propTypes.string
};

export default Carousel;
