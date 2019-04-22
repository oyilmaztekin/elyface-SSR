import React, { Component } from "react";
import propTypes from "prop-types";
import { OptimizationContext } from "@utils";

export const OptimizationConsumerHOC = WrappedComponent => {
  return class extends Component {
    static displayName =
      WrappedComponent.displayName;
    static propTypes = {
      store: propTypes.shape({
        state: propTypes.shape({
          initialLoadedItem: propTypes.number
        })
      })
    };
    // eslint-disable-next-line
    constructor(props) {
      super(props);
    }
    render() {
      if (this.props.store) {
        return (
          <OptimizationContext.Consumer>
            {context => {
              return (
                <WrappedComponent
                  {...this.props}
                  store={this.props.store}
                  context={context}
                />
              );
            }}
          </OptimizationContext.Consumer>
        );
      }

      return (
        <OptimizationContext.Consumer>
          {context => {
            return (
              <WrappedComponent
                {...this.props}
                context={context}
              />
            );
          }}
        </OptimizationContext.Consumer>
      );
    }
  };
};