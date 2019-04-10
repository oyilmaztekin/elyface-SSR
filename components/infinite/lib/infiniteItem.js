import React, { Component } from "react";
import propTypes from "prop-types";
import { Block } from "@comp/layouts";
import Article from "@comp/article/";
import { InfiniteConsumerHOC } from "@utils";

class InfiniteItem extends Component {
  static displayName = "InfiniteItem";
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.collectOffsets();
  }

  collectOffsets() {
    let node = document.querySelector(
      `#infinite__items--${this.props.item._id}`
    );

    this.props.context.createNodeHash(
      node,
      this.props.item
    );
  }

  render() {
    const { item, index } = this.props;
    return (
      <Block
        type="div"
        id={`infinite__items--${item._id}`}
        key={index}
        style={{
          marginTop: 50 + "px"
        }}
      >
        <Article
          title={item.title}
          desc={item.description}
          className="main-article"
          cover={item.haber_gorsel[0]._id}
          isSSR={false}
          content={item.haber_metni}
        />
      </Block>
    );
  }
}

InfiniteItem.propTypes = {
  item: propTypes.object,
  index: propTypes.number,
  context: propTypes.shape({
    createNodeHash: propTypes.func,
    state: propTypes.shape({
      nodesHash: propTypes.object
    })
  })
};

export default InfiniteConsumerHOC(InfiniteItem);
