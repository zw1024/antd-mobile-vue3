import { App } from 'vue'
import { withInstall } from '../_utils/types'
import Icon from './icon.vue'

Icon.install = function(app: App) {
    app.component(Icon.name, Icon)
    return app;
}

export default withInstall<typeof Icon>(Icon)
