import React, { Fragment } from "react";
import { getContent } from "@utils";
import PageLayout from "@nest/pagelayout";
import propTypes from "prop-types";
import PageDetailLayout from "@nest/pagedetaillayout";
import "static/styles/pages.scss";
import "static/styles/newsdetail.scss";

const GundemPage = props => {
    return (
        <Fragment>
            <PageLayout>
                <PageDetailLayout content={props.content.data}
                />
            </PageLayout>
        </Fragment>
    );
};

GundemPage.propTypes = {
    content: propTypes.object
};

GundemPage.getInitialProps = async ({ query : {id}, query:{content_hash} }) => {

  const data = await getContent(content_hash)
    .then(data => data.data)
    .catch(err => err.response.data);
  return {
    content: {
      data: data,
    }
  };

};

export default GundemPage;
