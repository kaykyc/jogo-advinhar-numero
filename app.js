let listaDeNumeros = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;

function verificarChute(){
    let chute = document.querySelector('input').value
    let resultado = console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas>1 ? 'tentativas': 'tentativa'
        exibirTextoNaTela('p', `Você descobriu com ${tentativas} ${palavraTentativa}, atualize para jogar novamente.`);
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}, atualize para jogar novamente.`;
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroSecreto>chute){
            exibirTextoNaTela('p', 'O número é maior');
        }
        else{
            exibirTextoNaTela('p','o Número é menor');
        }
        tentativas ++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
function exibirTextoInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100')
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
exibirTextoInicial();

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*100 +1);
    let quantidadeDeNumeros = listaDeNumeros.length

    if (quantidadeDeNumeros == 100){
        listaDeNumeros= [ ];
    }
    if (listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }   else{
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }
}

function exibirConsole (){
    console.log('Teste massa');
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

exibirConsole();

function reniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}