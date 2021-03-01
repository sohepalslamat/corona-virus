<template>
<div>
  <nav-bar />
  <router-view></router-view>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai&display=swap');
#app {
  font-family: 'Almarai', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  direction: rtl;
}
</style>
