import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import { Block, Element } from "@comp/layouts/";
import LinkButton from "@comp/linkButton";
import ClickableTag from "./lib/clickabletag";
import Image from "@comp/image";
import { AdSlot } from "react-dfp";

function createMarkup(markup) {
  return { __html: markup };
}

class Article extends Component {
  static displayName = "Article";
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      cover,
      desc,
      content,
      cat,
      catUrl,
      className,
      isSSR
    } = this.props;

    return (
      <Block
        type="article"
        className={className}
        style={{
          width: isSSR ? 100 + "%" : 610 + "px"
        }}
      >
        <Element
          type="h1"
          className="article__h1"
        >
          {title}
        </Element>
        <Element
          type="p"
          className="article__description"
        >
          {desc}
        </Element>

        {isSSR && cat ? (
          <ClickableTag
            cat={cat}
            catUrl={catUrl}
          />
        ) : null}

        <Block
          type="section"
          className="article-wrapper"
        >
          <Block
            type="div"
            className="article-wrapper__content"
          >
            <Image
              src={`http://assets.blupoint.io/img/75/0x0/${cover}`}
              responsive
              alt={title}
              longdesc={desc}
            />

            <Block type="article">
              <div
                dangerouslySetInnerHTML={createMarkup(
                  content
                )}
              />
            </Block>
          </Block>
          <Block
            type="div"
            className="article-wrapper__similiar"
          >
            {this.props.children &&
              this.props.children[0]}
          </Block>
        </Block>
        {this.props.children &&
          this.props.children[1]}
      </Block>
    );
  }
}

Article.propTypes = {
  title: propTypes.string.isRequired,
  cover: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  cat: propTypes.string,
  catUrl: propTypes.string,
  className: propTypes.string,
  isSSR: propTypes.bool,
  children: propTypes.node
};

export default Article;
