var numero1 = 8;
var numero2 = -3;
var numero3 = 7.5;
var texto = "Helloooo";
var verdadeiro = true;

console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(texto);
console.log(verdadeiro);

var nome = "Christopher";
var sobrenome = "Alexander";

console.log(nome+" "+sobrenome);

var texto2 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

console.log(texto2)

var valorNulo = null;
var naodefinido = undefined;

console.log(valorNulo);
console.log(naodefinido);

var frutas = ["banana","maca","pessego","kiwi","lichia"]
console.log(frutas);

var texto3 = "RD está aqui agora!"
console.log(texto3);

var casado = false;
console.log(casado==!true)

casado = true;
console.log(casado==!false)

var nota = 10;

switch(nota){
    case 10: case 9:
        console.log("melhores alunos!");
        break;
    case 8: case 7:
        console.log("Muito bom");
        break;
    case 6: case 5:
        console.log("Ufa! você passou!");
        break;
    case 4:
        console.log("Recuperação");
        break;
    case 3: case 2: case 1: case 0:
        console.log("Reprovado!");
        break;
    default:
        console.log("Nota inválida!");
}