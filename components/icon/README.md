# Icon Component
A simple component that wraps <FontAwesomeIcon> component.

### props
- **_`icon`_**: string
  - Specifies the icon
- **_`className`_**: string
  - custom classname

 
### Usage

```javascript
import Icon from "@comp/icon/"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<Icon
  icon={faCoffee}
  size="24"
/>
```
