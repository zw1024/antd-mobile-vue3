import { App } from 'vue'
import { withInstall } from '../_utils/types'
import WhiteSpace from './whitespace.vue'

WhiteSpace.install = function(app: App) {
    app.component(WhiteSpace.name, WhiteSpace)
    return app;
}

export default withInstall<typeof WhiteSpace>(WhiteSpace)
