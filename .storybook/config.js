import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "Common Components",
  goFullScreen: false,
  showLeftPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true
});

const req = require.context(
  "../stories",
  true,
  /.stories.js$/
);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
