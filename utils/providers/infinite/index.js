import React, { Component } from "react";
import autobind from "autobind-decorator";
import propTypes from "prop-types";

export const InfiniteContext = React.createContext();

export class InfiniteProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.scrollListener,
        true
      );
    }
  }

  scrollListener(e) {
    e.preventDefault();
    
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
    newNodesHash[`${elHeight}_${elTop}`] = elObj;

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
