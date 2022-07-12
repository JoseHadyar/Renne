// function convertir(){
//     let valore = parseInt(document.getElementById("valor").value)
//     let resultado = 0
//     let dolar = 223
//     let euro = 243

//     if (document.getElementById("uno").checked){
//         resultado = valore / dolar
//         alert("El cambio de pesos(AR) a Dolares es: $" + resultado.toFixed(2) )
//     }
//     else if (document.getElementById("dos").checked){
//         resultado = valore / euro
//         alert("El cambio de pesos(AR) a Euro es: €" + resultado.toFixed(2) )
//     }
//     else{
//         alert("¡Complete el formulario!")
//     }
        
// }

function capturar(){
    // console.log("capturado")
    function Persona(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    let nombreCapturar = document.getElementById("nombre").value;
    console.log(nombreCapturar);
    let edadCapturar = document.getElementById("edad").value;
    console.log(edadCapturar);

    nuevoSujeto = new Persona(nombreCapturar, edadCapturar)
    console.log(nuevoSujeto)
    agregar();
} 
let baseDatos=[];
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tbody> ';
};