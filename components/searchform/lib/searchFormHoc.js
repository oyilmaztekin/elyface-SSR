import React, { Component } from "react";
import autobind from "autobind-decorator";
import Icon from "@comp/icon/";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
      e.preventDefault();
      this.setState({
        value: e.target.value
      });
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
        submitIcon,
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
          <button
            type="submit"
            className="search-form-submit"
            onClick={onClick}
          >
            <Icon icon={faSearch} size="16" />
          </button>
        </form>
      );
    }
  };
}

export default SearchFormHOC;
