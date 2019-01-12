let personas = [
  liz = {
    nombre : 'liz',
    apellido: 'victoria',
    edad: 20,
    cantidadDeLibros: 20
  },


 juanito = {
    nombre: 'juanito',
    apellido: 'perez',
    edad: 18,
    cantidadDeLibros: 30
  },

 sacha = {
    nombre : 'sacha',
    apellido : 'lopez',
    edad: 38,
    cantidadDeLibros: 40
  },

  laura = {
    nombre : 'laura',
    apellido : 'ruiz',
    edad: 10,
    cantidadDeLibros: 50
  }
]

const reducer = (acum, persona) => acum + persona.cantidadDeLibros

const añosEnTotal = (acum, persona) => acum + persona.edad


var totalDeLibros = personas.reduce(reducer, 0) //.reduce() sirve para sumar los valores de una de las propiedades de los objetos, propiedad especifica.

var edades = personas.reduce(añosEnTotal, 0)



console.log(`En total todas las personas tienes ${totalDeLibros} libros`)
console.log(`Las edades de todos suman ${edades} de años`)