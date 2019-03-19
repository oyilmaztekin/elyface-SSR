import React from "react";
import propTypes from "prop-types";
import { Block, Element } from "@comp/layouts";
import Image from "@comp/image";
import Article from "@comp/article";

const ArticleHead = props => {
  return (
    <>
      <Block
        type="section"
        className={props.className}
      >
        <Element
          type="h1"
          style={{
            marginTop: 20 + "px"
          }}
        >
          {props.title}
        </Element>
        
        <Element type="p" className="desc">
          {" "}
          {props.desc}
        </Element>

        {props.infinite ? (
          <Image
            src={`http://assets.blupoint.io/img/75/600x340/${
              props.imgSrc
            }`}
            longdesc={props.desc}
            title={props.title}
            style={{ width: 100 + "%" }}
          />
        ) : null}

        {props.infinite ? (
          <Article
            style={{ width: 100 + "%" }}
            article={props.articleContent}
          />
        ) : null}
      </Block>
    </>
  );
};

ArticleHead.propTypes = {
  className: propTypes.string,
  index: propTypes.number,
  title: propTypes.string,
  imgSrc: propTypes.string,
  desc: propTypes.string,
  articleContent: propTypes.string,
  infinite: propTypes.bool
};

export default ArticleHead;
