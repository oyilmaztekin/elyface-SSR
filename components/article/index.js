import React from "react";
import { Block } from "@comp/layouts";
import Infinite from "@comp/infinite";
import propTypes from "prop-types";
import createMarkup from "./createMarkup";

const Article = (props) => {
    return (
        <Block type="article">
            <div style={props.style} dangerouslySetInnerHTML={createMarkup(props.article)} />
            {props.infinite ? <Infinite dataset={props.infiniteDataset} /> :null}
        </Block>
    )
}

Article.propTypes = {
    article: propTypes.string.isRequired,
    style: propTypes.style,
    infiniteDataset: propTypes.string,
    infinite:propTypes.bool
}

export default Article;