let resposta = document.getElementById('resposta')

function calculaFarenheit(){

    let celsius = Number (document.getElementById('celsius').value)

    let farenheit = (celsius * (9/5)) + 32

    resposta.innerHTML = "A conversão de " + celsius + " ℃, para Farenheit é igual a: " + farenheit.toFixed(2) + " ℉"

    resposta.style.fontSize = "2rem"
    resposta.style.transition = "3s"   
}