import {createRouter, createWebHistory} from 'vue-router';
import HomeSeries from './components/HomeSeries.vue';
import SerieComponent from './components/SerieComponent.vue';
import PersonajeSeries from './components/PersonajeSeries.vue';
import NuevoPersonaje from './components/NuevoPersonaje.vue';
import ModificarPersonaje from './components/ModificarPersonaje.vue';


const myRoutes = [
  {
    path: '/',
    component: HomeSeries,
  },
  {
    path: '/serie/:id',
    component: SerieComponent,
  },
  {
    path: '/personajes/:id', //Añadimos la id paea sacarla por params despues, el nombre que definimos aqui debe ser el mismo que en paramas
    component: PersonajeSeries,
  },
  {
    path: '/nuevo',
    component: NuevoPersonaje,
  },
  {
    path: '/modificar',
    component: ModificarPersonaje,
  },
];

const router = createRouter ({
  history: createWebHistory (),
  routes: myRoutes,
});

export default router;
