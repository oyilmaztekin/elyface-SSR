# Link Button Component

`passHref` must be passed by Link component.

### Props

- **_`type`_**: string
  - type property
- **_`href`_**: string
  - url - Specifies the URL of the page the link goes to
- **_`text`_**: string
  - a text of link represented between open and closed `<a>{this.props.text}<a/>`
- **_`title`_**: string
  - Defines the title of a link, which appears to the user as a tooltip.
- **_`target`_**: string
  - Specifies where to open the linked document

#### Acceptable props for `type`

- **_`nav`_** : navigation link ✅
- **_`navBtn`_** : for galeriler and video ✅
- **_`bread`_** : for breadcrumb ✅
- **_`tag`_** : for news ✅
- **_`cardTitle`_** ✅
- **_`carouselBtn`_** ⁉️
- **_`catTitle`_** - clickable category titles ✅
- **_`footerCategory`_** ✅
- **_`footerList`_** - a list that stands above of footer ✅

### How to use

```javascript
import LinkButton from "@comp/linkbutton/";
import Image from "@comp/image/";
```

```javascript
<Link
  href="#"
  passHref
>
  <LinkButton
    text="Sample Button"
    type={"navBtn")
  >
    <span>📷 Sample Button</span>
  </LinkButton>
</Link>
```

#### With Image

```javascript
<Link href="#" passHref>
  <LinkButton
    text="Sample Button"
    type="footerList"
  >
    <Image
      src="http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg"
      desc="Enflasyon haberi"
      width="240"
      height=""
    />
  </LinkButton>
</Link>
```
