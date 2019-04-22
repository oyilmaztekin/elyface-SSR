import React, { Component } from "react";
import autobind from "autobind-decorator";

type OptimizationState = {
  initialLoadImages: number;
  imageElements: NodeListOf<
    HTMLImageElement
  > | null;
  isInitialLoadCompleted: boolean;
};

type _OptimizationContextTypes = {
  state: OptimizationState;
};

export type _OptimizationPropTypes = {
  children: React.ReactNode;
};

export const OptimizationContext = React.createContext<_OptimizationContextTypes | null>(
  null
);

const initialState = Object.freeze({
  initialLoadImages: 0,
  imageElements: null,
  isInitialLoadCompleted: false
});

export class OptimizationProvider extends Component<
  _OptimizationPropTypes,
  OptimizationState
> {
  readonly state = initialState;
  constructor(props: _OptimizationPropTypes) {
    super(props);
  }

  @autobind
  startInitialLoad(initialLoadItems: number) {
    const images: NodeListOf<
      HTMLImageElement
    > = document.querySelectorAll(
      "[data-source]"
    );

    images.forEach(
      (img: HTMLImageElement, idx: number) => {
        if (idx >= initialLoadItems) {
          return;
        }
        if (img.dataset.source) {
          img.src = img.dataset.source;
          img.dataset.source = "";
        }
      }
    );
    this.setState({
      imageElements: images,
      isInitialLoadCompleted: true
    });
  }


  _handleLazyLoad(e: Event) {
    e.preventDefault();
    const {
      imageElements,
      isInitialLoadCompleted
    } = this.state;

    if (
      this.state &&
      imageElements &&
      isInitialLoadCompleted
    ) {
      const images: NodeListOf<
        HTMLImageElement
      > = Object.assign({}, imageElements);

      const windowOffset: number =
        window.pageYOffset + 401;

      Object.values(images).forEach(
        (
          el:
            | HTMLElement
            | HTMLImageElement
            | any
        ) => {
          if (
            el.offsetParent &&
            windowOffset >=
              el.offsetParent.offsetTop &&
            !el.src.startsWith("http://assets.")
          ) {
            if (
              windowOffset >=
              el.offsetParent.offsetTop
            ) {
              el.src = el.dataset.source;
              return;
            }
            return;
          }
          return;
        }
      );
    }
  }

  @autobind
  attachLazyLoadListener() {
    window.addEventListener(
      "scroll",
      this._handleLazyLoad.bind(this),
      false
    );
  }

  detachLazyLoadListener() {
    window.removeEventListener(
      "scroll",
      this._handleLazyLoad.bind(this),
      false
    );
  }

  render() {
    return (
      <OptimizationContext.Provider
        value={{
          state: this.state,
          startInitialLoad: this.startInitialLoad,
          attachLazyLoadListener: this
            .attachLazyLoadListener
        }}
      >
        {this.props.children}
      </OptimizationContext.Provider>
    );
  }
}
