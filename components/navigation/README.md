# Navigation Component

A navigation component replaced in the header component

## props

- **_`navElements`_**: object
  - all navigation items are created by this JSON object

### Usage

```javascript
import Navigation from "@comp/navigation/";
```

```javascript

const mockData = [
  {
    "key": "Gündem",
    "href": "/gundem"
  },
  {
    "key": "Siyaset",
    "href": "/siyaset"
  },
  {
    "key": "Ekonomi",
    "href": "/ekonomi"
  },
  ...
]

<Navigation
  navElements={mockData}
/>
```
