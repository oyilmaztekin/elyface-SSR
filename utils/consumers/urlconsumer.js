import React, { Component } from "react";
import { URLContext } from "@utils";

export const URLConsumerHOC = WrappedComponent => {
  return class extends Component {
    static displayName = WrappedComponent.displayName;
    // eslint-disable-next-line
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <URLContext.Consumer>
          {context => {
            return <WrappedComponent {...this.props} context={context} />;
          }}
        </URLContext.Consumer>
      );
    }
  };
};
