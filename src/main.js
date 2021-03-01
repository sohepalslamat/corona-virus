import { createApp } from 'vue'
import axios from 'axios'
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
const api = axios.create({
    baseURL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/',
    headers: {
        "x-rapidapi-key": "da7185aeb9msh0e13b327cf70bc8p10a2abjsn259d1f854d02",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com"
        }
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.$api=api
router.isReady().then(() => {
    app.mount('#app')
  })

