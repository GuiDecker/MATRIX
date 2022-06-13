
//CONST
const canvas = document.getElementById('canv')

/* O GET.CONTEXT FORNECE O CONTEXTO DE RENDERIZAÇÃO/ E 2D É PRA SER 2D*/
const ctx = canvas.getContext('2d');


/* OFF SET RETORNA A LARGURA VISIVEL DE UM ELEMENTO EM PIXELS*/
const w = canvas.width = document.body.offsetWidth
const h = canvas.height = document.body.offsetHeight


/*mATH.FLOOR RETORNA O MENOR NUMERO INTEIRO */
const cols = Math.floor(w/20) + 1;

/*FILL PREENCHE TODOS OS VALORES DO ARRAY  DI UBDUCE INICIAL ATE O FINAL*/
const yPos = Array(cols).fill(0);
//

//CTX
ctx.fillStyle = '#000'
ctx.fillRect(0,0,w,h)
//

//function
function DesenhaMatrix(){
    ctx.fillStyle = '#0001'
    ctx.fillRect(0,0,w,h)

    ctx.fillStyle = '#0f0'
    ctx.font = '15pt monospace'

    yPos.forEach((y,ind) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = ind * 28
        ctx.fillText(text,x,y);

      if(y > 100 + Math.random() * 10000) yPos[ind] = 0
      else yPos[ind] = y + 20
    });
}

setInterval(DesenhaMatrix, 50)

alert("Hello world")