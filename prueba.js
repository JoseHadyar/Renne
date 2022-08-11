// class Producto {
//     constructor(nombre, marca, precio, stock) {
//         this.nombre = nombre
//         this.marca = marca
//         this.precio = precio
//         this.stock = stock
//     }
// }

// const producto1 = new Producto("Miracle 150", "Keller", 300000, 5)
// const producto2 = new Producto("TNT15", "Benelli", 450000, 5)
// const producto3 = new Producto("Skua 150", "Motomel", 278000, 2)
// const producto4 = new Producto("Cb125", "Honda", 852500, 10)
// const producto5 = new Producto("TRX 1200", "Benelli", 1525300, 3)

// const productos = [producto1, producto2, producto3, producto4, producto5]
// const botonCarrito = document.getElementById("carrito")
// const divProductos = document.getElementById("divProductos")

// productos.forEach((producto, indice) => {
//     divProductos.innerHTML += `
    
//     <div class="card border-secondary mb-3" id="producto${indice}" style="max-width: 20rem;">
//         <div class="card-header">${producto.nombre}</div>
//             <div class="card-body">
//                 <h4 class="card-title">${producto.marca}</h4>
//                 <p class="card-text">${producto.precio}</p>
//                 <p class="card-text">${producto.stock}</p>
//                 <button class="btn btn-secondary"><i class="fa-solid fa-cart-plus"></i></button>
//              </div>
//     </div>
    
//     `
// })

// productos.forEach((producto, indice) => {
//     document.getElementById(`producto${indice}`).lastElementChild.
//     lastElementChild.addEventListener('click', () =>{
//         Toastify({
//             text: "Producto agregado al carrito",
//             duration: 3000,
//             destination: "https://stay-gold.vercel.app/",
//             newWindow: true,
//             close: true,
//             gravity: "top", // `top` or `bottom`
//             position: "right", // `left`, `center` or `right`
//             stopOnFocus: true, // Prevents dismissing of toast on hover
//             style: {
//                 background: "background-image: linear-gradient(to left top, #67a3fd, #00aef6, #00b3d6, #00b2a4, #0cad6d);",
//             },
//             onClick: function () { } // Callback after click
//         }).showToast();
//     })
// })

// botonCarrito.addEventListener('click', () => {
//     Swal.fire({
//         title: 'Ya casi es tuyo',
//         showCancelButton: true,
//         cancelButtonText: 'Seguir comprando',
//         confirmButtonText: 'Finalizar compra',
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire('Compra finalizada!', '', 'success')
//         }
//     })
// })







