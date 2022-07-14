
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