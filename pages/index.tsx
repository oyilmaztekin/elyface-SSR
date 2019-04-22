import React from "react";
import { getDataset } from "@utils";
import HeaderWrapepr from "@comp/head/";
import PageLayout from "@nest/pagelayout";
import IndexLayout from "@nest/indexlayout";
import {
  MansetCokOkuanlarDataInterface,
  RegularDataTypes,
  ErrorResponse
} from "./@types/responseDataTypes";
import { IndexPropsInterface } from "./@types/index/propTypes";
import { OptimizationProvider } from "@utils";
import "static/styles/pages.scss";
import "static/styles/indexAds.scss";

const IndexPage = (
  props: IndexPropsInterface
) => {
  return (
    <>
      <HeaderWrapepr title="Haberi Yakala" />
      <PageLayout>
        <OptimizationProvider>
          <IndexLayout
            initialLoadImages={2}
            registry={props.registry}
            dataset={props.dataset}
          />
        </OptimizationProvider>
      </PageLayout>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  const surmansetdataset: string = "sur-manset";
  const mansetdataset: string = "manset";
  const sagmansetdataset: string = "sag-manset";
  const mansetaltidataset: string = "manset-alti";
  const cokokunanlardataset: string =
    "cok-okunanlar";
  const gundemdataset: string = "cat-gundem";
  const ekonomidataset: string = "cat-ekonomi";
  const siyasetdataset: string = "cat-siyaset";
  const yasamdataset: string = "cat-yasam";
  const teknolojidataset: string =
    "cat-teknoloji";
  const dunyadataset: string = "cat-dunya";
  const seohaberleridataset: string =
    "seo-haberleri";
  const egitimdataset: string = "cat-egitim";
  const saglikdataset: string = "cat-saglik";
  const magazindataset: string = "cat-magazin";
  const galeridataset: string = "type-galeri";

  const surmanset = await getDataset(
    surmansetdataset
  )
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );
  const manset = await getDataset(mansetdataset)
    .then(
      (data: MansetCokOkuanlarDataInterface) =>
        data.data.data.items
    )
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const sagmanset = await getDataset(
    sagmansetdataset
  )
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const mansetalti = await getDataset(
    mansetaltidataset
  )
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const cokokunanlar = await getDataset(
    cokokunanlardataset
  )
    .then(
      (data: MansetCokOkuanlarDataInterface) =>
        data.data.data.items
    )
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const gundem = await getDataset(gundemdataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const ekonomi = await getDataset(ekonomidataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const siyaset = await getDataset(siyasetdataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const yasam = await getDataset(yasamdataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const teknoloji = await getDataset(
    teknolojidataset
  )
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const dunya = await getDataset(dunyadataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const seohaberleri = await getDataset(
    seohaberleridataset
  )
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const magazin = await getDataset(magazindataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );
  const saglik = await getDataset(saglikdataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const egitim = await getDataset(egitimdataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );

  const galeri = await getDataset(galeridataset)
    .then((data: RegularDataTypes) => data.data)
    .catch(
      (err: ErrorResponse) => err.response.data
    );
  return {
    registry: {
      surmanset: surmanset,
      manset: manset,
      sagmanset: sagmanset,
      mansetalti: mansetalti,
      cokokunanlar: cokokunanlar,
      gundem: gundem,
      ekonomi: ekonomi,
      siyaset: siyaset,
      yasam: yasam,
      teknoloji: teknoloji,
      dunya: dunya,
      seohaberleri: seohaberleri,
      egitim: egitim,
      saglik: saglik,
      magazin: magazin,
      galeri: galeri
    },
    dataset: {
      surmanset: surmansetdataset,
      manset: mansetdataset,
      sagmanset: sagmansetdataset,
      mansetalti: mansetaltidataset,
      cokokunanlar: cokokunanlardataset,
      gundem: gundemdataset,
      ekonomi: ekonomidataset,
      siyaset: siyasetdataset,
      yasam: yasamdataset,
      teknoloji: teknolojidataset,
      dunya: dunyadataset,
      seohaberleri: seohaberleridataset,
      egitim: egitimdataset,
      saglik: saglikdataset,
      magazin: magazindataset,
      galeri: galeridataset
    }
  };
};

export default IndexPage;
