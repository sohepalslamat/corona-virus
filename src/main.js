import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import CheckSelf from './components/CheckSelf.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component: HomePage, name: 'home-page'},
        {path:'/check-self', component: CheckSelf, name: 'check-self'}
    ],

})

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
    app.mount('#app')
  })

