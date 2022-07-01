function convertir(){
    let valore = parseInt(document.getElementById("valor").value)
    let resultado = 0
    let dolar = 223
    let euro = 243

    if (document.getElementById("uno").checked){
        resultado = valore / dolar
        alert("El cambio de pesos(AR) a Dolares es: $" + resultado.toFixed(2) )
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro
        alert("El cambio de pesos(AR) a Euro es: €" + resultado.toFixed(2) )
    }
    else{
        alert("¡Complete el formulario!")
    }
        
}