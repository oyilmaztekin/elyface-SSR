import React, {Component} from "react";
import propTypes from "prop-types";
import Article from "@comp/article/";
import CardManager from "@comp/cardmanager/";
import { OptimizationConsumerHOC } from "@utils";

class RenderArticle extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const {
      context,
      initialLoadImages
    } = this.props;

    initialLoadImages &&
      context &&
      context.startInitialLoad &&
      context.startInitialLoad(initialLoadImages);

    context &&
      context.state &&
      context.attachLazyLoadListener &&
      context.attachLazyLoadListener();
  }
  render(){
  const {
    title,
    description,
    ancestors,
    path,
    haber_metni,
    haber_gorsel,
    url,
    id
  } = this.props.content;

  const { breadcrumbs } = this.props;
  return (
    <Article
      title={title}
      desc={description}
      cat={breadcrumbs.cat.title}
      catUrl={breadcrumbs.cat.url}
      className="main-article"
      cover={haber_gorsel[0]._id}
      isSSR={true}
      content={haber_metni}
    >
      <CardManager
        dataset="cat-gundem"
        limit={2}
        vertical={true}
        cardBg="#282841"
        className="section-cards__sag-manset-yani"
        imgClassName="nomargin"
        border="#ffa200"
        width={303}
        lineHeight="24"
        textColor="#fff"
      />
    </Article>
  );
};
}

RenderArticle.propTypes = {
  initialLoadImages:propTypes.number,
  breadcrumbs: propTypes.object,
  content: propTypes.object,
  context: propTypes.shape({
    state: propTypes.shape({
      initialLoadImages:propTypes.number,
      imageElements: propTypes.object,
      isInitialLoadCompleted:propTypes.bool
    }),
    startInitialLoad:propTypes.func,
    attachLazyLoadListener:propTypes.func
  })
};

RenderArticle.defaultProps = {
  initialLoadImages:1
}

export default OptimizationConsumerHOC(RenderArticle);
