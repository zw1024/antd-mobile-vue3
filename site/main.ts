import { createApp } from 'vue'
import App from './App.vue'
import '../components/style'
import AntdMobileVue3 from '../components/index'
import router from './router/index'
import './assets/style/common.less'

createApp(App).use(AntdMobileVue3).use(router).mount('#app')
