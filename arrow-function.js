let yo = {
  nombre: 'Yuliana',
  apellido: 'Victoria',
  edad: 20,
  cocinera: true,
  cantante: false
}


function mayorDeEdad(persona){
  return yo.edad >= mayoriaDeEdad
}

//Esta funcion en arrow function quedaria
const mayoriaDeEdad = 18
const mayorDeEdad = (persona) => { //Cuando se tiene un solo parametro en la funcion se pueden obviar los parentesis del parametro
  return yo.edad >= mayoriaDeEdad
}



const mayorDeEdad = persona => { //Si la funcuion solo hace retornar algo se pueden quitar las llaves y el return he implicitamente se va a retornar el valor de la comparacion
  return yo.edad >= mayoriaDeEdad
}


const mayorDeEdad = ({ edad }) => edad >= mayoriaDeEdad //Aca se esta usando destructing para para acceder directamente al valor del atributo del objeto


const calculandoEdad = persona => {
  if(mayorDeEdad(persona)){ //La funcion anterios se usa aca para ver si la condicion de cumple o no
    console.log(`${yo.nombre} es mayor de edad`)
  }
  else{
    console.log(`${yo.nombre} no es mayor de edad`)
  }
}
calculandoEdad(yo)



const permitirAcceso = ({edad}) => {
  if(!mayorDeEdad(edad) ){
    console.log('Acceso denegado')
  }
}
permitirAcceso(yo)
