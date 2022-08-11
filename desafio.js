Swal.fire({
    title: "¿Listos para convertirse en Golders?",
    text: "Selecciona tu pais",
    confirmButtonText: "¡Vamos!",
    width: "60%",
    padding: "2rem",
    // grow: "fullscreen",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,

    input: "select",
    inputPlaceholder:"Pais",
    inputValue:"",
    inputOptions:{
        argentina: "Argentina",
        venezuela: "Venezuela",
    },



})



const tBody = document.getElementById("tBody")

fetch('./productos.json')
.then(response => response.json())
.then(productos => {
    productos.forEach((producto, indice) => {
       tBody.innerHTML += `
        
       <tr id="producto${indice + 1}">
            <th scope="row">${indice + 1}</th>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.stock}</td>
            <td><img src="./imagenes/${producto.img}"></td>
            <td><button>Comprar</button></td>
      </tr>
        
        
        `
    })
})


