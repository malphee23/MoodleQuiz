import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/styles/main.css'

import App from './App.vue'
import router from './router/router.js'
import components from '@/components/UI'

const app = createApp(App)

components.forEach((components) => {
  app.component(components.name, components)
})

app.use(createPinia()).use(router)

app.mount('#app')
