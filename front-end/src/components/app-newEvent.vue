<template>
    <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Nuevo Evento</p>
      <button class="delete" aria-label="close" @click="$emit('close')"></button>
    </header>
    <section class="modal-card-body">
        <div class="field">
            <label class="label">Descripción</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input" v-model="descripcion">
            </div>
        </div>
        <div class="columns">
        <div class="column">
            <div class="control">
                    <div class="select">
                        <select v-model="tipo">
                        <option>Tipo de evento</option>
                        <option value="asalto">Asalto</option>
                        <option value="robo">Robo</option>
                        <option value="vandalismo">Vandalismo</option>
                        </select>
                    </div>
            </div>
        </div>
        <div class="column">
            <div class="file">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Subir Imagen
                    </span>
                    </span>
                </label>
            </div> 
        </div>
        {{location.position}}
       
                           
        </div>
        <div class="columns">
             <div class="column">
            <label > Fecha</label>
            <input class="input" type="date" v-model="fecha">
            </div>
            <div class="column">
            <label >Hora</label>
            <input class="input" type="time" v-model="hora">
            </div>
        </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary">Guardar</button>
      <button class="button" @click="$emit('close')">Cancelar</button>
    </footer>
  </div>
</div>
</template>
<script>
export default {
  name: 'app-newEvent',
  props: {
    location: Object
  },
  data(){
      return{
          lugar: {},
          descripcion: '',
          fecha: '',
          tipo: '',
          hora: '',
      }
  },
  methods: {
      submit(){
          this.axios.post('localhost/').then((response) => {
            console.log(response.data)
            })
      }
  },

}
</script>
