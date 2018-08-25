<template>
<aside class="menu">
  <p class="menu-label">
    Deliktium
  </p>
  <div class="box"  id="feed" v-for="event in events" :key="event.id" >
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{event.tipo}}</strong> || <small>{{event.fecha}}</small> <small>31m</small>
          <br>
          {{event.descripcion}}
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
            <p>
              {{event.hora}}
            </p>
        </div>
      </nav>
    </div>
  </article>
</div>
</aside>  
</template>

<script>

export default {
  name: 'app-side',
  created(){
    this.fetchEvents();
  },
  data(){
    return {
      events: []
    }
  },
  methods: {
    fetchEvents(){      
                  fetch('http://localhost:1337/events')
                    .then(res => res.json())
                    .then(res => {
                        this.events = res;
                    })
            },
  }
}

</script>
<style>
.menu{
    padding: 2em;
}


</style>
