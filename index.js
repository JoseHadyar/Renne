
// function capturar(){
//     // console.log("capturado")
//     function Persona(nombre, edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     let nombreCapturar = document.getElementById("nombre").value;
//     console.log(nombreCapturar);
//     let edadCapturar = document.getElementById("edad").value;
//     console.log(edadCapturar);

//     nuevoSujeto = new Persona(nombreCapturar, edadCapturar)
//     console.log(nuevoSujeto)
//     agregar();
// } 
// let baseDatos=[];
// function agregar(){
//     baseDatos.push(nuevoSujeto);
//     console.log(baseDatos);
//     document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tbody> ';
// };

class Producto {
    constructor(id, nombre, marca, precio, stock){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1,"Miracle", "Keller", 350000, 120 )
const producto2 = new Producto(2,"Saha", "Gilera", 325000, 80 )
const producto3 = new Producto(3,"Cronos", "Keller", 175000, 20 )
const producto4 = new Producto(4,"TNT", "Benelli", 480000, 5 )
const producto5 = new Producto(5,"CB", "Honda", 550500, 300 )

const productos = [producto1,producto2, producto3, producto4, producto5]

const divProductos = document.getElementById('productos')

productos.forEach(producto => {
    divProductos.innerHTML += `
        <div  id="producto${producto.id}" class="productos" >
            <p>Nombre: ${producto.nombre}</p>
            <p>Marca: ${producto.marca}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        </div>
    
    ` 
})


//  Aca comienza el desafio de Eventos
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
}

const personas = []

const form = document.getElementById('idForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let username = document.getElementById('idUser').value
    let email = document.getElementById('idEmail').value
    let password = document.getElementById('idPassword').value

    const user = new User(username, email, password)
    personas.push(user)
    console.log(personas)

    form.reset()
})

