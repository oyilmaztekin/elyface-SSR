## Cards

a template component that wraps card component. Takes dataset to fetch data from the server and create cards as its number of the items of the returned array.

### props
- **_`limit`_**: number,
  - determines limitation of the item. Slices array according to the given limit.
- **_`horizontal`_**: boolean,
  - determines direction of the columns horizontal or vertical
- **_`containerBG`_**: string
  - A custom background of wrapper
- **_`cardBg`_**: string
  - background color of the Card Component
- **_`gallery`_** : bool
  - for gallery icon
- **_`textColor`_**: string
  - custom hex color of Card.Title
- **_`fontSize`_**: string
  - If you want to override font size that come from `type` prop use this

### usage

```javascript
import CardManager from "@nest/cardManager/";

<CardManager
  dataset="cat-gundem"
  limit={5}
  vertical={false}
  containerBG="#ffffff"
  cardBg="#fff"
  textColor="#323232"
  fontSize="18"
  gallery={false}
  imgClassName="className"
  border="#ffa200"
  width={400}
  height={320}
  lineHeight="24"
/>
```
