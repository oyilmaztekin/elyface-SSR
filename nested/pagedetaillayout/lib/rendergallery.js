import React from "react";
import propTypes from "prop-types";
import Gallery from "@comp/gallery/";
import CardManager from "@comp/cardmanager/";

const RenderGallery = props => {
  const {
    breadcrumbs,
    content: { title },
    content: { description },
    content: { galeri_gorsel },
    content: { gorselcok }
  } = props;
  let gorsel;
  galeri_gorsel.length < 0
    ? (gorsel = galeri_gorsel[0]._id)
    : (gorsel = galeri_gorsel._id);
  return (
    <Gallery
      title={title}
      desc={description}
      cat={breadcrumbs.cat.title}
      catUrl={breadcrumbs.cat.url}
      className="main-article"
      cover={gorsel}
      galleries={gorselcok}
    >
      <CardManager
        dataset="cat-magazin"
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
    </Gallery>
  );
};

RenderGallery.propTypes = {
  breadcrumbs: propTypes.object,
  content: propTypes.object
};

export default RenderGallery;
