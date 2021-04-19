import { App } from 'vue';
import { default as Button } from './button';
import { default as Icon } from './icon';

const components = [
  Button,
  Icon
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
  Icon
};

export default {
  install
};
