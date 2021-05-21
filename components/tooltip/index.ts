import { App } from 'vue'
import { withInstall } from '../_utils/types'
import Tooltip from './tooltip.vue'

Tooltip.install = function (app: App) {
  app.component(Tooltip.name, Tooltip)
  return app
}

export default withInstall<typeof Tooltip>(Tooltip)
