# Element and Block Component

Simple components that wraps any DOM elements. can be used as a h1,p,span or section...

**Block:** `<section>`, `<header>` `<div>` `<nav>` ...
**Element:** `<p>`, `<h1>` `<span>` `<li>` ...

### props

- **_`style`_**: object
  - Custom style
- **_`type`_**: string
  - DOM Element
- **_`className`_**: string
  - DOM Class name
- **_`id`_**: string
  - DOM ID

### Usage

```javascript
import Element from "@comp/block/";

<Element type="section" style={{fontSize:24+"px"}} clasName="customClass" id="customID">
 
</Element>
```
