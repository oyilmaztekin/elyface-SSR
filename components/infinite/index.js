import React, {
  Component,
  PureComponent
} from "react";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";
import autobind from "autobind-decorator";
import { getDataset } from "@utils";
import { Block } from "@comp/layouts";
import ArticleHead from "@nest/articleheading";
/**
 * @this State
 * @prop { hasMore } Boolean - determines if more fetch request needed
 * @prop { fetchCounter } Number - counts how many fetchMoreData invoked
 * @prop { registry } Array - returned data from API
 * @prop { dataLength } Number - size of the array returned from API
 * @prop { sliced } Array - A clone of the sliced registry represents shown items of the array
 */

class Infinite extends PureComponent {
  static displayName = "Infinite";

  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      fetchCounter: 1,
      registry: null
    };
  }

  sendRequest() {
    return getDataset(this.props.dataset)
      .then(data => {
        return data.data.data.items;
      })
      .catch(err => {
        return { error: err.message };
      });
  }

  async componentDidMount() {
    const reg = await this.sendRequest();
    const slicedReg = reg.slice(
      0,
      this.state.fetchCounter
    );
    this.setState({
      fetchedRegistry: reg,
      registry: slicedReg
    });
  }

  @autobind
  fetchMoreData(e) {
    const {
      fetchCounter,
      fetchedRegistry
    } = this.state;
    if (e > fetchedRegistry.length) {
      this.setState({
        hasMore: false
      });
    }

    let currentFetch = fetchCounter;
    let newFetch = ++currentFetch;

    const slicedReg = fetchedRegistry.slice(
      0,
      newFetch
    );
    setTimeout(() => {
      this.setState({
        fetchCounter: newFetch,
        registry: slicedReg
      });
    }, 300);
  }

  render() {
    const { registry, hasMore } = this.state;
    if (registry) {
      return (
        <InfiniteScroll
          loadMore={this.fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Yükleniyor...</h4>}
          useWindow={true}
          initialLoad={false}
          threshold={-200}
        >
          {registry &&
            registry.map((i, index) => (
              <Block
                type="div"
                className={i._id}
                key={index}
              >
                <ArticleHead
                  className="heading"
                  title={i.title}
                  imgSrc={i.haber_gorsel[0]._id}
                  desc={i.description}
                  articleContent={i.haber_metni}
                  infinite={true}
                />
              </Block>
            ))}
        </InfiniteScroll>
      );
    }
    return (
      <h4
        style={{
          marginTop: 70 + "px",
          display: "block"
        }}
      >
        loading...
      </h4>
    );
  }
}

Infinite.propTypes = {
  dataset: propTypes.object.isRequired
};

Infinite.defaultProps = {
  dataset: "cat-gundem"
};

export default Infinite;
