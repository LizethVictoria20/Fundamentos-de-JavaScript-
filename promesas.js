//Callback es una funcion que se va a ejecutar en un futuro

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

const obtenerPersonaje = function(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function(data) {
      resolve(data);
    }).fail(() => {
      reject(id);
    });
  });
};

function onError(id) {
  console.log(`El personaje con el id ${id} no se pudo cargar`);
}

obtenerPersonaje(10)
  .then(personaje => {
    console.log(`Hola, soy ${personaje.name}`);
  })
  .catch(onError);
