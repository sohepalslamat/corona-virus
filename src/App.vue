<template>
<div>
  <nav-bar />
  <router-view style="min-height:800px;"></router-view>
  <footer>
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2021 Copyright:
      <a class="text-dark" href="https://www.youtube.com/channel/UCzfT1tSJXPkrtllnTSUIvZQ">Vuango</a>
    </div>
    <!-- Copyright -->
  </footer>
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
