class quadrado {
  constructor(lado) {
    this.lado = lado;
    this.area = this.calcular();
  }
  //formula da Área do quadrado: area = lado²
  calcular = function formulaQuadrado() {
    return Math.pow(this.lado, 2);
  };
}

class circulo {
  constructor(raio) {
    this.raio = raio;
    this.area = this.calcular();
  }
  //formula do Raio do circulo: Raio = constPI * raio²
  calcular = function formulaCirculo() {
    let pi = Math.PI;
    let area = pi * Math.pow(this.raio, 2);
    return area.toFixed(2);
  };
}

class triangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
    this.area = this.calcular();
  }
  // formula da Área do triangulo:   Area = (base * altura)/2
  calcular = function formulaTriangulo() {
    let area = (this.base * this.altura) / 2;
    return area;
  };
}

class retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
    this.area = this.calcular();
  }
  calcular = function formulaRetangulo() {
    let area = this.base * this.altura;
    return area;
  };
}

class trapezio {
  constructor(baseMaior, baseMenor, altura) {
    this.baseMaior = baseMaior;
    this.baseMenor = baseMenor;
    this.altura = altura;
    this.area = this.calcular();
  }
  calcular = function formulaTrapezio() {
    let area = ((this.baseMaior + this.baseMenor) * this.altura) / 2;
    return area;
  };
}

let quadradoA = new quadrado(8); //Quadrado
let circuloA = new circulo(29); //Circulo
let trianguloA = new triangulo(13, 152); //Triangulo
let retanguloA = new retangulo(23, 10); //Triangulo
let trapezioA = new trapezio(23, 10, 2); //Triangulo

console.log("Circulo :", circuloA.calcular());
console.log(
  `${Math.PI.toFixed(2)} * (${circuloA.raio}^${circuloA.raio}) é: ${
    circuloA.area
  }`
);
pulaLinha();
console.log("Quadrado :", quadradoA.calcular());
console.log(`(${quadradoA.lado}^${quadradoA.lado}) = ${quadradoA.calcular()}`);

pulaLinha();
console.log("Triângulo: ", trianguloA.calcular());
console.log(
  `(${trianguloA.base} * ${trianguloA.altura}) / 2 = ${trianguloA.area}`
);
pulaLinha();
console.log("Retângulo: ", retanguloA.calcular());
console.log(`${retanguloA.base} * ${retanguloA.altura} = ${retanguloA.area}`);
pulaLinha();
console.log("Trapézio: ", trapezioA.calcular());
console.log(
  `((${trapezioA.baseMaior} + ${trapezioA.baseMenor}) * ${trapezioA.altura}) / 2 = ${trapezioA.area}`
);
pulaLinha();

function pulaLinha() {
  console.log(
    "--------------------------------------------------------------------- \n"
  );
}
