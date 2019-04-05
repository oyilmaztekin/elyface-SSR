import "./assets/styles.scss";
import React, {
  Fragment,
  Component
} from "react";
import Container from "@comp/container/";
import { Block } from "@comp/layouts";
import Breadcrumb from "@comp/breadcrumb";
import propTypes from "prop-types";
import { StoreConsumerHOC } from "@utils";
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
      url,
      id
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
        <Block type="main" >
          <Container
            width={970}
            bg="#fff"
            padding="40"
            boxSizing="border-box"
          >
            <Breadcrumb
              cat={breadcrumbs.cat}
              active={breadcrumbs.active}
            />
            
                <Block
                  type="div"
                  id="articles"
                  className={`articles-${id}`}
                >
                  {/* <ArticleServer
                    title={title}
                    imgSrc={haber_gorsel[0]._id}
                    desc={description}
                    articleContent={haber_metni}
                    className="heading"
                    article={haber_metni}
                  />

                  <ArticleInfinite
                    infinitedataset="cat-gundem"
                    cardsdataset="cat-gundem"
                  /> */}
                </Block>
          </Container>
        </Block>
      </Fragment>
    );
  }
}

PageDetailLayout.propTypes = {
  content: propTypes.object,
  context: propTypes.object
};

export default StoreConsumerHOC(PageDetailLayout);
