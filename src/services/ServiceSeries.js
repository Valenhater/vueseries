import Global from './../Global';
import axios from 'axios';

export default class ServiceSeries {
  getSeries () {
    return new Promise (function (resolve) {
      var request = 'api/series';
      var url = Global.urlApiSeries + request;
      var series = [];

      axios.get (url).then (response => {
        series = response.data;
        resolve (series);
      });
    });
  }
  getPersonajes () {
    return new Promise (function (resolve) {
      var request = '/api/Personajes';
      var url = Global.urlApiSeries + request;
      var personajes = [];

      axios.get (url).then (response => {
        personajes = response.data;
        resolve (personajes);
      });
    });
  }
  getSerie (id) {
    return new Promise (function (resolve) {
      var request = 'api/series/' + id;
      var url = Global.urlApiSeries + request;
      var serie = [];
      axios.get (url).then (response => {
        serie = response.data;
        resolve (serie);
      });
    });
  }
  getPersonaje (id) {
    return new Promise (function (resolve) {
      var request = 'api/Series/PersonajesSerie/' + id;
      var url = Global.urlApiSeries + request;
      var personajes = [];
      axios.get (url).then (response => {
        personajes = response.data;
        resolve (personajes);
      });
    });
  }
  insertPersonaje (personaje) {
    //SI DA ERROR CUIDADO CON LAS IMAGENES QUE PONES
    return new Promise (function (resolve) {
      var request = 'api/personajes/';
      var url = Global.urlApiSeries + request;

      axios.post (url, personaje).then (response => {
        resolve (response);
      });
    });
  }
  updatePersonaje (idpersonaje, idserie) {
    return new Promise (function (resolve) {
      var request = 'api/personajes/' + idpersonaje + '/' + idserie;
      var url = Global.urlApiSeries + request;

      axios.put (url).then (response => {
        resolve (response);
      });
    });
  }
}
