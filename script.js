let numberToFind = 0;
let attemps = 0;

function refresh(){
    //Função responsavel para gerar numero aleatorio
    attemps = 0
    numberToFind =  parseInt(Math.random() * 100)
    console.log(numberToFind)
}

function verifyNumber(){
    //Função responsavel para verificar se o numero que foi digitado no input é igual ao numero gerado aleatoriamente pela função refresh.
    let bet = document.getElementById('bet').value;
    
    if (bet > 100 || bet < 1){
        alert('Número invalida')
        return;
    
    }
    
    if(bet > numberToFind){
        attemps++;
        alert('O número para ser encontrado é MENOR')
    }

    else if (bet < numberToFind){
        attemps++;
        alert('O número para ser encontrado é MAIOR')
    }

    else{
        alert('Parabéns você acertou!! com '+attemps+' erros.')
        refresh()
    }
}


refresh()