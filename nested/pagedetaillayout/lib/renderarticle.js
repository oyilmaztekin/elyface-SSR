import React from "react";
import propTypes from "prop-types";
import Article from "@comp/article/";
import CardManager from "@comp/cardmanager/";

const RenderArticle = props => {
  const {
    title,
    description,
    ancestors,
    path,
    haber_metni,
    haber_gorsel,
    url,
    id
  } = props.content;

  const { breadcrumbs } = props;
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

RenderArticle.propTypes = {
  breadcrumbs: propTypes.object,
  content: propTypes.object
};

export default RenderArticle;
