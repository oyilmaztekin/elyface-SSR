# Article Component
An Article component that wraps <article> and its dom elements.

### props
- **_`cat`_**: string
  - Category of the article that belongs to ...
- **_`catUrl`_**: string
  - Url of the category of the article that belongs to ...
- **_`title`_**: string
  - title of the Article
- **_`cover`_**: string
  - cover image of the article
- **_`desc`_**: string
  - Description of the article
- **_`content`_**: string
  - Content of the article
- **_`className`_**: string
  - custom classname of the article
- **_`adSlot`_**: node
  - slot name of the **ad** will be used by AdSlot `react-dfp` 

 
### Usage

```javascript
import Image from "@comp/image/"

<Article
  cat="gundem"
  title="Haber metni"
  cover="cover of the article"
  adSlot="ara_ad"
  desc="Description of the article"
  content="lorem ipsum dolor sit amet"
  classname="articleClass"
/>
```
