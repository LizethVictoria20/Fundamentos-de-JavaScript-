let yo = {
  nombre: 'Yuliana',
  apellido: 'Victoria',
  edad: 20,
  peso: 40
}

console.log(`A principio de año ${yo.nombre} pesaba ${yo.peso}kg`)

const incremento = 0.2
const diasDelAno = 365

const engordar = persona => yo.peso += incremento
const adelgazar = persona => yo.peso -= incremento

for(let i = 1; i <= diasDelAno; i++){
  var random = Math.random()
}
if(random < 0.25){
  engordar(yo)
}
else if(random < 0.5){
  adelgazar(yo)
}
console.log(`A final del año ${yo.nombre} pesaba ${yo.peso.toFixed(2)}kg`) //.todixed sirve para tomas los dos numeros decimales