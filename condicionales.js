 //Estructuras de control

 let yo = {
  nombre: 'Yuliana',
  apellido: 'Victoria',
  edad: 20,
  cocinera: true,
  cantante: false
}


function persona(persona){
  console.log(`${yo.nombre} es:`)
  if(yo.cocinera){
    console.log(`Es cocinera`)
  }
  else{
    console.log(`No es cocinera`)
  }

   if(yo.cantante){
    console.log(`cantante`)
  }
  else{
    console.log(`No es cantante`)
  }
}
persona(yo)


function mayorDeEdad(persona){
  if(yo.edad >= 18){
    console.log(`${yo.nombre} es mayor de edad`)
  }
  else{
    console.log(`${yo.nombre} no es mayor de edad`)
  }
}
mayorDeEdad(yo)