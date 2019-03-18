function heredaDe(prototipoHijo, prototipoPadre) {
  let fn = function() {
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn();
    claseHija.prototype.contructor = prototipoHijo;
  };
}
//En JS no hay herencia solo existen los prototipos

function Persona(name, last, altura) {
  this.name = name;
  this.last = last; //this hace referencia a una clase
  this.altura = altura;
}
Persona.prototype.saludar = function() {
  console.log(`Mi name is ${this.name} ${this.last}`);
};

Persona.prototype.soyAlto = function() {
  this.altura > 1.8;
};

function Desarrollador(name, last) {
  //Herencia de prototype en clases
  this.name = name;
  this.last = last;
}
heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
  console.log(`My name is ${this.name} ${this.last} y soy desarrolladora`);
};

//let miName = new Persona("Liz", "Franco", 1.5);
//let otherName = new Persona("Gordis", "Franco", 1.9);
