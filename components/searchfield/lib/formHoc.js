import React, { Component } from "react";
import autobind from "autobind-decorator";

function FormHOC(SearchFieldComponent) {
  return class SearchForm extends Component {
    static displayName = "SearchForm";
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

    @autobind
    getValues(event) {
      return {
        values: Object.values(
          event.target.children
        ).map(v => v.value)
      };
    }
    @autobind
    handleSubmit(e) {
      e.preventDefault();
      const result = this.getValues(e).values;
      //eslint-disable-next-line
      console.log(result);
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
          />
        </form>
      );
    }
  };
}

export default FormHOC;
