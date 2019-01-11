
 let yo = {
  nombre: 'Yuliana',
  apellido: 'Victoria',
  edad: 20,
  cocinera: true,
  cantante: false
}


/*function mayorDeEdad(persona){
  if(yo.edad >= 18){
    console.log(`${yo.nombre} es mayor de edad`)
  }
  else{
    console.log(`${yo.nombre} no es mayor de edad`)
  }
}
mayorDeEdad(yo)*/


const mayoriaDeEdad = 18

//Funciones que retornan un valor
function mayorDeEdad(persona){  //Esta funcion define la condicion
  return yo.edad >= mayoriaDeEdad
}


function calculandoEdad(persona){
  if(mayorDeEdad(persona)){ //La funcion anterios se usa aca para ver si la condicion de cumple o no
    console.log(`${yo.nombre} es mayor de edad`)
  }
  else{
    console.log(`${yo.nombre} no es mayor de edad`)
  }
}
calculandoEdad(yo)