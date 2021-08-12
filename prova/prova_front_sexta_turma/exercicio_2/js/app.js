function mostrarPremio(posicao){

    let podio = ["sem Prêmio",'1000,00','800,00','500,00'];

    if(podio[posicao]==undefined){
        console.log('sem Prêmio')
    }else {
        console.log(podio[posicao])
    }
}


mostrarPremio(0)
