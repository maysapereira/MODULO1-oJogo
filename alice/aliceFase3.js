function escolha (){
    setTimeout(() => {
    let decida = prompt('Que decisão Alice deve tomar? \n ( 1 ) \n ( 2 )');
    while(decida != 1 && decida!=2){ 
        alert('Opção inválida, tente novamente')
        decida = prompt ('Escolha 1 ou 2')
    }    
        
    if(decida == 1){
        return location = './index.html'
    } else if(decida == 2){
        return location = '../gameovers/kkkkNamoralQueVacilo.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
    
}, 1000);
}

escolha ();