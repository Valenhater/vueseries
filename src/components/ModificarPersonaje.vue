<template>
  <div>
    <h1>Modificar Personaje</h1>
    <form
      style="width: 500px; margin: 0 auto"
      v-on:submit.prevent="updatePersonaje()"
    >
      <label class="form-label">Serie:</label>
      <select class="form-control" v-model="idSerie">
        <option v-for="serie in series" :value="serie.idSerie" :key="serie">
          {{ serie.nombre }}
        </option>
      </select>
      <label class="form-label">Personaje:</label>
      <select class="form-control" v-model="idPersonaje">
        <option
          v-for="personaje in personajes"
          :value="personaje.idPersonaje"
          :key="personaje"
        >
          {{ personaje.nombre }}
        </option>
      </select>
      <br />
      <button class="btn btn-success">Modificar Personaje</button>
    </form>
  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
var servicio = new ServiceSeries();
export default {
  name: "ModificarPersonaje",
  methods: {
    updatePersonaje() {
      servicio
        .updatePersonaje(this.idPersonaje, this.idSerie)
        .then((result) => {
          console.log(result);
          this.$router.push("/");
        });
    },
  },
  mounted() {
    servicio.getSeries().then((result) => {
      this.series = result;
    });
    servicio.getPersonajes().then((result) => {
      this.personajes = result;
    });
  },
  data() {
    return {
      series: [],
      personajes: [],
      idPersonaje: null,
      idSerie: null,
    };
  },
};
</script>