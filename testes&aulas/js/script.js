// Seleção de elementos
const html = document.querySelector('html');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const formas = document.querySelector('.btn-formas');

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

}

// Função para lidar com cliques nos botões do menu
function adicionarEventosMenu() {}

// Adiciona eventos aos botões do menu
adicionarEventosMenu();

// Adiciona evento ao botão do menu para mostrar/ocultar o menu
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Cria os itens do menu quando o script é carregado
criarItensMenu();