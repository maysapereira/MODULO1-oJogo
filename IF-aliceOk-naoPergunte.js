function escolha (){
    setTimeout(() => {
    let decida = prompt('O que Isabelly deve fazer? \n ( 1 ) \n ( 2 )');
    while(decida != 1 && decida!=2){ 
        alert('Opção inválida, tente novamente')
        decida = prompt ('Escolha 1 ou 2')
    }    
        
    if(decida == 1){
        return location = './IF-aliceOK.html'
    } else if(decida == 2){
        return location = './IF-perguntaMelissa.html'
    } else {
        alert('Opção Inválida, tente novamente')
        return escolha();
    }
    
}, 1000);
}

escolha ();