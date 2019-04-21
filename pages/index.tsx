import React, {
  Fragment,
  Component
} from "react";
import { getDataset } from "@utils";
import HeaderWrapepr from "@comp/head/";
import PageLayout from "@nest/pagelayout";
// import propTypes from "prop-types";
import IndexLayout from "@nest/indexlayout";
import {
  MansetCokOkuanlarDataInterface,
  RegularDataTypes,
  ErrorResponse
} from "./@types/responseDataTypes";
import { IndexPropsInterface } from "./@types/index/propTypes";
import "static/styles/pages.scss";
import "static/styles/indexAds.scss";

class IndexPage extends Component<
  IndexPropsInterface
> {
  static getInitialProps = async () => {
    /**
     * TODO: galeri, magazin, sağlık, eğitim
     */
    const surmansetdataset: string = "sur-manset";
    const mansetdataset: string = "manset";
    const sagmansetdataset: string = "sag-manset";
    const mansetaltidataset: string =
      "manset-alti";
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
      .then(
        (data: RegularDataTypes): Object =>
          data.data
      )
      .catch(
        (err: ErrorResponse): Object =>
          err.response.data
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

    const ekonomi = await getDataset(
      ekonomidataset
    )
      .then((data: RegularDataTypes) => data.data)
      .catch(
        (err: ErrorResponse) => err.response.data
      );

    const siyaset = await getDataset(
      siyasetdataset
    )
      .then((data: RegularDataTypes) => data.data)
      .catch(
        (err: ErrorResponse) => err.response.data
      );

    const yasam= await getDataset(yasamdataset)
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

    const magazin = await getDataset(
      magazindataset
    )
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
  constructor(props: IndexPropsInterface) {
    super(props);
  }

  componentDidMount() {
    const script = document.createElement(
      "script"
    );
    script.setAttribute("defer", "true");
    script.innerText = `
      window.addEventListener("load", ()=> {
        const images = document.querySelectorAll(
          "[data-source]"
        );
        images.forEach(img => {
          img.src =
            img.attributes["data-source"].nodeValue;
        });
      })
    `;
    document.body.appendChild(script);
  }

  render() {
    return (
      <Fragment>
        <HeaderWrapepr title="Haberi Yakala" />
        <PageLayout>
          <IndexLayout
            registry={this.props.registry}
            dataset={this.props.dataset}
          />
        </PageLayout>
      </Fragment>
    );
  }
}

// IndexPage.propTypes = {
//   registry: propTypes.object,
//   dataset: propTypes.object
// };

export default IndexPage;
