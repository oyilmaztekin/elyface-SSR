# Context API

first initialize the context to create a consumer. The component needs to be invoke with the ContextHOC function as a parameter. 

```javascript
import ContextHoc from "@utils/context";
class ComponentName extends Component{

}

export default ContextHoc(ComponentName)
```

Invoke your component for subscribing with the ProviderHOC function

```javascript
import ProviderHOC from "@utils/provider";
import SubscribedComponent from "./component";

class ComponentName extends Component{

}

export default ProviderHOC(ComponentName)(SubscribedComponent)
```

####warning
If its need to subscribe multiple context its need to be implemented in ProviderHOC function.