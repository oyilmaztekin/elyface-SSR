import "./assets/styles.scss";
import React, { Fragment } from "react";
import Cards from "@comp/cards/";
import Container from "@comp/container/";
import { Element, Block } from "@comp/layouts";
import Breadcrumb from "@comp/breadcrumb";
import Row from "@comp/row/";
import Lists from "@comp/lists/";
import CardManager from "@nest/cardManager"
import propTypes from "prop-types";

function createMarkup(markup) {
    return { __html: markup };
}

const PageDetailLayout = props => {
    const { content } = props;
    const { title, description, ancestors, self_path, path, haber_metni } = content;

    const breadcrumbs = {
        active: {
            title: title,
            url: self_path
        },
        cat: {
            title: ancestors[0].title,
            url: path
        }
    }
    return (
        <Fragment>
            <Block type="main">
                <Container width={970} bg="#fff" padding="40">
                    <Breadcrumb cat={breadcrumbs.cat} active={breadcrumbs.active} />
                    <Block type="section" className="heading">

                        <Element type="h1" style={{
                            marginTop: 20 + "px"
                        }}>
                            {title}
                        </Element>

                        <Element type="p" className="desc"> {description}
                        </Element>

                    </Block>
                    <Block type="section" className="article">
                        <Row>
                            <Block type="article">
                                <div style={{ width: 100+"%" }} dangerouslySetInnerHTML={createMarkup(haber_metni)} />
                            </Block>
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
