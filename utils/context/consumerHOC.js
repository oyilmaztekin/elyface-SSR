import React, { Component } from "react";
import { Context } from "@utils/provider";

const ContextHoc = WrappedComponent => {
  return class extends Component {
    static displayName =
      WrappedComponent.displayName;

    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Context.Consumer>
          {context => {
            return (
              <WrappedComponent
                {...this.props}
                context={context}
              />
            );
          }}
        </Context.Consumer>
      );
    }
  };
};

export default ContextHoc;
