## Card Manager Template

a template component that wraps card component. Takes an array to create cards as its number of the items of the array.  

### props
- **_`data`_**: array,
  - items of the array
- **_`limit`_**: number,
  - determines limitation of the item. Slices array according to the given limit.  
- **_`flex`_**: string,
  - horizontal or vertical
- **_`bg`_**: string
  - A custom background hex color
- **_`gallery`_** : bool
  - for gallery icon
- **_`textColor`_**: string
  - custom hex color of Card.Title
- **_`fontSize`_**: string
  - If you want to override font size that come from `type` prop use this