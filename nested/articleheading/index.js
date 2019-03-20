import React, { Component } from "react";
import propTypes from "prop-types";
import { Block, Element } from "@comp/layouts";
import Image from "@comp/image";
import Article from "@comp/article";
import autobind from "autobind-decorator";

class ArticleHeading extends Component {
  constructor(props) {
    super(props);
  }

  @autobind
  _handleMouseEnter(e) {
    e.preventDefault();
    this.props.onMouseEnter &&
      this.props.onMouseEnter(e);
  }

  render() {
    const {
      className,
      title,
      desc,
      infinite,
      imgSrc,
      articleContent,
    } = this.props;

    return (
      <>
        <Block
          type="section"
          className={className}
          onMouseEnter={this._handleMouseEnter}
        >
          <Element
            type="h1"
            style={{
              marginTop: 20 + "px"
            }}
          >
            {title}
          </Element>

          <Element
            type="p"
            className="desc"
          >
            {" "}
            {desc}
          </Element>

          {infinite ? (
            <Image
              src={`http://assets.blupoint.io/img/75/600x340/${imgSrc}`}
              longdesc={desc}
              title={title}
              style={{ width: 100 + "%" }}
            />
          ) : null}

          {infinite ? (
            <Article
              style={{ width: 100 + "%" }}
              article={articleContent}
            />
          ) : null}
        </Block>
      </>
    );
  }
}

ArticleHeading.propTypes = {
  className: propTypes.string,
  index: propTypes.number,
  title: propTypes.string,
  imgSrc: propTypes.string,
  desc: propTypes.string,
  articleContent: propTypes.string,
  infinite: propTypes.bool,
  contentURL: propTypes.string,
  onMouseEnter: propTypes.func
};

export default ArticleHeading;
