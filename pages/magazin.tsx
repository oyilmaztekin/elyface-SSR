import React, {
  Fragment,
  Component
} from "react";
import { getDataset } from "@utils";
import HeaderWrapepr from "@comp/head/";
import PageLayout from "@nest/pagelayout";
import CategoryLayout from "@nest/catLayout";
import {
  CatDataTypes,
  ErrorResponse
} from "./@types/category/catDataTypes";
import { CategoryPropsInterface } from "./@types/category/propTypes";
import "static/styles/pages.scss";
import "static/styles/indexAds.scss";

class MagazinPage extends Component<CategoryPropsInterface> {
  static getInitialProps = async () => {
    /**
     * TODO: galeri, magazin, sağlık, eğitim
     */
    const dataset = "cat-magazin";
    const seohaberleridataset = "seo-haberleri";

    const data = await getDataset(dataset)
      .then((data:CatDataTypes) => data.data)
      .catch((err:ErrorResponse) => err.response.data);

    const seohaberleri = await getDataset(
      seohaberleridataset
    )
      .then((data:CatDataTypes) => data.data)
      .catch((err:ErrorResponse) => err.response.data);
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

  constructor(props:CategoryPropsInterface) {
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
          <CategoryLayout
            registry={this.props.registry}
            dataset={this.props.dataset}
          />
        </PageLayout>
      </Fragment>
    );
  }
}

export default MagazinPage;
