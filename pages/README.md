### getInitialProps
`getInitialProps` receives a context object with the following properties:

### props
- **_`query`_**: object
  - query string section of URL parsed as an object
- **_`pathname`_**: string
  - path section of URL
- **_`asPath`_**: string
  - the actual path (including the query) shows in the browser
- **_`req`_**: object
  - HTTP request object (server only)
- **_`res`_**: object
  - HTTP response object (server only)
- **_`jsonPageRes`_**: object
  - Fetch Response object (client only)
- **_`err`_** - object
  - Error object if any error is encountered during the rendering