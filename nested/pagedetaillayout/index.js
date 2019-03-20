import "./assets/styles.scss";
import React, {
  Fragment,
  Component
} from "react";
import Cards from "@comp/cards/";
import Container from "@comp/container/";
import { Element, Block } from "@comp/layouts";
import Breadcrumb from "@comp/breadcrumb";
import Row from "@comp/row/";
import CardManager from "@nest/cardManager";
import propTypes from "prop-types";
import Article from "@comp/article";
import ArticleHeading from "@nest/articleheading";
import { URLConsumerHOC } from "@utils";
import autobind from "autobind-decorator";

class PageDetailLayout extends Component {
  static displayName = "NewsDetail";

  constructor(props) {
    super(props);
  }

  @autobind
  _changeURL(event, url) {
    event.preventDefault();
    this.props.context.updateValue(
      "activeURL",
      document.location.origin + url
    );
  }
  
  render() {
    const { content } = this.props;
    const {
      title,
      description,
      ancestors,
      path,
      haber_metni,
      haber_gorsel,
      url
    } = content;

    const breadcrumbs = {
      active: {
        title: title,
        url: url
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

            <ArticleHeading
              title={title}
              imgSrc={haber_gorsel[0]._id}
              desc={description}
              articleContent={haber_metni}
              className="heading"
              infinite={false}
              onMouseEnter={e =>
                this._changeURL(e, url)
              }
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
  }
}

PageDetailLayout.propTypes = {
  content: propTypes.object
};

export default URLConsumerHOC(PageDetailLayout);
