import React, { Component } from "react";
import propTypes from "prop-types";
import Link from "next/link";
import LinkButton from "@comp/linkButton/";
import autobind from "autobind-decorator";
import Card from "@comp/card/";
import classNames from "classnames";
import "./assets/styles.scss";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: this.props.limit,
      catTitle: "",
      catSlug: ""
    };
  }

  componentDidMount() {
    if (this.props.heading) {
      const liElement = document.querySelector(
        ".card-lists_item"
      );
      const title = liElement.dataset.catTitle;
      const slug = liElement.dataset.catSlug;
      this.setState({
        catTitle: title,
        catSlug: slug
      });
    }
  }

  createCardComponent(registry) {
    if (registry.error) {
      return <div>{registry.error}</div>;
    }
    const reg = registry.data.items;
    const catTitle = reg[0].ancestors[0].title;
    const catSlug = reg[0].ancestors[0].slug;

    return reg
      .map((item, ind) => {
        const {
          _id,
          description,
          title,
          self_path,
          haber_gorsel
        } = item;
        const {
          cardBg,
          imgClassName,
          border,
          textColor,
          fontSize,
          width,
          height,
          lineHeight,
          gallery,
          className
        } = this.props;

        let gorsel = haber_gorsel[0]._id;

        return (
          <li
            key={ind}
            id={_id}
            style={{
              width: width + "px"
            }}
            className="card-lists_item"
            data-cat-title={catTitle}
            data-cat-slug={catSlug}
          >
            <Card
              bg={cardBg}
              height={height}
              id={_id}
              gallery={gallery}
            >
              <Card.IMG
                src={`http://assets.blupoint.io/img/75/600x340/${gorsel}`}
                longdesc={description}
                alt={title}
                className={`card-img ${imgClassName}`}
                border={border}
                href={self_path}
              />
              <Card.Title
                title={title}
                color={textColor}
                fontSize={fontSize}
                lineHeight={lineHeight}
                href={self_path}
              />
            </Card>
          </li>
        );
      })
      .slice(0, this.state.limit);
  }

  @autobind
  createHeading(title, slug) {
    return (
      <h3 className="section-cards__heading">
        <Link href={slug} passHref={true}>
          <LinkButton
            text={title}
            className="link-category-title"
          >
            <span>{title}</span>
          </LinkButton>
        </Link>
      </h3>
    );
  }

  render() {
    const {
      registry,
      vertical,
      containerBG,
      dataset,
      className
    } = this.props;

    let { catTitle, catSlug } = this.state;
    let items;
    registry
      ? (items = this.createCardComponent(
          registry
        ))
      : (items = "loading...");

    return (
      <section
        data-dataset={dataset}
        data-dataset-id={
          registry &&
          registry.hasOwnProperty("data") &&
          registry.data._id
        }
        className={`section-cards ${className}`}
        style={{
          backgroundColor: containerBG
        }}
      >
        {catTitle &&
          catSlug &&
          this.createHeading(catTitle, catSlug)}
        <ul
          className={classNames(
            "card-lists",
            vertical && `card-lists-vertical`,
            !vertical && `card-lists-horizontal`
          )}
        >
          {items}
        </ul>
      </section>
    );
  }
}

Cards.propTypes = {
  registry: propTypes.object.isRequired,
  dataset: propTypes.string,
  cardBg: propTypes.string,
  imgClassName: propTypes.string,
  border: propTypes.string,
  textColor: propTypes.string,
  fontSize: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  lineHeight: propTypes.string,
  vertical: propTypes.bool,
  limit: propTypes.number,
  containerBG: propTypes.string,
  gallery: propTypes.bool,
  className: propTypes.string,
  heading: propTypes.bool
};

export default Cards;
