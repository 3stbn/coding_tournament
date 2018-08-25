<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <app-map msg="Delktium"/>
  </div>
</template>

<script>
import appMap from './components/app-map.vue'

export default {
  name: 'app',
  components: {
    appMap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
