import React, { Component } from "react";
import propTypes from "prop-types";
import Card from "@comp/card/";
import classNames from "classnames";

class Cardlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: this.props.limit
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.dataset !== this.props.dataset) {
      props.inherit.sendRequest(props.dataset);
    }

    if (props.limit !== this.props.limit) {
      this.setState({
        limit: props.limit
      });
    }
  }

  createCardComponent(registry) {
    if (registry.error) {
      return <div>{registry.error}</div>;
    }
    const reg = registry.data.data.items;
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
          gallery
        } = this.props;

        let gorsel = haber_gorsel[0]._id;

        return (
          <li
            key={ind}
            id={_id}
            style={{
              width: width + "px"
            }}
            className="card-manager_item"
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
  render() {
    const {
      registry,
      vertical,
      dataset,
      containerBG
    } = this.props;
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
        className="card-dataset"
        style={{
          backgroundColor: containerBG
        }}
      >
        <ul
          className={classNames(
            "card-manager",
            vertical && `card-manager-vertical`,
            !vertical && `card-manager-horizontal`
          )}
        >
          {items}
        </ul>
      </section>
    );
  }
}

Cardlist.propTypes = {
  registry: propTypes.object,
  inherit: propTypes.object,
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
  gallery: propTypes.bool
};

export default Cardlist;
