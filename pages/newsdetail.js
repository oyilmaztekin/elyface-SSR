import React, { Component } from "react";
import Head from "next/head";
import { getRouter } from "@utils";
import PageLayout from "@nest/pagelayout";
import propTypes from "prop-types";
import PageDetailLayout from "@nest/pagedetaillayout";
import "static/styles/pages.scss";
import "static/styles/newsdetail.scss";
import "static/styles/indexAds.scss";

class NewsDetail extends Component {
  static getInitialProps = async ({ asPath }) => {
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
  constructor(props) {
    super(props);
  }

  render() {
    const {
      content: {
        data,
        data: { title }
      }
    } = this.props;
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <PageLayout infinite={true}>
            <PageDetailLayout content={data} />
        </PageLayout>
      </>
    );
  }
}

NewsDetail.propTypes = {
  content: propTypes.object
};

export default NewsDetail;
