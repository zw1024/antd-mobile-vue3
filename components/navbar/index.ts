import { App } from 'vue'
import { withInstall } from '../_utils/types'
import NavBar from './navbar.vue'

NavBar.install = function (app: App) {
  app.component(NavBar.name, NavBar)
  return app
}

export default withInstall<typeof NavBar>(NavBar)
