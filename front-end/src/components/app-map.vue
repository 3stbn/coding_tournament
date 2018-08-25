<template>
  <div class="hello">
   <GmapMap
  :center="center"
  :zoom="zoom"
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
      <div class="geolocation" >
      <img id="geo"  @click="geolocation" src="https://image.flaticon.com/icons/png/512/60/60834.png" />
    </div>
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
          zoom: 15,
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
  },
  methods:{
    geolocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.zoom = 19
      });
    }
  }
  
}
    
</script>
<style>
#geo{
  z-index: 10;
  background: white;
  border-radius: 100%;
  position: absolute;
  top: 0;
  width: 50px
}
</style>


