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
          @click="toggleInfoWindow(m,index)"
          :key="index"
          ></gmap-marker>
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        {{infoContent}}
      </gmap-info-window>    
      </gmap-cluster>
      <gmap-marker
          :position = "geoMarker.position"
           :clickable="true" :draggable="true"
           @click="newInfoEvent()"
           v-show="status='new'"
      >
      </gmap-marker>

      </GmapMap>
      <div class="geolocation" >
      <img id="geo" @click="geolocation" src="https://image.flaticon.com/icons/png/512/60/60834.png" />
    </div>
    <app-newEvent v-show="isShown" @close="isShown = false" :location="this.geoMarker"></app-newEvent>
  </div>
</template>


<script>
import appNewEvent from './app-newEvent.vue'
export default {
  components:{
      appNewEvent
  },
  name: 'app-map',
  data(){
    return {
      isShown: true,
      status: 'inicial',
          center: {
            lat: -0.187670,
            lng: -78.485172
          },
          zoom: 15,
          markers: [{
            position: {
              lat: -0.201271,
              lng: -78.494922
            },
           infoText: 'Marker 1'
          }, {
            position: {
              lat: -0.197752,
              lng: -78.497508
            },
            infoText: 'Marker 2'
          }],
          infoContent: '',
          infoWindowPos: null,
          infoWinOpen: false,
          currentMidx: null,
          //optional: offset infowindow so it visually sits nicely on top of our marker
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
          geoMarker: {
            position:{
              lat: 0,
              lng: 0
            }             
          }
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
        this.newGeoMarker(position.coords.latitude, position.coords.longitude )
      });
    },
    newGeoMarker(latitude, longitude){
      this.geoMarker.position ={
          lat: latitude,
          lng: longitude        
      }
      this.status = 'nuew';
    },
    toggleInfoWindow (marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;
            }
          }
    },
    newInfoEvent(){

    }
  
}
    
</script>
<style>
#geo{
  z-index: 10;
  background: white;
  border-radius: 100%;
  position: absolute;
  top: 2%;
  left: 26%;
  width: 50px
}
#newEvent{
  z-index: 20;
}

</style>



