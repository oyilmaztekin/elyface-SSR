import React, { Component } from "react";
import autobind from "autobind-decorator";
import propTypes from "prop-types";

export const InfiniteContext = React.createContext();

export class InfiniteProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeURL: "",
      ssrURL: "",
      nodesHash: {}
    };
  }

  updateValue(key, val) {
    this.setState({ [key]: val });
  }

  componentDidMount() {
    this.attachScrollListener();
  }

  attachScrollListener() {
    if (this.state.nodesHash) {
      window.addEventListener(
        "scroll",
        this.scrollListener.bind(this),
        false
      );
    }
  }

  manipulateURL(url, title) {
    document.title = title;
    window.history.pushState(null, title, url);
  }

  scrollListener(e) {
    e.preventDefault();
    if (this.state && this.state.nodesHash) {
      let pageOffset = window.pageYOffset;
      let nodes = this.state.nodesHash;
      Object.entries(nodes).forEach(item => {
        let offsetTop = item[1].offsetTop;
        let height = item[1].height;
        const { activeURL } = this.state;
        if (
          offsetTop &&
          height &&
          pageOffset >= offsetTop &&
          pageOffset <= offsetTop + height
        ) {
          if (
            activeURL &&
            activeURL === item[1].url
          ) {
            return;
          }
          this.manipulateURL(
            document.location.origin +
              item[1].url,
            item[1].title
          );
          this.updateValue(
            "activeURL",
            item[1].url
          );
          
        } 
      });
    }
  }

  @autobind
  createNodeHash(node, item) {
    const newNodesHash = Object.assign(
      {},
      this.state.nodesHash
    );
    let elObj = {};
    let elHeight = node.clientHeight;
    let elTop = node.offsetTop;
    elObj.height = elHeight;
    elObj.offsetTop = elTop;
    elObj.id = item._id;
    elObj.url = item.url;
    elObj.title = item.title;
    newNodesHash[elObj.id] = elObj;

    this.updateValue("nodesHash", newNodesHash);
  }

  render() {
    return (
      <InfiniteContext.Provider
        value={{
          state: this.state,
          createNodeHash: this.createNodeHash
        }}
      >
        {this.props.children}
      </InfiniteContext.Provider>
    );
  }
}

InfiniteProvider.propTypes = {
  children: propTypes.node.isRequired
};
