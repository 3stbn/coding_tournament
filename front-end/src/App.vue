<template>
  <div id="app">
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
*{
  margin: 0;
  padding: 0;
}
</style>
