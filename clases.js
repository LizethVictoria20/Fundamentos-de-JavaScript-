class Persona {
  constructor(name, last, altura) {
    this.name = name;
    this.last = last; //this hace referencia a una clase
    this.altura = altura;
  }
  saludar() {
    console.log(`Mi name is ${this.name} ${this.last}`);
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  //Asi se hereda de otra clase
  constructor(name, last, altura) {
    super(name, last, altura);
  }
  saludar() {
    console.log(`My name is ${this.name} ${this.last} y soy desarrolladora`);
  }
}

//let miName = new Persona("Liz", "Franco", 1.5);
//let otherName = new Persona("Gordis", "Franco", 1.9);
