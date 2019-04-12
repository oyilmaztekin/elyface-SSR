import React, { PureComponent } from "react";
import propTypes from "prop-types";
import InfiniteScroll from "./lib/infinitescroll";
import autobind from "autobind-decorator";
import { getDataset } from "@utils";
import { Block } from "@comp/layouts";
import {
  StoreConsumerHOC,
  InfiniteConsumerHOC
} from "@utils";
import InfiniteItem from "./lib/infiniteItem";

/**
 * @this State
 * @prop { hasMore } Boolean - determines if more fetch request needed
 * @prop { fetchCounter } Number - counts how many fetchMoreData invoked
 * @prop { registry } Array - returned data from API
 */

class Infinite extends PureComponent {
  static displayName = "InfiniteWrapper";

  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      fetchCounter: 1,
      registry: null
    };
    this.counter = 0;
    this.nodesHash = {};
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
    this.props.context &&
      this.props.context.changeURL &&
      this.props.context.changeURL(
        document.location.href
      );

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
    this.setState({
      fetchCounter: newFetch,
      registry: slicedReg
    });
  }

  render() {
    const { registry, hasMore } = this.state;
    const loader = <h4>Yükleniyor...</h4>;
    if (registry && registry.length > 0) {
      return (
        <InfiniteScroll
          loadMore={this.fetchMoreData}
          hasMore={hasMore}
          loader={loader}
          useWindow={true}
          initialLoad={true}
          threshold={-200}
        >
          <Block type="div" id="infinite__items">
            {registry &&
              registry.map((i, index) => (
                <InfiniteItem
                  item={i}
                  index={index}
                  key={index}
                  hasMore={hasMore}
                />
              ))}
          </Block>
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
  dataset: propTypes.object.isRequired,
  store: propTypes.object,
  context:propTypes.object,
  gallery:propTypes.bool
};

Infinite.defaultProps = {
  dataset: "cat-gundem",
  gallery: false
};

// eslint-disable-next-line
Infinite = InfiniteConsumerHOC(Infinite);

export default StoreConsumerHOC(Infinite);
