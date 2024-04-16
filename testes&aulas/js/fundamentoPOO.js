// module.export = { FormaGeometrica };

class FormaGeometrica {
    constructor() {}

    static quadrado(lado) {
        const area = lado ** 2;
        console.log(`Quadrado: Lado = ${lado}, Área = ${area}`);
    }

    static circulo(raio) {
        const area = Math.PI * raio ** 2;
        console.log(`Círculo: Raio = ${raio}, Área = ${area.toFixed(2)}`);
    }

}

FormaGeometrica.quadrado(29);
FormaGeometrica.circulo(29);
FormaGeometrica.triangulo(13, 152);
FormaGeometrica.retangulo(23, 10);
FormaGeometrica.trapezio(23, 10, 2);
FormaGeometrica.losango(23, 10);