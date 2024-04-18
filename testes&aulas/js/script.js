const html = document.querySelector('html');
const body = document.querySelector('body');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const forma = document.querySelector('.btn-formas');
const span = document.querySelector('.span-contexto');
const resultadoBtn = document.querySelector('.result');
const resultWindow = document.querySelector('.result-calc');
const calcular = document.querySelector('.check');
const formula = document.querySelector('.formula');



class FormaGeometrica {
    constructor() {}

    static circulo() {
        function Value() {
            resultadoBtn.addEventListener('click', () => {
                let circleInput = document.getElementById('number-radius');
                let radius = circleInput.value;
                console.log(radius);
                Calc(radius);
            })
        }
        Value()

        function Calc(raio) {
            const area = Math.PI * raio ** 2;
            resultWindow.innerHTML = `${area.toFixed(2)}`;
            console.log(area.toFixed(2))
        }
    }

    static quadrado() {
        function Value() {
            resultadoBtn.addEventListener('click', () => {
                let squareInput = document.getElementById('number-side')
                let side = parseFloat(squareInput.value);
                console.log(side)
                Calc(side);
            })
        }
        Value()

        function Calc(lado) {
            const area = parseFloat(lado ** 2);
            console.log(`Quadrado: Lado = ${lado}, Área = ${area}`);
            resultWindow.innerHTML = `${area}`;
            console.log(area)
        }
    }

    // area = base * altura / 2 
    static triangulo() {
        function Value() {
            resultadoBtn.addEventListener('click', () => {
                let triangleInputBase = document.getElementById('number-base')
                let triangleInputHeight = document.getElementById('number-height')
                let base = parseFloat(triangleInputBase.value);
                let height = parseFloat(triangleInputHeight.value);
                console.log(base, height)
                Calc(base, height);
            })
        }
        Value()

        function Calc(base, altura) {
            const area = parseFloat((base * altura) / 2);
            console.log(`Área do triângulo = ${area}`);
            resultWindow.innerHTML = `Área do Triângulo: ${area}`;
        }
    }

    static retangulo() {
        function Value() {
            resultadoBtn.addEventListener('click', () => {
                let rectangleInputBase = document.getElementById('rectangle-base')
                let rectangleInputHeight = document.getElementById('rectangle-height')
                let base = parseFloat(rectangleInputBase.value);
                let height = parseFloat(rectangleInputHeight.value);
                console.log(base, height);
                Calc(base, height);
            })
        }
        Value()

        function Calc(base, altura) {
            const area = parseFloat(base * altura);
            console.log(`Área do Retângulo = ${area}`);
            resultWindow.innerHTML = `Área do Retângulo: ${area}`;
        }
    }

    // area = ((BASEmaior + baseMenor) * Altura) / 2
    static trapezio() {
        function Value() {
            resultadoBtn.addEventListener('click', () => {
                let largerBaseInput = document.getElementById('number-larger-base');
                let smallerBaseInput = document.getElementById('number-smaller-base');
                let heightTrapezeInput = document.getElementById('trapeze-height');
                let largerBase = parseFloat(largerBaseInput.value);
                let smallerBase = parseFloat(smallerBaseInput.value);
                let heightTrapeze = parseFloat(heightTrapezeInput.value);
                console.log(largerBase, smallerBase, heightTrapeze);
                Calc(largerBase, smallerBase, heightTrapeze);
            })
        }
        Value()

        function Calc(baseMaior, baseMenor, alturaTrapezio) {
            const bases = baseMaior + baseMenor;
            const resultadoArea = (bases * alturaTrapezio) / 2
            console.log(resultadoArea);
            resultWindow.innerHTML = `Área do Trapézio: ${resultadoArea}`;
        }
    }

    static losango() {
        function Value() {
            resultadoBtn.addEventListener('click', () => {
                let diamondInputLargerD = document.getElementById('larger-diag')
                let diamondInputSmallerD = document.getElementById('smaller-diag')
                let diagMaior = parseFloat(diamondInputLargerD.value);
                let diagMenor = parseFloat(diamondInputSmallerD.value);
                console.log(diagMaior, diagMenor)
                Calc(diagMaior, diagMenor);
            })
        }
        Value()

        function Calc(diagMaior, diagMenor) {
            const area = parseFloat((diagMaior * diagMenor) / 2);
            console.log(`Área do losango = ${area}`);
            resultWindow.innerHTML = `Área do Losango: ${area}`;
        }
    }
}


// Definição de itens do menu
const itens = [
    { class: 'circle', label: 'Círculo' },
    { class: 'square', label: 'Quadrado' },
    { class: 'triangle', label: 'Triângulo' },
    { class: 'rectangle', label: 'Retângulo' },
    { class: 'trapeze', label: 'Trapézio' },
    { class: 'diamond', label: 'Losango' }
];

