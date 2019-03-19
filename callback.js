//Callback es una funcion que se va a ejecutar en un futuro

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

const onPeopleResponse = function(person) {
  console.log(`Hola, my name is ${person.name}`);
};

const obtenerPersonaje = function(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, onPeopleResponse);
};

obtenerPersonaje(2);
