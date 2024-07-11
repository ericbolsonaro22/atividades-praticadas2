let resposta = document.getElementById('resposta')

function verificaVoto(){

    let nome = document.getElementById('nome').value
    let idade = Number (document.getElementById('idade').value)

    if(idade >= 16){
        resposta.innerHTML = nome + ", você já pode votar, mas seu voto não é obrigatório"
    }else if(idade < 16){
        resposta.innerHTML = nome + ", você ainda não pode votar"
    }

    if((idade >= 18) && (idade <= 70)){
        resposta.innerHTML = nome + ", seu voto é obrigatório"
    }
    else if(idade > 70){
        resposta.innerHTML = nome + ", você pode votar, mas seu voto não é obrigatório"
    }

    resposta.style.fontSize = "2rem"
    resposta.style.transition = "3s"   
}