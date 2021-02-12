//Nesta lógica o script roda fazendo as contas, não sendo vinculado ao relógio, que acaba zerando e o ponteiro fica 1 segundo atrás. Desta forma também posso utilizar o transition no CSS.
const HOURPOINTER = document.querySelector("#hour")
const MINUTEPOINTER = document.querySelector("#minute")
const SECONDPOINTER = document.querySelector("#second")

//A posição do ponteiro é definida na leitura do script
var date = new Date()
console.log(date)

let hr = date.getHours()
let min = date.getMinutes()
let seC = date.getSeconds()
console.log(`Hora: ${hr} Minuto ${min} Segundo: ${sec}`)

let posicaoHr = (hr * 360 / 12) + (min * (360 / 60) / 12)
let posicaoMin = (min * 360 / 60) + (sec * (360 / 60) / 60)
let posicaoSeg = sec * 360 / 60

function runClock() {

    positionHr = positionHr + (3/360)    //A cada hora(De 360 existem 12 posições = 30), 60 minutos(60min x 60seg=3.600  Simplificando, 30/3600 = 3/360)
    positionMin = positionMin + (6/60)   //A cada 60segundos, 1 minuto = 6 graus = 1 posição // (1/60)*6 = 6/60
    positionSec = positionSec + 6        //A cada segundo, 6 graus = 1 posição

    HOURPOINTE.style.transform = "rotate(" + posicaoHr + "deg)"
    MINUTEPOINTER.style.transform = "rotate(" + posicaoMin + "deg)"
    SECONDPOINTER.style.transform = "rotate(" + posicaoSec + "deg)"
}

var interval = setInterval(runClock, 1000)