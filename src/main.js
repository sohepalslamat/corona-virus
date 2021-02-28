import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/home', component: HomePage, name: 'home-page'},
    ],

})

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
    app.mount('#app')
  })

