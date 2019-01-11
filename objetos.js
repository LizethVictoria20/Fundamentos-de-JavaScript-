
let  mio = {
    nombre: 'liz',
    apellido: 'yuliana',
    edad: 20
  }

let yo = {
    nombre: 'Yuliana',
    apellido: 'Victoria',
    edad: 20
  }



function imprimirEnMayuscula(persona){
  var { nombre } = persona // Si se le pone el nombre a la variable el mismo nombre del atributo al que queremos acceder solo se pone el nombre de la variable entre llaves ya funcionara igual
  //Esto seria igual a - var nombre = persona.nombre
  console.log(nombre.toUpperCase())
}
imprimirEnMayuscula(yo)
imprimirEnMayuscula(mio)
imprimirEnMayuscula({ nombre: 'pepito'})



function imprimirNombreYEdad({nombre, edad}){
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)
}
imprimirNombreYEdad(yo)
imprimirNombreYEdad(mio)



function ensayo({nombre, apellido, saludo='hola' }){ //Se le puede agregar un nuevo atributo al objeto desde el parametro de la funcion
  console.log(`Mi nombre es ${nombre} mi apellido es ${apellido} y digo ${saludo}`)
}
ensayo(yo)



function cumpleanos(persona){
  return{
    ...persona, //Crea un nuevo array con el cambio que se hizo
    edad: persona.edad + 2,//Le suma uno a la edad que esta en el objeto
    nombre: 'liz' //Se puede reemplazar el valor del atributo del objeto
  }
}
