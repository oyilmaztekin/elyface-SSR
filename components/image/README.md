# Image Component
A simple component that wraps <img> tag.

### props
- **_`src`_**: string
  - Specifies the URL of an image
- **_`alt`_**: string
  - Specifies an alternate text for an image
- **_`longdesc`_**: string
  - Specifies a URL to a detailed description of an image (`longdesc`)
- **_`width`_**: string
  - Specifies the width of an image
- **_`height`_**: string
  - Specifies the height of an image
- **_`responsive`_**: boolean
- **_`srcSet`_**: string
  - Specifies the URL of the image to use in different situations
- **_`sizes`_**: string
  - Specifies image sizes for different page layouts

 
### Usage

```javascript
import Image from "@comp/image/"

<Image
  src="http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg"
  longdesc="Enflasyon haberi"
  width="240"
  height=""
  responsive
/>
```
