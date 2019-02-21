# Logo Component
A simple component that wraps <Image> component.

### props
- **_`src`_**: string
  - Specifies the URL of an image
- **_`alt`_**: string
  - Specifies an alternate text for an image
- **_`desc`_**: string
  - Specifies a URL to a detailed description of an image (`longdesc`)
- **_`width`_**: string
  - Specifies the width of an image
- **_`height`_**: string
  - Specifies the height of an image
 
### Usage

```javascript
import Logo from "@comp/logo/"

<Logo
  src="http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg"
  desc="Enflasyon haberi"
  width="240"
  height=""
/>
```