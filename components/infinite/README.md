# Infinite 
A component that wraps `InfiniteScroll` component.

### props
- **_`dataset`_**: string,
  - a slug of the dataset which will be placed in enpoint.

 
### Usage

```javascript
import Infinite from "@comp/infinite/"

<Infinite dataset="cat-gundem" />
```

# InfiniteScroll

React Infinite Scroll
=======================

Infinitely load content using a React Component. This [fork](https://github.com/CassetteRocks/react-infinite-scroller) maintains a simple, lightweight infinite scroll package that supports both `window` and scrollable elements.

## How to use

```js
import InfiniteScroll from './lib/infinitescroll';
```

### Window scroll events

```js
<InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {items} // <-- This is the content you want to load
</InfiniteScroll>
```

### DOM scroll events

```js
<div style="height:700px;overflow:auto;">
    <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
    >
        {items}
    </InfiniteScroll>
</div>
```

### Custom parent element

You can define a custom `parentNode` element to base the scroll calulations on.

```js
<div style="height:700px;overflow:auto;" ref={(ref) => this.scrollParentRef = ref}>
    <div>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}
            getScrollParent={() => this.scrollParentRef}
        >
            {items}
        </InfiniteScroll>
    </div>
</div>
```

## Props

| Name             | Type          | Default    | Description|
|:----             |:----          |:----       |:----|
| `element`        | `Component`      | `'div'`    | Name of the element that the component should render as.|
| `hasMore`        | `Boolean`     | `false`    | Whether there are more items to be loaded. Event listeners are removed if `false`.|
| `initialLoad`    | `Boolean`     | `true`     | Whether the component should load the first set of items.|
| `isReverse`      | `Boolean`     | `false`    | Whether new items should be loaded when user scrolls to the top of the scrollable area.|
| `loadMore`       | `Function`    |            | A callback when more items are requested by the user. Receives a single parameter specifying the page to load e.g. `function handleLoadMore(page) { /* load more items here */ }` }|
| `loader`         | `Component`   |            | A React component to render while more items are loading. The parent component must have a unique key prop. |
| `pageStart`      | `Number`      | `0`        | The number of the first page to load, With the default of `0`, the first page is `1`.|
| `getScrollParent`   | `Function`|           | Override method to return a different scroll listener if it's not the immediate parent of InfiniteScroll. |
| `threshold`      | `Number`     | `250`      | The distance in pixels before the end of the items that will trigger a call to `loadMore`.|
| `useCapture`     | `Boolean`     | `false`     | Proxy to the `useCapture` option of the added event listeners.|
| `useWindow`      | `Boolean`     | `true`     | Add scroll listeners to the window, or else, the component's `parentNode`.|