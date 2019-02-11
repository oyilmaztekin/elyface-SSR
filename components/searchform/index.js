import "@globalstyle";
import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import SearchFormHOC from "./lib/searchFormHoc";

class SearchForm extends Component {
  static displayName = "Search Form";
  constructor(props) {
    super(props);
  }

  render() {
    let { className, ...inputProps } = this.props;
    return (
      <input
        ref={r => {
          this.input = r;
        }}
        className={className}
        {...inputProps}
      />
    );
  }
}

SearchForm.propTypes = {
  id: propTypes.string,
  value: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  onSubmit: propTypes.func,
  placeholder: propTypes.string,
  type: propTypes.string,
  loading: propTypes.bool,
  className: propTypes.string
};

export default SearchFormHOC(SearchForm);
