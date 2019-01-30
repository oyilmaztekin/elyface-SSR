import React, { Component } from "react";
import autobind from "autobind-decorator";

function SearchFormHOC(SearchFieldComponent) {
  return class SearchForm extends Component {
    static displayName = "SearchForm";
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

    @autobind
    handleSubmit(e) {
      //eslint-disable-next-line
      console.log(this.state);
      e.preventDefault();
    }

    @autobind
    handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }

    UNSAFE_componentWillMount() {
      //eslint-disable-next-line
      this.setState({ value: this.props.value });
    }

    render() {
      let {
        //eslint-disable-next-line
        value,
        //eslint-disable-next-line
        submitText,
        //eslint-disable-next-line
        onClick,
        ...searchProps
      } = this.props;
      return (
        <form
          onSubmit={this.handleSubmit}
          className="search-form"
        >
          <SearchFieldComponent
            value={this.state.value}
            onChange={this.handleChange}
            {...searchProps}
          />
          <input
            type="submit"
            value={submitText}
            className="search-form-submit"
            onClick={onClick}
          />
        </form>
      );
    }
  };
}

export default SearchFormHOC;
