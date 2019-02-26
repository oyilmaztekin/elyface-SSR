import React, { Component } from "react";
import propTypes from "prop-types";
import Card from "@comp/card/";
import classNames from "classnames";

class Cardlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: 0
    };
  }
  componentDidUpdate(prevProps) {
    let st = this.state.changed;
    if (
      prevProps.registry !==
        this.props.registry ||
      prevProps.dataset !== this.props.dataset
    ) {
      this.setState({
        changed: ++st
      });
    }
  }
  createCardComponent(registry) {
    return registry.map((item, ind) => {
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
        lineHeight
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
          <Card bg={cardBg} height={height}>
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
    });
  }
  render() {
    const { registry, direction } = this.props;
    let items;
    registry
      ? (items = this.createCardComponent(
          registry
        ))
      : (items = "loading...");

    return (
      <React.Fragment>
        <ul
          className={classNames(
            "card-manager",
            direction &&
              `card-manager-${direction}`
          )}
        >
          {items}
        </ul>
      </React.Fragment>
    );
  }
}

Cardlist.propTypes = {
  registry: propTypes.array,
  inherit: propTypes.object,
  dataset: propTypes.dataset,
  cardBg: propTypes.string,
  imgClassName: propTypes.string,
  border: propTypes.string,
  textColor: propTypes.string,
  fontSize: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  lineHeight: propTypes.string,
  direction: propTypes.string
};

export default Cardlist;
