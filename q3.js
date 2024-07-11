let resposta = document.getElementById('resposta')

function calculaFuncao(){

    let xFuncao = Number (document.getElementById('xFuncao').value)

    let resultado = (5 * xFuncao + 4) / (2 * xFuncao + 1)

    if((xFuncao < 0) || (xFuncao > 10)){
        resposta.innerHTML = "Valor fora da faixa de cálculo permitida."
    }
    else{
        resposta.innerHTML = "O resultado da equação é igual à: " + resultado.toFixed(2)
    }

    resposta.style.fontSize = "2rem"
    resposta.style.transition = "3s"   
}
