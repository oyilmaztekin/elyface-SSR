# Lists

A simple list component that wraps `links` created based on the responsed data

### props

- **_`registry`_**: object,
  - an object which contains all list items
- **_`dataset`_**: string,
  - determines the requested dataset
- **_`limit`_**: number,
  - determines limitation of the item. Slices array according to the given limit.
- **_`bg`_**: string
  - A custom background of wrapper
- **_`className`_**: string
  - custom classname that determines custom styles
- **_`linkClassName`_**: string
  - custom classname that determines type of wrapper
- **_`horizontal`_**: boolean,
  - determines direction of the columns horizontal or vertical

#### Acceptable classes for `linkClassName`

- **_`link-nav`_** : navigation link ✅
- **_`link-nav-btn`_** : for galeriler and video ✅
- **_`link-bread`_** : for breadcrumb ✅
- **_`link-tag`_** : for news ✅
- **_`link-title`_** ✅
- **_`carouselBtn`_** ⁉️
- **_`link-category-title`_** - clickable category titles ✅
- **_`link-footer-category`_** ✅
- **_`link-footer-list`_** - a list that stands above of footer ✅

### usage

```javascript
import Lists from "@comp/lists";

<Lists
  registry={registryObject}
  limit={5}
  bg="#ffffff"
  className="list-link seo-haberleri"
  linkClassName="link-footer-category"
  vertical={false}
/>;
```
