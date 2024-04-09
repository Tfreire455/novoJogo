let espacoCanvas = document.getElementById('meu-canvas');
let context = espacoCanvas.getContext('2d');
//Preenchimento do fundo
// context.fillStyle = 'red';
// context.fillRect(50, 50, 100, 100);

//Contorno azul com expessura de 3px
// context.lineWidth = 3;
// context.strokeStyle = 'blue';
// context.strokeRect(50, 50, 100, 100)

//Iniciar novo Path (apagando desenhos anteriores)
context.beginPath();

//Desenhar uma estrela
context.moveTo(75, 250)
context.lineTo(150, 50)
context.lineTo(225, 250)
context.lineTo(50, 120)
context.lineTo(250, 120)
context.lineTo(75, 250)

//Configurar a cor da linha
context.strokeStyle = 'red';
context.lineWidth = 3;

//Traçar as linhas do caminho
context.stroke()