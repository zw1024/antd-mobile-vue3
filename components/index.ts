import { App } from 'vue'
import { default as Button } from './button'
import { default as Icon } from './icon'
import { Flex, FlexItem } from './flex'
import { default as WingBlank } from './wingblank'
import { default as WhiteSpace } from './whitespace'
import { default as NavBar } from './navbar'

const components = [Button, Icon, Flex, FlexItem, WingBlank, WhiteSpace, NavBar]

const install = function (app: App) {
  components.forEach((component) => {
    app.use(component)
  })

  return app
}

/* istanbul ignore if */

export { install, Button, Icon, Flex, FlexItem, WingBlank, WhiteSpace, NavBar }

export default {
  install
}
