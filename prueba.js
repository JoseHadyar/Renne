const listaNumeros = [12,24,48,1,2,3];

const [posicion1, posicion2, posicion3, ...restoDeElementos] = listaNumeros;


console.log(posicion1,posicion2, posicion3, restoDeElementos);



const persona = {
    nombre: "Jose",
    apellido: "Hadyar",
    edad: 26,
};

const {nombre: nombrereal,...restoPersona} = persona;


console.log(nombrereal, restoPersona);