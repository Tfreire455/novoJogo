class quadrado {
    constructor(lado) {
            this.lado = lado;
            this.area = this.calcular();
        }
        //formula da Área do quadrado: area = lado²
    calcular = function() {
        return Math.pow(this.lado, 2);
    };
    mostrar = function() {
        console.log("Quadrado :", quadradoA.calcular(), "\n",
            `(${quadradoA.lado}^${quadradoA.lado}) = ${quadradoA.calcular()}`);
    };
};

class circulo {
    constructor(raio) {
            this.raio = raio;
            this.area = this.calcular();
        }
        //formula do Raio do circulo: Raio = constPI * raio²
    calcular = function() {
        let pi = Math.PI;
        let area = pi * Math.pow(this.raio, 2);
        return area.toFixed(2);
    };
    mostrar = function() {
        console.log("Circulo :", this.calcular(), "\n",
            `${Math.PI.toFixed(2)} * (${this.raio}^${this.raio}) é: ${
    this.area
  }`
        );
    }
};

class triangulo {
    constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.area = this.calcular();
        }
        // formula da Área do triangulo:   Area = (base * altura)/2
    calcular = function formulaTriangulo() {
        return (this.base * this.altura) / 2;
    };
    mostrar = function() {
        console.log("Triângulo: ", trianguloA.calcular(), "\n",
            `(${trianguloA.base} * ${trianguloA.altura}) / 2 = ${trianguloA.area}`);
    };
};

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
    mostrar = function() {
        console.log("Retângulo: ", retanguloA.calcular(), "\n",
            `${retanguloA.base} * ${retanguloA.altura} = ${retanguloA.area}`);
    };
};

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
    mostrar = function() {
        console.log("Trapézio: ", trapezioA.calcular(), "\n",
            `((${trapezioA.baseMaior} + ${trapezioA.baseMenor}) * ${trapezioA.altura}) / 2 = ${trapezioA.area}`);

    }
};

class losango {
    constructor(diagMaior, diagMenor) {
        this.diagMaior = diagMaior;
        this.diagMenor = diagMenor;
        this.area = this.calcular();
    };
    calcular = function formulaLosango() {
        let area = (this.diagMaior * this.diagMenor) / 2;
        return area;
    };
    mostrar = function() {
        console.log("Losango: ", losangoA.calcular(), "\n",
            `(${losangoA.diagMaior} * ${losangoA.diagMenor}) = ${losangoA.area}`);
    };
};

/*switch
/
/
/
/
/
/
/
/
/
*/

let quadradoA = new quadrado(29); //Circulo
quadradoA.mostrar()
pulaLinha()

let circuloA = new circulo(29); //Circulo
circuloA.mostrar()
pulaLinha()

let trianguloA = new triangulo(13, 152); //Triangulo
trianguloA.mostrar()
pulaLinha()

let retanguloA = new retangulo(23, 10); //Retangulo
retanguloA.mostrar()
pulaLinha()

let trapezioA = new trapezio(23, 10, 2); //Trapezio
trapezioA.mostrar()
pulaLinha()

let losangoA = new losango(23, 10); //Losango
losangoA.mostrar()
pulaLinha()






function pulaLinha() {
    console.log(
        "--------------------------------------------------------------------- \n"
    );
};