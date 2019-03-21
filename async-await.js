//Ultima manera de realizar tareas asincronas *Es la manera mas sencilla y clara de hacer tareas asincronas
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

async function obtenerPersonajes() {
  let ids = [1, 2, 3, 4, 5, 6, 7, 8];
  let promesas = ids.map(id => obtenerPersonaje(id));
  try {
    let characters = await Promise.all(promesas);
    console.log(characters);
  } catch (id) {
    onError(id);
  }
}
obtenerPersonajes();
