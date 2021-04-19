import { createApp } from 'vue'
import App from './App.vue'
import AntdMobileVue3 from '../components/index'
import router from './router/index'

createApp(App).use(AntdMobileVue3).use(router).mount('#app')
