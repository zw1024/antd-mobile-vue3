import { App } from 'vue'
import { withInstall } from '../_utils/types'
import Button from './button.vue'

Button.install = function(app: App) {
    app.component(Button.name, Button)
    return app;
}

export default withInstall<typeof Button>(Button)
