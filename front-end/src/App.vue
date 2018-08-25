<template>
  <div id="app">
    <div class="columns ">
      <div class="column is-one-quarter" id="side">
        <app-side></app-side>
      </div>
      <div class="column">
        <app-map msg="Delktium"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import appMap from './components/app-map.vue'
import appSide from './components/app-side.vue'

export default {
  name: 'app',
  components: {
    appMap, appSide
  }
}
</script>

<style>
 @import '../node_modules/bulma/css/bulma.css';

*{
  margin: 0;
  padding: 0;
}
</style>

