# Link Button Component

`passHref` must be passed by Link component.

### Props

- **_`className`_**: string
  - custom className
- **_`href`_**: string
  - url - Specifies the URL of the page the link goes to
- **_`text`_**: string
  - a text of link represented between open and closed `<a>{this.props.text}<a/>`
- **_`title`_**: string
  - Defines the title of a link, which appears to the user as a tooltip.
- **_`target`_**: string
  - Specifies where to open the linked document

#### Acceptable classes for `className`
- **_`link-nav`_** : navigation link ✅
- **_`link-nav-btn`_** : for galeriler and video ✅
- **_`link-bread`_** : for breadcrumb ✅
- **_`link-tag`_** : for news ✅
- **_`link-title`_** ✅
- **_`carouselBtn`_** ⁉️
- **_`link-category-title`_** - clickable category titles ✅
- **_`link-footer-category`_** ✅
- **_`link-footer-list`_** - a list that stands above of footer ✅

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
    className="link-bread"
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
