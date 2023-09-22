import { setupDesign } from '@/design/index'
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

function bootstrap() {
  const app = createApp(App)

  setupDesign()

  // 配置 store
  setupStore(app)

  // 配置路由
  setupRouter(app)

  app.mount('#app')
}

bootstrap()
