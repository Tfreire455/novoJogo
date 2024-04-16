// Seleção de elementos
const html = document.querySelector('html');
const body = document.querySelector('body');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const forma = document.querySelector('.btn-formas');
const span = document.querySelector('.span-contexto');

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

circle.addEventListener('click', () => {

})
square.addEventListener('click', () => {
    span.innerHTML = `
    <div class="input-resultado">
        <h5 class="calc-quadrado">Quadrado</h5>
        <label for="number-side" class="number-side">Lado: </label>
        <input type="number" name="number" id="number-side">
    </div>`
    const squareSideInput = document.querySelector('#number-side')

})
triangle.addEventListener('click', () => {

})
rectangle.addEventListener('click', () => {

})
trapeze.addEventListener('click', () => {

})
diamond.addEventListener('click', () => {

})



// Adiciona evento ao botão do menu para mostrar/ocultar o menu
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    body.classList.toggle('blur');
})

// Cria os itens do menu quando o script é carregado