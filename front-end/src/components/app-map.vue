<template>
  <div class="hello">
   <GmapMap
  :center="center"
  :zoom="15"
  map-type-id="roadmap"
  style="width: 100%; min-height: 100vh"
>
  <gmap-cluster>
        <gmap-marker v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true" :draggable="true"
          @click="center=m.position"
          :key="index"
          ></gmap-marker>
      </gmap-cluster>

</GmapMap>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
          center: {
            lat: -0.187670,
            lng: -78.485172
          },
          markers: [{
            position: {
              lat: -0.201271,
              lng: -78.494922
            }
          }, {
            position: {
              lat: -0.197752,
              lng: -78.497508
            }
          }]
        }
  }
  
}
    
</script>

