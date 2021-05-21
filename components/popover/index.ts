import { App } from 'vue'
import { withInstall } from '../_utils/types'
import _Popover from './popover.vue'
import _Item from './item.vue'

_Popover.install = function (app: App) {
  app.component(_Popover.name, _Popover)
  return app
}
_Item.install = function (app: App) {
  app.component(_Item.name, _Item)
  return app
}
const Popover = withInstall<typeof _Popover>(_Popover)
const PopoverItem = withInstall<typeof _Item>(_Item)

export { Popover, PopoverItem }
