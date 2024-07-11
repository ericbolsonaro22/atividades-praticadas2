let resposta = document.getElementById('resposta')

function verificaNumdiv(){

    let num1 = Number (document.getElementById('num1').value)
    let num2 = Number (document.getElementById('num2').value)
    let num3 = Number (document.getElementById('num3').value)

    if((num1 % 5 == 0) && (num1 % 7 == 0)){
        resposta.innerHTML = "O número " + num1 + " é divisível por 5 e 7!" + "<br>" + "<br>"
    }else{
        resposta.innerHTML = "O número " + num1 + " não é divisível por 5 e 7!" + "<br>" + "<br>"
    }

    if((num2 % 5 == 0) && (num2 % 7 == 0)){
        resposta.innerHTML += "O número " + num2 + " é divisível por 5 e 7!" + "<br>" + "<br>"
    }else{
        resposta.innerHTML += "O número " + num2 + " não é divisível por 5 e 7!" + "<br>" + "<br>"
    }

    if((num3 % 5 == 0) && (num3 % 7 == 0)){
        resposta.innerHTML += "O número " + num3 + " é divisível por 5 e 7!" + "<br>" + "<br>"
    }else{
        resposta.innerHTML += "O número " + num3 + " não é divisível por 5 e 7!" + "<br>" + "<br>"
    }

    resposta.style.fontSize = "2rem"
    resposta.style.transition = "3s"   
}