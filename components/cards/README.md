## Cards

a template component that wraps card component and only works in server-side. Takes dataset to fetch JSON from the server and creates card items based on the returned array.

### props

- **_`dataset`_**: string,
  - endpoint that will be requested.
- **_`registry`_**: Object,
  - represents returned object from the server
- **_`limit`_**: number,
  - determines limitation of the item. Slices array according to the given limit.
- **_`width`_**: number,
- **_`height`_**: number,
- **_`lineHeight`_**: number,
- **_`vertical`_**: boolean,
  - determines direction of the columns horizontal or vertical
- **_`bg`_**: string
  - background color of the Card Component
- **_`border`_**: string
  - represents color of the divider item
- **_`gallery`_** : bool
  - for gallery icon
- **_`textColor`_**: string
  - custom hex color of Card.Title
- **_`fontSize`_**: string
  - If you want to override font size that come from `type` prop use this

### usage

```javascript
import Cards from "@nest/cards/";

<Cards
  dataset={"cat-gundem"}
  className="section-cards__sag-manset-yani"
  registry={arrayItem}
  vertical={true}
  width={303}
  height={196}
  bg="#ffa200"
  textColor="#323232"
  fontSize="16"
  gallery={false}
  imgClassName="img-slider-width"
  lineHeight="16"
/>;
```
