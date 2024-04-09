let espacoCanvas = document.getElementById('meu-canvas');
let context = espacoCanvas.getContext('2d');

//Inserindo imagem dos ovnis
let imagem = new Image(); //criamos um objeto Image()
imagem.src = './assets/img/ovni.png'
imagem.onload = function() {
    let x = 20;

    for (let i = 1; i <= 5; i++) {
        context.drawImage(imagem, x, 20, 64, 32)
        x += 100;
    }
}
context.beginPath();

let explosao = new Image();
explosao.src = './assets/img/explosao.png'
explosao.onload = () => {
    let x = 20;

    for (let i = 1; i <= 5; i++) {
        context.drawImage(explosao, 70, 10, 60, 65, //Área de recorte (clipping) 
                250, 250, 60, 65) //Desenho no canvas
        x += 100;
    }
}