import React, { PureComponent } from "react";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";
import autobind from "autobind-decorator";
import { getDataset } from "@utils";
import { Block } from "@comp/layouts";
import { StoreConsumerHOC } from "@utils";
import Article from "@comp/article/";

/**
 * @this State
 * @prop { hasMore } Boolean - determines if more fetch request needed
 * @prop { fetchCounter } Number - counts how many fetchMoreData invoked
 * @prop { registry } Array - returned data from API
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
  
  _changeURL(event, url) {
    event.preventDefault();
    this.props.context.updateValue(
      "activeURL",
      document.location.origin + url
    );
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
      this.props.context.updateValue &&
      this.props.context.updateValue(
        "activeURL",
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
                style={{
                  marginTop: 50 + "px"
                }}
              >
                <Article
                  title={i.title}
                  desc={i.description}
                  className="main-article"
                  cover={i.haber_gorsel[0]._id}
                  isSSR={false}
                  content={i.haber_metni}
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
  dataset: propTypes.object.isRequired,
  context: propTypes.object
};

Infinite.defaultProps = {
  dataset: "cat-gundem"
};

export default StoreConsumerHOC(Infinite);
