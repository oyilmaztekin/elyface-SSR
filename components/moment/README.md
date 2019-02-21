# Moment Component

### Props

- **_`format`_** : string,
  - It takes a string of tokens and replaces them with their corresponding values.

All supported tokens of format can be seen [**here**](https://momentjs.com/docs/#/displaying/)

#### How to Use

```javascript
import Moment from "@comp/moment/"

<Moment format="Do MMMM YYYY, dddd">
  <span>⏰ </span>
</Moment>
```
