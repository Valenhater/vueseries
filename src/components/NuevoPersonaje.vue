<template>
  <div>
    <h1>Nuevo Personaje</h1>
    <form
      v-on:submit.prevent="insertarPersonaje()"
      style="width: 500px; margin: 0 auto"
    >
      <input
        type="hidden"
        class="form-control"
        v-model="personaje.idPersonaje"
      />
      <label class="form-label">Nombre</label>
      <input type="text" class="form-control" v-model="personaje.nombre" />
      <label class="form-label">Imagen</label>
      <input type="text" class="form-control" v-model="personaje.imagen" />
      <label class="form-label">Serie</label>
      <select class="form-control" v-model="personaje.idSerie">
        <option v-for="serie in series" :value="serie.idSerie" :key="serie">
          {{ serie.nombre }}
        </option>
      </select>
      <button class="btn btn-success">Crear Personaje</button>
    </form>
  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
var servicio = new ServiceSeries();
import Global from "./../Global";
import axios from "axios";

export default {
  name: "NuevoPersonaje",
  //Aqui en data metemos los datos necesarios para un nuevo personaje que es el que se recibe servicios
  data() {
    return {
      series: [],
      //Al crear este personaje le introducimos los datos del v-model de los inputs arriba
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
    };
  },
  mounted() {
    //Peticion para mostrar las series en el select del html
    var request = "api/series";
    var url = Global.urlApiSeries + request;

    axios.get(url).then((response) => {
      this.series = response.data;
    });
  },
  methods: {
    insertarPersonaje() {
      //Le pasamos al servicio el personaje nuevo creado en data con los input
      servicio.insertPersonaje(this.personaje).then((result) => {
        console.log(result);
        //Con este comando volvemos al home
        this.$router.push("/");
      });
    },
  },
};
</script>