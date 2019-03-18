function Persona(name, last, altura) {
  this.name = name;
  this.last = last; //this hace referencia a una clase
  this.altura = altura;
}
Persona.prototype.saludar = function() {
  console.log(`Mi name is ${this.name} ${this.last}`);
};

Persona.prototype.soyAlto = function() {
  return this.altura > 1.8;
};

let miName = new Persona("Liz", "Franco", 1.5);
let otherName = new Persona("Gordis", "Franco", 1.9);

//Alcance del this cuando se usan arrow function
