import React from "react";
import propTypes from "prop-types";
import { Block, Element } from "@comp/layouts";
import Image from "@comp/image";

const GalleryContent = props => {
  const { galleries } = props;
  const length = galleries.length;
  const items = galleries.map((el, idx) => {
    return (
      <Element type="li" className="galleries__li" key={idx}>
        <Element type="span" className="galleries__li__counter">
          {" "}
          {idx+1} / {length}{" "}
        </Element>
        <Image
          src={`http://assets.blupoint.io/img/75/0x0/${
            el._id
          }`}
          responsive
          alt={el.metadata.gor_yazi}
          longdesc={el.metadata.gor_yazi}
        />
      </Element>
    );
  });

  return (
    <Block type="ul" id="galleries">
      {items}
    </Block>
  );
};

GalleryContent.propTypes = {
    galleries: propTypes.array.isRequired
};

export default GalleryContent;
