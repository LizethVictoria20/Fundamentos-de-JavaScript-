//Callback es una funcion que se va a ejecutar en un futuro

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

const obtenerPersonaje = function(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, callback).fail(() => {
    console.log(`No se encontro el personaje con el id ${id}`);
  });
};

obtenerPersonaje(1, function(personaje) {
  console.log(`Hola, soy ${personaje.name}`);

  obtenerPersonaje(2, function(personaje) {
    console.log(`Hola, soy ${personaje.name}`);

    obtenerPersonaje(3, function(personaje) {
      console.log(`Hola, soy ${personaje.name}`);

      obtenerPersonaje(4, function(personaje) {
        console.log(`Hola, soy ${personaje.name}`);
      });
    });
  });
});
