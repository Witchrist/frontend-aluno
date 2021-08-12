let func = {
    query: function(parametro){
        return document.querySelector(parametro)
    }
}

let botao = func.query('button')
console.log(botao)

botao.addEventListener('click', function(){
    alert("olá");
})

let botaoFundo = func.query('.botao-fundo')
console.log(botaoFundo)
let body = func.query('body');

botaoFundo.addEventListener('click', function(){
    body.style.backgroundColor = "green";  
})

let imagem1 = func.query('.imagem1');

imagem1.addEventListener('mouseover', function(){
    console.log("estou vendo a imagem");
})

let imagem2 = func.query('.imagem2');
imagem2.addEventListener('click', function(evento){
    console.log("estou clicando na imagem")
    console.log(evento.clientX);
    console.log(evento.clientY);
})


body.addEventListener('click',bodyVermelho = function(){
    this.style.backgroundColor="red";
});

body.removeEventListener('click', bodyVermelho);

let botaoEnviar = func.query(".botao-enviar")

botaoEnviar.addEventListener('click', function(clicar){
    alert("Não é possível enviar")
    clicar.preventDefault()
})

// setTimeout(function(){
//     alert("TEMPO ESGOTADO!")
// },
// 10000)

// setInterval(function(){
//     alert("hora do intervalo")
// }, 5000)
