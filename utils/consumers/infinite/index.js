import React, { Component } from "react";
import propTypes from "prop-types";
import { InfiniteContext } from "@utils";

export const InfiniteConsumerHOC = WrappedComponent => {
  return class extends Component {
    static displayName =
      WrappedComponent.displayName;
    static propTypes = {
      store: propTypes.shape({
        state: propTypes.shape({
          pageTitle: propTypes.string,
          isHeaderSticky: propTypes.bool,
          adNetworkID: propTypes.string
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
          <InfiniteContext.Consumer>
            {context => {
              return (
                <WrappedComponent
                  {...this.props}
                  store={this.props.store}
                  context={context}
                />
              );
            }}
          </InfiniteContext.Consumer>
        );
      }

      return (
        <InfiniteContext.Consumer>
          {context => {
            return (
              <WrappedComponent
                {...this.props}
                context={context}
              />
            );
          }}
        </InfiniteContext.Consumer>
      );
    }
  };
};