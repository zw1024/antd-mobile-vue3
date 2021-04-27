import { App } from 'vue'
import { withInstall } from '../_utils/types'
import WingBlank from './wingblank.vue'

WingBlank.install = function(app: App) {
    app.component(WingBlank.name, WingBlank)
    return app;
}

export default withInstall<typeof WingBlank>(WingBlank)
