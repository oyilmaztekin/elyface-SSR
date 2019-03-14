# Container Component

A simple component that wraps any DOM elements. can be used as a row or container

### props

- **_`width`_**: number
- **_`percentage`_**: boolean
  - if its true width converted to % instead of px
- **_`display`_**: string
  - flex, display, none ...
- **_`justifyContent`_**: number
  - default `space-between`
- **_`paddingTop`_**: number
- **_`paddingRight`_**: string
  - default `40`
- **_`paddingBottom`_**: string
- **_`paddingLeft`_**: string
  - default `40`
  

### Usage

```javascript
import Container from "@comp/container/";

<Container width={30} percentage={true} display="block" paddingTop={0} paddingRight={40} paddingBottom={0} paddingLeft={40}>
 <div>...<div>
</Container>
```
