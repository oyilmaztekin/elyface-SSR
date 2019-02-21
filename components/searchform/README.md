# Search Form Component

Text Form component.

### Props

- **_`id`_**: string
  - Id of the both wrapper div and textfield element
- **_`name`_**: string \*Required
  - Name of the textfield element. Its important when you are using this component at form
- **_`value`_** : string
  - Value of the textfield component
- **_`onChange`_** : event (function)
  - Fires event when text change of the textfield
- **_`readOnly`_** : bool
  - A read-only input field cannot be modified (however, a user can tab to it, highlight it, and copy the text from it).
- **_`placeholder`_** : string
  - Placeholder text of the component
- **_`type`_** : string
  - Type of the textfield. Default value is text.
- **_`autoFocus`_** : bool
  - autoFocus of the textfield.
- **_`loading`_** : bool
  - Set true to the textfield loading state make visible
- **_`submitText`_** : string
  - Text of submit button

#### How to Use

```javascript
import SearchForm from "@comp/searchform/";
```

```javascript
<SearchForm
  id="unique_id"
  name="unique_name"
  value="Ara"
  type="search"
  submitText="🔎"
  onClick={this._yourSubmitMethod}
/>
```
