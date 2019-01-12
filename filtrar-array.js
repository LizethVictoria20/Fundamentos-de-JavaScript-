let personas = [
 liz = {
    nombre : 'liz',
    apellido: 'victoria',
    edad: 20,
    estatura: 1.34
  },

 juanito = {
    nombre: 'juanito',
    apellido: 'perez',
    edad: 18,
    estatura: 1.59
  },

 sacha = {
    nombre : 'sacha',
    apellido : 'lopez',
    edad: 12,
    estatura: 1.29
  },

 laura = {
    nombre : 'laura',
    apellido : 'ruiz',
    edad: 10,
    estatura: 1.80,
  }
]


const mayorDeEdad = persona => persona.edad >= 18
const menoresDeEdad = persona => persona.edad < 18

const pasarAlturaACms = persona => {
  return {
    ...persona,
    estatura: persona.estatura = persona.estatura * 100
  }
}


var adultos = personas.filter(mayorDeEdad)
var menores = personas.filter(menoresDeEdad)

var personasCms = personas.map(pasarAlturaACms) //.map() recibe una funcion y crea un nuevo array con los resultados del codigo que esta ejecutando la funcion

console.log(adultos)
console.log(menores)
console.log(personasCms)
