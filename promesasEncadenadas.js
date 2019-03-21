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

let ids = [1, 2, 3, 4, 5, 6, 7, 8];
let promesas = ids.map(id => obtenerPersonaje(id));
Promise.all(promesas)
  .then(characters => console.log(characters))
  .catch(onError);

/*
obtenerPersonaje(1) //Haciendo el request en serie
  .then(personaje => {
    console.log(`Hola, soy ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then(personaje => {
    console.log(`Hola, soy ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then(personaje => {
    console.log(`Hola, soy ${personaje.name}`);
    return obtenerPersonaje(4);
  })
  .catch(onError);
*/
