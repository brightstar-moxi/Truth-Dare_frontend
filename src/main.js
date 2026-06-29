import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// how can we make use of the route to ablue to recongnise reciever link: router.post('/api/inbox/:username', 'InboxesController.store').use(middleware.auth())