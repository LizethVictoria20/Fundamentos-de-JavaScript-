//Callback es una funcion que se va a ejecutar en un futuro

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const lukeURL = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

const onPeopleResponse = function(person) {
  console.log(`Hola, soy ${person.name}`);
};
$.get(lukeURL, opts, onPeopleResponse);
