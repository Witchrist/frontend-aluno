// INICIO REGEX 
let regexTexto = /^[a-zA-Z0-9 ,.'-]+$/i;
let regexCnpjCpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i
let regexData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i
let regexCep = /^\d{5}-\d{3}$/i
let regexTelCel = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/i
let regexUF = /^(ac|AC|al|AL|am|AM|ap|AP|ba|BA|ce|CE|df|DF|es|ES|go|GO|ma|MA|mg|MG|ms|MS|mt|MT|pa|PA|pb|PB|pe|PE|pi|PI|pr|PR|rj|RJ|rn|RN|ro|RO|rr|RR|rs|RS|sc|SC|se|SE|sp|SP|to|TO)$/i
let regexInscrEstadual = /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3})/i


// FIM REGEX 

// INICIO ELEMENTOS 
let validado = document.querySelectorAll('.validado');
let naoValidado = document.querySelectorAll('.nao-validado');
let nomeRazao = document.querySelector('.nome-razao');
let cnpjCpf = document.querySelector('.cnpj-cpf');
let dataNasc = document.querySelector('.data-nasc');
let endereco = document.querySelector('.endereco')
let bairro = document.querySelector('.bairro')
let cep = document.querySelector('.cep')
// let dataCadastro = document.querySelector('.data-cadastro')
let municipio = document.querySelector('.municipio')
let telefone = document.querySelector('.telefone')
let celular = document.querySelector('.celular')
let uf = document.querySelector('.uf')
let inscrEstadual = document.querySelector('.inscr-estadual')
let btnSubmit = document.querySelector('.btn-submit')
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

endereco.addEventListener('blur', function(){
    if(regexTexto.test(this.value) == true){
        validado[3].style.display = 'block';
        naoValidado[3].style.display = 'none';
    } else {
        validado[3].style.display = 'none';
        naoValidado[3].style.display = 'block';
    }
})
bairro.addEventListener('blur', function(){
    if(regexTexto.test(this.value) == true){
        validado[4].style.display = 'block';
        naoValidado[4].style.display = 'none';
    } else {
        validado[4].style.display = 'none';
        naoValidado[4].style.display = 'block';
    }
})
cep.addEventListener('blur', function(){
    if(regexCep.test(this.value) == true){
        validado[5].style.display = 'block';
        naoValidado[5].style.display = 'none';
    } else {
        validado[5].style.display = 'none';
        naoValidado[5].style.display = 'block';
}
})

// dataCadastro.addEventListener('blur', function(){
//     if(regexCnpjCpf.test(this.value) == true){
//         validado[6].style.display = 'block';
//         naoValidado[6].style.display = 'none';
//     } else {
//         validado[6].style.display = 'none';
//         naoValidado[6].style.display = 'block';
//     }
//     })

municipio.addEventListener('blur', function(){
    if(regexTexto.test(this.value) == true){
        validado[7].style.display = 'block';
        naoValidado[7].style.display = 'none';
    } else {
        validado[7].style.display = 'none';
        naoValidado[7].style.display = 'block';
    }
    })

telefone.addEventListener('blur', function(){
    if(regexTelCel.test(this.value) == true){
        validado[8].style.display = 'block';
        naoValidado[8].style.display = 'none';
    } else {
        validado[8].style.display = 'none';
        naoValidado[8].style.display = 'block';
    }
    })

celular.addEventListener('blur', function(){
    if(regexTelCel.test(this.value) == true){
        validado[9].style.display = 'block';
        naoValidado[9].style.display = 'none';
    } else {
        validado[9].style.display = 'none';
        naoValidado[9].style.display = 'block';
    }
    })

uf.addEventListener('blur', function(){
    if(regexUF.test(this.value) == true){
        validado[10].style.display = 'block';
        naoValidado[10].style.display = 'none';
    } else {
        validado[10].style.display = 'none';
        naoValidado[10].style.display = 'block';
    }
})

inscrEstadual.addEventListener('blur', function(){
    if(regexInscrEstadual.test(this.value) == true){
    validado[11].style.display = 'block';
    naoValidado[11].style.display = 'none';
    } else {
    validado[11].style.display = 'none';
    naoValidado[11].style.display = 'block';
}
})

btnSubmit.addEventListener('click', function(event){
    for(let i=0; i<naoValidado.length;i++){
        if(naoValidado[i].style.display=='block'){
            event.preventDefault()
            alert("Todos os campos precisam estar validados!")
            break
        } 
    }
})
