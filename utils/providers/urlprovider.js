import React, { Component } from "react";
import autobind from "autobind-decorator";
import propTypes from "prop-types";

export const URLContext = React.createContext();

export class URLProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeURL: ""
    };
  }

  @autobind
  updateValue(key, val) {
    history.pushState({}, "", val);
    this.setState({ [key]: val });
  }

  render() {
    return (
      <URLContext.Provider
        value={{
          state: this.state,
          updateValue: this.updateValue
        }}
      >
        {this.props.children}
      </URLContext.Provider>
    );
  }
}

URLProvider.propTypes = {
  children: propTypes.node.isRequired
};
