import React, { Component } from "react";
import { StoreContext } from "@utils";

export const StoreConsumerHOC = WrappedComponent => {
  return class extends Component {
    static displayName = WrappedComponent.displayName;
    // eslint-disable-next-line
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <StoreContext.Consumer>
          {store => {
            return <WrappedComponent {...this.props} store={store} />;
          }}
        </StoreContext.Consumer>
      );
    }
  };
};
