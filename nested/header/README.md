# Header Component
A simple component that wraps `sticky header` based on `react-stickynode` 

### react-stickynode

A sticky component wraps a sticky target and keeps the target in the viewport as the user scrolls the page. Most sticky components handle the case where the sticky target is shorter than the viewport, but not the case where a sticky target is taller than the viewport. The reason is that the expected behavior and implementation is much more complicated.

[official repository](https://github.com/yahoo/react-stickynode)

## Header
- **_`navElements`_**: object *Required
  - all navigation items are created by this JSON object
- **_`LogoImage`_**: string *Required
  - Specifies the URL of an image
- **_`sticky`_**: boolean
  - The switch to enable Sticky
- **_`top`_**: number/string
  - The offset from the top of window where the top of the element will be when sticky state is triggered (0 by default). If it is a selector to a target (via querySelector()), the offset will be the height of the target.
- **_`bottom`_**: number/string
  - The offset from the top of document which release state will be triggered when the bottom of the element reaches at. If it is a selector to a target (via querySelector()), the offset will be the bottom of the target.
- **_`zIndex`_**: number/string
  - z-index of the sticky.
- **_`activeClass`_**: string
  - Class name to be applied to the element when the sticky state is active (active by default).
- **_`releasedClass`_**: string
  Class name to be applied to the element when the sticky state is released (released by default).