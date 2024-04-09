let x = 20,
    y = 100,
    raio = 5;

let anterior = new Date().getTime();
requestAnimationFrame(mexerBolinha);

function mexerBolinha() {

    let agora = new Date().getTime()
    let decorrido = agora - anterior;
    let velocidade = 20;

    //Limpar o canvas
    context.clearRect(0, 0, espacoCanvas.width, espacoCanvas.height)

    context.beginPath();
    context.arc(x, y, raio, 0, Math.PI * 2);
    context.fill();
    x += velocidade * decorrido / 1000
    anterior = agora;
    requestAnimationFrame(mexerBolinha);
}