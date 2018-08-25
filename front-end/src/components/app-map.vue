<template>
  <div class="hello">
   <GmapMap
  :center="center"
  :zoom="zoom"
  map-type-id="roadmap"
  style="width: 100%; min-height: 100vh"
>
  <gmap-cluster>
        <gmap-marker v-for="(e, index) in events"
          :position="e.lugar"
          :clickable="true" :draggable="true"
          @click="toggleInfoWindow(e,index)"
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
           v-show="status='new'"      >
      </gmap-marker>

      </GmapMap>
      <div class="geolocation" >
      <button @click="geolocation" id="geo" class="button is-primary">Nuevo evento </button>
    </div>
    <!-- Nuevo evento -->
      <div class="modal is-active" v-show="isShown">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Nuevo Evento</p>
            
            <button class="delete" aria-label="close" @click="isShown=false"></button>
          </header>
          <section class="modal-card-body">
            <p class="modal-card-title">El evento se guardará en tu ubicación actual</p>
            <br><br>
              <div class="columns">
                <div class="column">
                <div class="control">
                  <label > Tipo de Evento</label>
                          <div class="select">
                              
                              <select v-model="form.tipo">
              
                              <option value="asalto">Asalto</option>
                              <option value="robo">Robo</option>
                              <option value="vandalismo">Vandalismo</option>
                              </select>
                          </div>
                  </div>
                </div>
                <div class="column">
                    <div class="field">
                  <label class="label">Descripción</label>
                  <div class="control">
                      <input class="input" type="text" placeholder="Descripcion breve" v-model="form.descripcion">
                  </div>
              </div>
                </div>
                
              </div>
              
              <div class="columns">
    
               <div class="column">
                  <label > Fecha</label>
                  <input class="input" type="date" v-model="form.fecha">
                  </div>
                  <div class="column">
                  <label >Hora</label>
                  <input class="input" type="time" v-model="form.hora">
                  </div>         
                                
              </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary" @click="newEvent">Guardar</button>
            <button class="button" @click="isShown=false">Cancelar</button>
          </footer>
        </div>
      </div>
  </div>
</template>


<script>
import appNewEvent from './app-newEvent.vue'
export default {
  components:{
      appNewEvent
  },
  created(){
    this.fetchEvent();
  },
  name: 'app-map',
  data(){
    return {
      isShown: false,
      status: 'inicial',
      events: [],
      form: {
        tipo: '',
        descripcion: '',
        hora: '',
        fecha: '',
        lugar: ''
      },
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
      this.isShown = true;
      this.form.lugar = this.geoMarker.position;
      this.status = 'new';
    },
    toggleInfoWindow (event, idx) {
            this.infoWindowPos = event.lugar;
            this.infoContent = event.tipo + ' ' + event.fecha + '\n' + event.descripcion ;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;
            }
          },

          fetchEvent(){      
                  fetch('http://localhost:1337/events')
                    .then(res => res.json())
                    .then(res => {
                        this.events = res;
                    })
    },
    newEvent(){
                  fetch('http://localhost:1337/events', {
                    method: 'post',
                    body: JSON.stringify(this.form),
                    headers: {
                        'content-type': 'application/json'
                    }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.isShown = false
                        alert('Evento añadido');
                        this.fetchEvent();
                    })
                    .catch(err => console.log(err));
    }
    }
    
  
}
    
</script>
<style>
#geo{
  z-index: 10;
  position: absolute;
  top: 2%;
  left: 26%;
}
#newEvent{
  z-index: 20;
}
.modal-background {
  background: rgba(10, 10, 10, 0.21);
  left: 10%;
}
.modal-card{
  width: 340px;
}
</style>



