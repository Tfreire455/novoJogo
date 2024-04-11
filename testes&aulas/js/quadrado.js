class quadrado {
    constructor(lado) {
            this.lado = lado;
            this.area = this.calcular();
        }
        //formula da Área do quadrado: area = lado²
    calcular;
    prototype = {
        function() {
            return Math.pow(this.lado, 2);
        }
    };
}