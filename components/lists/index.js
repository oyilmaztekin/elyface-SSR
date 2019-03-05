import React, { Component } from "react";
import propTypes from "prop-types";
import Link from "next/link";
import LinkButton from "@comp/linkButton/";
import "./assets/styles.scss";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: this.props.limit
    };
  }

  createListComponent(registry) {
    if (registry.error) {
      return <div>{registry.error}</div>;
    }
    const reg = registry.data.items;

    return reg
      .map((item, ind) => {
        const { _id, title, self_path } = item;
        const { linkClassName } = this.props;

        return (
          <li key={ind} id={_id}>
            <Link
              href={self_path}
              passHref={true}
            >
              <LinkButton
                text={title}
                className={`${linkClassName}`}
              >
                <span>{title}</span>
              </LinkButton>
            </Link>
          </li>
        );
      })
      .slice(0, this.state.limit);
  }

  render() {
    const {
      registry,
      dataset,
      className,
      bg,
      vertical
    } = this.props;

    let items;
    registry
      ? (items = this.createListComponent(
          registry
        ))
      : (items = "loading...");

    return (
      <section
        data-dataset={dataset}
        data-dataset-id={
          registry &&
          registry.hasOwnProperty("data") &&
          registry.data._id
        }
        style={{
          backgroundColor: bg
        }}
      >
        <ul
          className={`${className}`}
          style={{
            flexDirection: vertical
              ? "column"
              : "row"
          }}
        >
          {items}
        </ul>
      </section>
    );
  }
}

Lists.propTypes = {
  registry: propTypes.object.isRequired,
  dataset: propTypes.string,
  bg: propTypes.string,
  limit: propTypes.number,
  className: propTypes.string,
  linkClassName: propTypes.string,
  vertical: propTypes.bool
};

export default Lists;
