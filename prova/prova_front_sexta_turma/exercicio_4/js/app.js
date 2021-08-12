// INICIO REGEX 
let regexTexto = /^[a-zA-Z0-9 ,.'-]+$/i;
let regexCnpjCpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i
let regexData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i
// FIM REGEX 

// INICIO ELEMENTOS 
let validado = document.querySelectorAll('.validado');
let naoValidado = document.querySelectorAll('.nao-validado');
let nomeRazao = document.querySelector('.nome-razao');
let cnpjCpf = document.querySelector('.cnpj-cpf');
let dataNasc = document.querySelector('.data-nasc');
// FIM ELEMENTOS 

// FUNCOES DE VERIFICACAO 
nomeRazao.addEventListener('blur', function(){
    if(regexTexto.test(this.value) == true){
        validado[0].style.display = 'block';
        naoValidado[0].style.display = 'none';
    } else {
        validado[0].style.display = 'none';
        naoValidado[0].style.display = 'block';
    }
})

cnpjCpf.addEventListener('blur', function(){
    if(regexCnpjCpf.test(this.value) == true){
        validado[1].style.display = 'block';
        naoValidado[1].style.display = 'none';
    } else {
        validado[1].style.display = 'none';
        naoValidado[1].style.display = 'block';
    }
})

dataNasc.addEventListener('blur', function(){
    if(regexData.test(this.value) == true){
        validado[2].style.display = 'block';
        naoValidado[2].style.display = 'none';
    } else {
        validado[2].style.display = 'none';
        naoValidado[2].style.display = 'block';
    }
})