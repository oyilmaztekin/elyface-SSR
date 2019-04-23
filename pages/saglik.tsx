import React, { Fragment } from "react";
import { getDataset } from "@utils";
import HeaderWrapepr from "@comp/head/";
import PageLayout from "@nest/pagelayout";
import CategoryLayout from "@nest/catLayout";
import {
  CatDataTypes,
  ErrorResponse
} from "../@types/category/catDataTypes";
import { OptimizationProvider } from "@utils";
import { CategoryPropsInterface } from "../@types/category/propTypes";
import "static/styles/pages.scss";
import "static/styles/indexAds.scss";

const SaglikPage = (
  props: CategoryPropsInterface
) => {
  return (
    <Fragment>
      <HeaderWrapepr title="Haberi Yakala" />
      <OptimizationProvider>
        <PageLayout>
          <CategoryLayout
            registry={props.registry}
            dataset={props.dataset}
          />
        </PageLayout>
      </OptimizationProvider>
    </Fragment>
  );
};

SaglikPage.getInitialProps = async () => {
  /**
   * TODO: galeri, magazin, sağlık, eğitim
   */
  const dataset: string = "cat-saglik";
  const seohaberleridataset: string =
    "seo-haberleri";

  const data = await getDataset(dataset)
    .then((data: CatDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const seohaberleri = await getDataset(
    seohaberleridataset
  )
    .then((data: CatDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );
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

export default SaglikPage;
