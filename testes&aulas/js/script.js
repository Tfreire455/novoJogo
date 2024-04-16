// import { FormaGeometrica } from './fundamentoPOO.js';
// Seleção de elementos
const html = document.querySelector('html');
const body = document.querySelector('body');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const forma = document.querySelector('.btn-formas');

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
    FormaGeometrica.quadrado(298)

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