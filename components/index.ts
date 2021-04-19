import { App } from 'vue';
import { default as Button } from './button';

const components = [
  Button
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
};

export default {
  install
};
