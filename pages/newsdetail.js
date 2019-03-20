import React, { Fragment } from "react";
import { getRouter } from "@utils";
import PageLayout from "@nest/pagelayout";
import propTypes from "prop-types";
import PageDetailLayout from "@nest/pagedetaillayout";
import { URLProvider } from "@utils";
import "static/styles/pages.scss";
import "static/styles/newsdetail.scss";

const GundemPage = props => {
  return (
      <PageLayout>
        <URLProvider>
        <PageDetailLayout
          content={props.content.data}
        />
      </URLProvider>    
      </PageLayout>
    
  );
};

GundemPage.propTypes = {
  content: propTypes.object
};

GundemPage.getInitialProps = async ({
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

export default GundemPage;
