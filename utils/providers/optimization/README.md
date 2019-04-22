# Optimization Provider

This component `<OptimizationProvider>` constructed based on the Context API ant its responsable for lazy and initial loading and optimizing images. 

Component must be passed as a parameter into `OptimizationConsumerHOC` before exported.

### props
- **_`initialLoadedItem`_**: number
  - Determines how many images will be loaded when DOM mounting occurs.   


```jsx
import React, { Component } from "react";
import {
  OptimizationProvider,
  OptimizationConsumerHOC
} from "@utils";

class PageLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialLoadedItems &&
      this.props.context &&
      this.props.context.startInitialLoad &&
      this.props.context.startInitialLoad(
        this.props.initialLoadedItems
      );

    this.props.context &&
      this.props.context.attachListener &&
      this.props.context.attachListener();
  }

  render() {
    return (
      <OptimizationProvider>
        {/* put your components here involves images */}
      </OptimizationProvider>
    );
  }
}

export default OptimizationConsumerHOC(
  MyTemplate
);

<PageLayout initialLoadedItems={5} />;
```
