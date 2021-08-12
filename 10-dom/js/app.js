// var p = document.getElementById('demo');
// var texto = document.createTextNode("Olá");
// p.appendChild(texto);

let paragrafo = document.getElementsByTagName("p");
var texto = document.createTextNode("Olá");
paragrafo[0].appendChild(texto)

let demo = document.querySelector(".test")
demo.textContent = "Algum texto test"

let imagem = document.querySelector("img")
imagem.setAttribute('src','heynow.png')

let value = document.querySelector("input")
value.setAttribute('value','Bye')

paragrafo[0].style.color = 'red'
paragrafo[0].style.fontSize = '40px'
paragrafo[0].style.display = 'none'
