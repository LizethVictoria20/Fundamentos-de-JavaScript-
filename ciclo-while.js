let yo = {
  nombre: 'Yuliana',
  apellido: 'Victoria',
  edad: 20,
  peso: 40
}

console.log(`A principio de año ${yo.nombre} pesaba ${yo.peso}kg`)

const incremento = 0.3
const diasDelAno = 365

const engordar = persona => yo.peso += incremento
const adelgazar = persona => yo.peso -= incremento
const comeMucho = () => Math.random() < 0.3
const hacerDeporte = () => Math.random() < 0.4

const meta = yo.peso - 3
var dias = 0

while(yo.peso > meta){
  if(comeMucho()){
    engordar(yo)
  }
  if(hacerDeporte()){
    adelgazar(yo)
  }
  dias = dias + 1
}
console.log(`Pasaron ${dias} días hasta que ${yo.nombre} bajo 3 kg`)


