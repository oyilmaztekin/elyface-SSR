import React, { Component } from "react";
import Head from "next/head";
import { getRouter } from "@utils";
import PageLayout from "@nest/pagelayout";
import propTypes from "prop-types";
import PageDetailLayout from "@nest/pagedetaillayout";
import { DFPSlotsProvider } from "react-dfp";
import { AdManager } from "@utils";
import "static/styles/pages.scss";
import "static/styles/newsdetail.scss";

class GundemPage extends Component {
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

  componentDidMount() {
    AdManager.loadGooogleDFPScript();
    AdManager.createAdConfigScript();
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
        <PageLayout>
          <DFPSlotsProvider>
            <PageDetailLayout content={data} />
          </DFPSlotsProvider>
        </PageLayout>
      </>
    );
  }
}

GundemPage.propTypes = {
  content: propTypes.object
};

export default GundemPage;
