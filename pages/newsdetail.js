import React, { Component } from "react";
import { getRouter } from "@utils";
import HeadWrapper from "@comp/head";
import PageLayout from "@nest/pagelayout";
import propTypes from "prop-types";
import PageDetailLayout from "@nest/pagedetaillayout";
import { OptimizationProvider } from "@utils";
import "static/styles/pages.scss";
import "static/styles/newsdetail.scss";
import "static/styles/indexAds.scss";

const NewsDetail = props => {
  const {
    content: {
      data,
      data: { title }
    }
  } = props;
  return (
    <>
      <HeadWrapper
        title={title}
        description={data.description}
      />
      <OptimizationProvider>
        <PageLayout infinite={true}>
          <PageDetailLayout content={data} />
        </PageLayout>
      </OptimizationProvider>
    </>
  );
};

NewsDetail.getInitialProps = async ({
  asPath
}) => {
  const data = await getRouter(asPath)
    .then(data => data.data)
    .catch(err => err.response.data);
  return {
    content: {
      data: data.model,
      route: data.route,
      template: data.template
    }
  };
};

NewsDetail.propTypes = {
  content: propTypes.object
};

export default NewsDetail;