// Função para criar os itens do menu
function criarItensMenu() {
    itens.forEach(item => {
        forma.innerHTML += `<li><input class="${item.class}" type="button" value="${item.label}"></li>`;
    })
}
criarItensMenu();
const circle = html.querySelector('.circle')
const square = html.querySelector('.square')
const triangle = html.querySelector('.triangle')
const rectangle = html.querySelector('.rectangle')
const trapeze = html.querySelector('.trapeze')
const diamond = html.querySelector('.diamond')

circle.addEventListener('click', function() {
    span.innerHTML = `
    <div class="input-resultado">
    <h5 class="calc">Círculo</h5>
    <div class = "circle">
    <div class="radius">
    <label for="number-radius" class="number-side">Raio: </label>
    <input type="number" name="number" id="number-radius">
    </div>
    </div>
    </div>`

    formula.innerHTML = `Fórmula da área do Círculo: Área = PI * Raio²`
    ResetWindow()
})

square.addEventListener('click', function() {
    span.innerHTML = `
    <div class="input-resultado">
    <h5 class="calc">Quadrado</h5>
    <div class = "square">
    <div class="">
    <div class="side">
    <label for="number-side" class="number-side">Lado: </label>
    <input type="number" name="number" id="number-side">
    </div>
    </div>
    </div>
    </div>`

    formula.innerHTML = `Fórmula da Área do quadrado: Área = Lado²`
    ResetWindow()
})

triangle.addEventListener('click', function() {
    span.innerHTML = `
        <div class="input-resultado">
            <h5 class="calc">Triângulo</h5>
            <div class = "triangle-bh">
                <div class="bh">
                    <div class="base">
                        <label for="number-base" class="number-base">Base: </label>
                        <input type="number" name="number" id="number-base">
                    </div>
                    <div class="height">    
                        <label for="number-height" class="number-height">Altura: </label>
                        <input type="number" name="number" id="number-height">
                    </div>
                </div>
            </div>
        </div>`

    formula.innerHTML = `fórmula da Área do Triângulo: Área = (Base * Altura) / 2`
    ResetWindow()
})

rectangle.addEventListener('click', function() {
    span.innerHTML = `
    <div class="input-resultado">
        <h5 class="calc">Retângulo</h5>
        <div class = "rectangle-bh">
            <div class="bh">
                <div class="base">
                    <label for="rectangle-base" class="rectangle-base">Base: </label>
                    <input type="number" name="number" id="rectangle-base">
                </div>
                <div class="height">    
                    <label for="rectangle-height" class="rectangle-height">Altura: </label>
                    <input type="number" name="number" id="rectangle-height">
                </div>
            </div>
        </div>
    </div>`

    formula.innerHTML = `fórmula da Área do Retângulo: Área = Base * Altura`
    ResetWindow()
})

trapeze.addEventListener('click', function() {
    span.innerHTML = `
        <div class="input-resultado">
            <h5 class="calc">Trapézio</h5>
            <div class = "trapeze-Bbh">
                <div class="Bbh">
                    <div class="larger-base">
                        <label for="number-larger-base" class="number-larger-base">Base Maior: </label>
                        <input type="number" name="number" id="number-larger-base">
                    </div>
                    <div class="smaller-base">    
                        <label for="number-smaller-base" class="number-smaller-base">Base Menor: </label>
                        <input type="number" name="number" id="number-smaller-base">
                    </div>
                    <div class="height-trapeze">    
                        <label for="trapeze-height" class="trapeze-height">Altura: </label>
                        <input type="number" name="number" id="trapeze-height">
                    </div>
                </div>
            </div>
        </div>`

    formula.innerHTML = `fórmula da Área do Trapézio: Área = (Base M + Base m)*altura / 2`
    ResetWindow()
})

diamond.addEventListener('click', function() {
    span.innerHTML = `
        <div class="input-resultado">
            <h5 class="calc">Losango</h5>
            <div class = "losango-Dd">
                <div class="Dd">
                    <div class="diagonal-maior">
                        <label for="larger-diag" class="larger-diag">Diagonal Maior: </label>
                        <input type="number" name="number" id="larger-diag">
                    </div>
                    <div class="diagonal-menor">    
                        <label for="smaller-diag" class="smaller-diag">Diagonal menor: </label>
                        <input type="number" name="number" id="smaller-diag">
                    </div>
                </div>
            </div>
        </div>`

    formula.innerHTML = `fórmula da Área do Losango: Área = (Diagonal Maior * Diagonal Menor) / 2`
    ResetWindow()

})

resultadoBtn.addEventListener('click', () => {
    resultWindow.classList.toggle('hidden')

})

// Adiciona evento ao botão do menu para mostrar/ocultar o menu
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    body.classList.toggle('blur');
    span.classList.toggle('hidden');
})

calcular.addEventListener('click', () => {
    formula.classList.toggle('hidden');

})

// Cria os itens do menu quando o script é carregado

function ResetWindow() {
    resultWindow.classList.add('hidden');
}

FormaGeometrica.quadrado()
FormaGeometrica.circulo()
FormaGeometrica.triangulo()
FormaGeometrica.retangulo()
FormaGeometrica.trapezio()
FormaGeometrica.losango()