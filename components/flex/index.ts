import { App } from 'vue'
import { withInstall } from '../_utils/types'
import _Flex from './Flex'
import _FlexItem from './FlexItem'

_Flex.install = function (app: App) {
  app.component(_Flex.name, _Flex)
  return app
}
_FlexItem.install = function (app: App) {
  app.component(_FlexItem.name, _FlexItem)
  return app
}
const Flex = withInstall<typeof _Flex>(_Flex)
const FlexItem = withInstall<typeof _FlexItem>(_FlexItem)

export { Flex, FlexItem }
