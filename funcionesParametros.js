class Persona {
  constructor(name, last, altura) {
    this.name = name;
    this.last = last; //this hace referencia a una clase
    this.altura = altura;
  }
  saludar(fn) {
    let { name, last } = this;
    console.log(`Mi name is ${name} ${last}`);
    if (fn) {
      fn(name, last);
    }
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
  saludar(fn) {
    let { name, last } = this;
    console.log(`My name is ${name} ${last} y soy desarrolladora`);
    if (fn) {
      fn(name, last, true);
    }
  }
}

function responderSaludo(name, last, isDev) {
  console.log(`Buen día ${name} ${last}`);
  if (isDev) {
    console.log(`No sabia que eras desarroladora`);
  }
}
let miName = new Desarrollador("Liz", "Franco", 1.5);
let otherName = new Persona("Gordis", "Franco", 1.9);

miName.saludar(responderSaludo);
otherName.saludar();
