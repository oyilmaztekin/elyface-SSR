import React, { Component } from "react";
import autobind from "autobind-decorator";
import propTypes from "prop-types";

export const StoreContext = React.createContext();

export class StoreProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "",
      isHeaderSticky: false,
      adNetworkID: "61966246",
      brand:"#ffa200",
      defaultFontSize:"18",
      defaultFontColor:"#323232"
    };
  }

  @autobind
  updateValue(key, val) {
    // if val activeURL : history.pushState({}, "", val);
    this.setState({ [key]: val }, () => {
      if (key === "isHeaderSticky") {
        this.updateAdPos();
      }
    });
  }

  updateAdPos() {
    if (this.state.isHeaderSticky === true) {
      const adLeft = document.getElementById(
        "anasayfa_sol"
      );
      adLeft.style.top = 80 + "px";
    } else {
      const adLeft = document.getElementById(
        "anasayfa_sol"
      );
      adLeft.style.top = 150 + "px";
    }
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          state: this.state,
          updateValue: this.updateValue
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

StoreProvider.propTypes = {
  children: propTypes.node.isRequired
};
