import "./assets/styles.scss";
import React, { Fragment } from "react";
import Cards from "@comp/cards/";
import Container from "@comp/container/";
import { Element, Block } from "@comp/layouts";
import Breadcrumb from "@comp/breadcrumb";
import Row from "@comp/row/";
import Lists from "@comp/lists/";
import CardManager from "@nest/cardManager";
import propTypes from "prop-types";
import Article from "@comp/article";
import ArticleHead from "@nest/articleheading";

const PageDetailLayout = props => {
  const { content } = props;
  const {
    title,
    description,
    ancestors,
    self_path,
    path,
    haber_metni,
    haber_gorsel
  } = content;

  const breadcrumbs = {
    active: {
      title: title,
      url: self_path
    },
    cat: {
      title: ancestors[0].title,
      url: path
    }
  };
  return (
    <Fragment>
      <Block type="main">
        <Container
          width={970}
          bg="#fff"
          padding="40"
        >
          <Breadcrumb
            cat={breadcrumbs.cat}
            active={breadcrumbs.active}
          />

          <ArticleHead
            title={title}
            imgSrc={haber_gorsel[0]._id}
            desc={description}
            articleContent={haber_metni}
            className="heading"
            infinite={false}
          />

          <Block
            type="section"
            className="article"
          >
            <Row>
              <Article
                style={{ width: 100 + "%" }}
                article={haber_metni}
                infinite={true}
                dataset="cat-gundem"
              />
              <Block type="aside">
                <CardManager
                  dataset="cat-gundem"
                  limit={5}
                  vertical={true}
                  containerBG="#ffffff"
                  cardBg="#fff"
                  textColor="#323232"
                  fontSize="16"
                  gallery={false}
                  imgClassName="className"
                  border="#ffa200"
                  width={250}
                  lineHeight="24"
                />
              </Block>
            </Row>
          </Block>
        </Container>
      </Block>
    </Fragment>
  );
};

PageDetailLayout.propTypes = {
  content: propTypes.object
};

export default PageDetailLayout;
