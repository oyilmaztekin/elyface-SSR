import React, {
  Fragment,
  Component
} from "react";
import { getDataset } from "@utils";
import HeaderWrapepr from "@comp/head/";
import PageLayout from "@nest/pagelayout";
import propTypes from "prop-types";
import IndexLayout from "@nest/indexlayout";
import "static/styles/pages.scss";
import "static/styles/indexAds.scss";

class IndexPage extends Component {
  static getInitialProps = async () => {
    /**
     * TODO: galeri, magazin, sağlık, eğitim
     */
    const surmansetdataset = "sur-manset";
    const mansetdataset = "manset";
    const sagmansetdataset = "sag-manset";
    const mansetaltidataset = "manset-alti";
    const cokokunanlardataset = "cok-okunanlar";
    const gundemdataset = "cat-gundem";
    const ekonomidataset = "cat-ekonomi";
    const siyasetdataset = "cat-siyaset";
    const yasamdataset = "cat-yasam";
    const teknolojidataset = "cat-teknoloji";
    const dunyadataset = "cat-dunya";
    const seohaberleridataset = "seo-haberleri";
    const egitimdataset = "cat-egitim";
    const saglikdataset = "cat-saglik";
    const magazindataset = "cat-magazin";
    const galeridataset = "type-galeri";

    const surmanset = await getDataset(
      surmansetdataset
    )
      .then(data => data.data)
      .catch(err => err.response.data);
    const manset = await getDataset(mansetdataset)
      .then(data => data.data.data.items)
      .catch(err => err.response.data);

    const sagmanset = await getDataset(
      sagmansetdataset
    )
      .then(data => data.data)
      .catch(err => err.response.data);

    const mansetalti = await getDataset(
      mansetaltidataset
    )
      .then(data => data.data)
      .catch(err => err.response.data);

    const cokokunanlar = await getDataset(
      cokokunanlardataset
    )
      .then(data => data.data.data.items)
      .catch(err => err.response.data);

    const gundem = await getDataset(gundemdataset)
      .then(data => data.data)
      .catch(err => err.response.data);

    const ekonomi = await getDataset(
      ekonomidataset
    )
      .then(data => data.data)
      .catch(err => err.response.data);

    const siyaset = await getDataset(
      siyasetdataset
    )
      .then(data => data.data)
      .catch(err => err.response.data);

    const yasam = await getDataset(yasamdataset)
      .then(data => data.data)
      .catch(err => err.response.data);

    const teknoloji = await getDataset(
      teknolojidataset
    )
      .then(data => data.data)
      .catch(err => err.response.data);

    const dunya = await getDataset(dunyadataset)
      .then(data => data.data)
      .catch(err => err.response.data);

    const seohaberleri = await getDataset(
      seohaberleridataset
    )
      .then(data => data.data)
      .catch(err => err.response.data);

    const magazin = await getDataset(
      magazindataset
    )
      .then(data => data.data)
      .catch(err => err.response.data);
    const saglik = await getDataset(saglikdataset)
      .then(data => data.data)
      .catch(err => err.response.data);

    const egitim = await getDataset(egitimdataset)
      .then(data => data.data)
      .catch(err => err.response.data);

    const galeri = await getDataset(galeridataset)
      .then(data => data.data)
      .catch(err => err.response.data);
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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const script = document.createElement(
      "script"
    );
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

IndexPage.propTypes = {
  registry: propTypes.object,
  dataset: propTypes.object
};

export default IndexPage;
