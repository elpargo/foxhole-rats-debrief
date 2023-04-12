import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import './style.css'

import '@formkit/themes/genesis'

createApp(App).use(plugin, defaultConfig).mount('#app')