function Persona(name, last, altura) {
  this.name = name;
  this.last = last; //this hace referencia a una clase
  this.altura = altura;
}
Persona.prototype.saludar = () => {
  console.log(`Mi name is ${this.name} ${this.last}`);
};

Persona.prototype.soyAlto = () => {
  if (this.altura <= 1.8) {
    console.log("No eres alto");
  } else {
    console.log("Eres alto");
  }
};

let miName = new Persona("Liz", "Franco", 1.5);
let otherName = new Persona("Gordis", "Franco", 1.9);
miName.saludar();
miName.soyAlto();
otherName.saludar();
otherName.soyAlto();
