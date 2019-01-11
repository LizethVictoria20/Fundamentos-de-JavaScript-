//1. Haz un programa que imprima los múltiplos de 3 hasta 100 con for, while y do-while.

var numero = 100
for(let i = 1; i < numero; i++){
  if(i % 3 === 0){
    console.log('Multiplo de 3')
  }
  else if(i % 5 === 0){
    console.log('Multiplo de 5')
  }
  else{
    console.log(i)
  }
}

//Construye y muestra por consola un "triángulo" de 7 líneas.
//Pide la edad y si es mayor de 18 años indica que ya puede conducir.

var edad = prompt('Introduce tu edad')
edad = 18
//var edad = 18
for(let i = 1; i < edad; i++){
  if(i < edad){
    console.log('No puedes conducir')
  }
  else if(i > edad){
    console.log('Puedes conducir')
  }
}

