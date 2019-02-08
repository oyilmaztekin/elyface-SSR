import React, { Component } from "react";
import propTypes from "prop-types";

export const Context = React.createContext();

const ProviderHOC = WrappedComponent => {
  return function(typeOfContext) {
    return class extends Component {
      static displayName =
        WrappedComponent.displayName;

      static propTypes = {
        children: propTypes.node,
        values: propTypes.object
      };

      static contextType = typeOfContext;
      constructor(props) {
        super(props);
      }

      render() {
        let { values } = this.props;
        return (
          <Context.Provider
            value={{
              values
            }}
          >
            <WrappedComponent {...this.props} />
          </Context.Provider>
        );
      }
    };
  };
};

export default ProviderHOC;
