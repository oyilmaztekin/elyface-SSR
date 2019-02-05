import "./assets/styles.scss";
import "./assets/indicator.scss";
import "./assets/slide.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import autobind from "autobind-decorator";
import LinkButton from "@comp/linkButton/";
import Link from "next/link";
import Image from "@comp/image/";
import classNames from "classnames";

const CarouselIndicator = props => {
  const indicatorClass = classNames({
    indicator__bottom: props.layout === "bottom",
    indicator__left: props.layout === "left"
  });
  return (
    <li>
      <Link href={props.slide.href} passHref>
        <LinkButton
          text={props.slide.title}
          onMouseEnter={props.onMouseEnter}
          className={indicatorClass}
        >
          <span>{props.index + 1}</span>
        </LinkButton>
      </Link>
    </li>
  );
};

CarouselIndicator.propTypes = {
  index: propTypes.number,
  activeIndex: propTypes.number,
  onMouseEnter: propTypes.func,
  slide: propTypes.object,
  layout: propTypes.string
};

const CarouselSlide = props => {
  const slideClass = classNames({
    "carousel__slide carousel__slide--active":
      props.index === props.activeIndex,
    carousel__slide:
      props.index !== props.activeIndex
  });

  const slideDiv = classNames(
    "carousel-slide__content",
    {
      div__left: props.layout === "left"
    }
  );

  let { slide, layout, index } = props;
  if (layout && layout === "bottom") {
    return (
      <li key={index} className={slideClass}>
        <div className={slideDiv}>
          <Link href={slide.href} passHref>
            <LinkButton text={slide.title}>
              <Image
                src={slide.src}
                alt={slide.desc}
                longdesc={slide.longdesc}
                width={props.width}
              />
            </LinkButton>
          </Link>

          <Link href={slide.href} passHref>
            <LinkButton
              text={slide.title}
              className="slide__overlay"
              style={{
                top: props.width / 3
              }}
            >
              <span className="slide__desc">
                {slide.cat}
              </span>
              <span className="slide__title">
                {slide.title}
              </span>
            </LinkButton>
          </Link>
        </div>
      </li>
    );
  }
  if (layout && layout === "left") {
    return (
      <li key={index} className={slideClass}>
        <div className={slideDiv}>
          <Link href={slide.href} passHref>
            <LinkButton text={slide.title}>
              <Image
                src={slide.src}
                alt={slide.desc}
                longdesc={slide.longdesc}
                width={props.width}
              />
            </LinkButton>
          </Link>
          <Link href={slide.href} passHref>
            <LinkButton
              text={slide.title}
              className="slide__content__item"
              type="navBtn"
              style={{
                width: props.width / 2.3
              }}
            >
              <span className="slide__category">
                {slide.cat}
              </span>
              <span>{slide.title}</span>
            </LinkButton>
          </Link>
        </div>
      </li>
    );
  }
  return <span>content bulunamadı</span>;
};

CarouselSlide.propTypes = {
  index: propTypes.number,
  activeIndex: propTypes.number,
  slide: propTypes.object,
  width: propTypes.string,
  layout: propTypes.string
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
    const indicatorContainerClass = classNames(
      "carousel__indicators",
      {
        "carousel__indicators--bottom":
          this.props.layout === "bottom",
        "carousel__indicators--left":
          this.props.layout === "left"
      }
    );

    const containerClass = classNames(
      "carousel",
      {
        carousel__bottom:
          this.props.layout === "bottom",
        carousel__left:
          this.props.layout === "left"
      }
    );

    return (
      <div className={containerClass}>
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
                layout={this.props.layout}
              />
            )
          )}
        </ul>

        <ul className={indicatorContainerClass}>
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
                slide={slide}
                layout={this.props.layout}
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

Carousel.propTypes = {
  slides: propTypes.array,
  width: propTypes.string,
  buttonClass: propTypes.string,
  layout: propTypes.string
};

export default Carousel;
