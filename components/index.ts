import { App } from 'vue';
import { default as Button } from './button';
import { default as Icon } from './icon';
import { Flex, FlexItem } from './flex';

const components = [
  Button,
  Icon,
  Flex,
  FlexItem
];

const install = function(app: App) {
  components.forEach(component => {
    app.use(component);
  });

  return app;
};

/* istanbul ignore if */

export {
  install,
  Button,
  Icon,
  Flex
};

export default {
  install
};
