function Persona(name, last, altura) {
  this.name = name;
  this.last = last; //this hace referencia a una clase
  this.altura = altura;
}
Persona.prototype.saludar = function() {
  console.log(`Mi name is ${this.name} ${this.last}`);
};

let miName = new Persona("Liz", "Franco", 15);
miName.saludar();
