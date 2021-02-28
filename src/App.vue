<template>
  <h1>Corona-Virus</h1>
  <router-view></router-view>
  <router-link to="/">الرئيسية</router-link>
  | 
  <router-link to="/home">صفحة الاحصاءات </router-link>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
