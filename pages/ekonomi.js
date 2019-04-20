import React, { Fragment } from "react";
import { getDataset } from "@utils";
import PageLayout from "@nest/pagelayout";
import propTypes from "prop-types";
import CategoryLayout from "@nest/catLayout";
import "static/styles/pages.scss";
import "static/styles/indexAds.scss";

const EkonomiPage = props => {
  return (
    <Fragment>
      <PageLayout>
        <CategoryLayout
          registry={props.registry}
          dataset={props.dataset}
        />
      </PageLayout>
    </Fragment>
  );
};

EkonomiPage.propTypes = {
  registry: propTypes.object,
  dataset: propTypes.object
};

EkonomiPage.getInitialProps = async () => {
  /**
   * TODO: galeri, magazin, sağlık, eğitim
   */
  const dataset = "cat-ekonomi";
  const seohaberleridataset = "seo-haberleri";

  const data = await getDataset(dataset)
    .then(data => data.data)
    .catch(err => err.response.data);

  const seohaberleri = await getDataset(
    seohaberleridataset
  )
    .then(data => data.data)
    .catch(err => err.response.data);
  return {
    registry: {
      data: data,
      datacarousel: data.data.items,
      seohaberleri: seohaberleri
    },
    dataset: {
      data: dataset,
      seohaberleri: seohaberleridataset
    }
  };
};

export default EkonomiPage;
