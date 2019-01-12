let personas = [
  liz = {
    nombre : 'liz',
    apellido: 'victoria',
    edad: 20,
  },


 juanito = {
    nombre: 'juanito',
    apellido: 'perez',
    edad: 18,
  },

 sacha = {
    nombre : 'sacha',
    apellido : 'lopez',
    edad: 38,
  }
  laura = {
    nombre : 'laura',
    apellido : 'ruiz',
    edad: 10,
  }
]

for(let i = 0; i < personas.length; i++){
 nombres = personas[i]
 console.log(`${nombres.nombre} tiene ${nombres.edad}`)
}



//Array dentro de otro array

var myArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];
var newArray = []
for(let i = 0; i < myArray.length; i++){
  for(let j = 0; j < myArray[i].length; j++){
    var resultado = myArray[i][j]
    console.log(resultado)
  }
}
