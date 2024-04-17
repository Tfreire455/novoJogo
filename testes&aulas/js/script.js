// Seleção de elementos
const html = document.querySelector('html');
const body = document.querySelector('body');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const forma = document.querySelector('.btn-formas');
const span = document.querySelector('.span-contexto');
const resultadoBtn = document.querySelector('.result');
const resultWindow = document.querySelector('.result-calc')



class FormaGeometrica {
    constructor() {}

    static circulo() {
        function Value() {
            resultadoBtn.addEventListener('click', () => {
                let circleInput = document.getElementById('number-radius')
                let radius = circleInput.value;
                console.log(radius)
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
                let side = squareInput.value;
                console.log(side)
                Calc(side);
            })
        }
        Value()

        function Calc(lado) {
            const area = lado ** 2;
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
                let base = triangleInputBase.value;
                let height = triangleInputHeight.value;
                console.log(base, height)
                Calc(side);
            })

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
            <label for="number-side" class="number-side">Raio: </label>
            <input type="number" name="number" id="number-side">
            </div>
        </div>
    </div>`

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

    ResetWindow()
})

rectangle.addEventListener('click', function() {

})
trapeze.addEventListener('click', function() {

})
diamond.addEventListener('click', function() {

})

resultadoBtn.addEventListener('click', () => {
    resultWindow.classList.toggle('hidden')

})

// Adiciona evento ao botão do menu para mostrar/ocultar o menu
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    body.classList.toggle('blur');
    span.classList.add('hidden');
})

// Cria os itens do menu quando o script é carregado

function ResetWindow() {
    resultWindow.classList.add('hidden')
}

FormaGeometrica.quadrado()
FormaGeometrica.circulo()