let resposta = document.getElementById('resposta')

function calculaValor(){

    let volei = Number (document.getElementById('volei').value)
    let fut = Number (document.getElementById('fut').value)
    let basq = Number (document.getElementById('basq').value)

    let pvolei = volei * 247.58
    let pfut = fut * 179.57
    let pbasq = basq * 260.89

    let ptotal = pvolei + pfut + pbasq
    let pdesconto = ptotal * (7/100)
    let pfinal = ptotal - pdesconto

    if(ptotal > 550){  
        resposta.innerHTML = "O valor total de sua compra ficou: R$: " + pfinal.toFixed(2)
    }else{
        resposta.innerHTML = "O valor total de sua compra ficou: R$: " + ptotal.toFixed(2)
    }

    resposta.style.fontSize = "2rem"
    resposta.style.transition = "3s"   
}