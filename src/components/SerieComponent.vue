<template>
  <div>
    <div class="card" style="width: 48rem" >
      <img class="card-img-top" :src="serie.imagen" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ serie.nombre }}</h5>
        <p class="card-text">IMDB: {{ serie.puntuacion }}</p>
        <p class="card-text">Año: {{ serie.anyo }}</p>
         <router-link class="btn btn-success" :to="'/personajes/' + serie.idSerie">Personajes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
var servicio = new ServiceSeries();

export default {
  name: "SerieComponent",
  mounted() {
    var id = this.$route.params.id;
    servicio.getSerie(id).then((result) => {
      this.serie = result;
    });
  },

  //El watch y el metodo fetchData es para notar cambios en el id de la url y actualizarlo si cambia
  watch: {
    '$route.params.id': 'fetchData'
  },
  methods: {
    fetchData() {
      var id = this.$route.params.id;
      servicio.getSerie(id).then((result) => {
        this.serie = result;
      });
    }
  },
  //Con serie cogemos el array del valor de la serie
  data() {
    return {
      serie: [],
    };
  },
};
</script>