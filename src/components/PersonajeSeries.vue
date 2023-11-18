<template>
    <div>
        <h1>Serie especifica</h1>  
                                                        <!-- El route params id lo usamos para que pille el id de la serie y redireccione a la serie que tiene el missmo id !-->
        <router-link class="btn btn-danger" :to="'/serie/' + $route.params.id">Volver</router-link>
        <table class="table table-dark table-bordered" style="width:70%" align="center">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Personaje</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="personaje in personajes" :key="personaje">
                    <td><img :src="personaje.imagen" alt="" style="width:250px;height:250px"></td>
                    <td>{{personaje.nombre}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceSeries from '@/services/ServiceSeries';

var servicio = new ServiceSeries;
export default {
    name:'PersonajeSeries',
    mounted(){
        //Cogemos el id de los parametros de la url con el nombre que marcamos en Router.js
        var id = this.$route.params.id;
        servicio.getPersonaje(id).then((result) => {
            this.personajes = result
        })
    },
    data(){
        return{
            personajes:[] //Creamos el array que rellenamos arriba con results
        }
    }
}
</script>