const db ={
    methods: {
        find: (id) => {
            return db.items.find(item => item.id === id);
        },
        remove: (items) => {
            items.forEach(item => {
                const product = db.methods.find(item.id)
                product.cantidad = product.cantidad - item.cantidad;
            });

            console.log(db);
        },
    },
    items: [
        {
            id: 0,
            title: 'Anillo Dorado',
            precio: 750,
            cantidad: 5
        },
        {
            id: 1,
            title: 'Anillo Rosa',
            precio: 600,
            cantidad: 10
        },
        {
            id: 3,
            title: 'Collar Sastrino',
            precio: 850,
            cantidad: 7
        },
        {
            id: 4,
            title: 'Pulsera Diantre',
            precio: 500,
            cantidad: 5
        },
        {
            id: 5,
            title: 'Collar Swarovski',
            precio: 1250,
            cantidad: 6,
        },
    ]
}

const shoppingCart = {
    items: [],
    methods: {
        add:(id, cantidad) => {
            const cartItem = shoppingCart.methods.get(id);

            if(cartItem){
                if(shoppingCart.methods.hasInventory(id, cantidad + cartItem.cantidad)){
                   cartItem.cantidad += cantidad;
                }else{
                    alert('No hay inventario suficiente');
                }
            }else{
                shoppingCart.items.push({id, cantidad});
            }
        },
        remove:(id, cantidad) => {
            const cartItem = shoppingCart.methods.get(id);
            if(cartItem.cantidad -cantidad > 0){
                cartItem.cantidad -= cantidad;
            }else{
                shoppingCart.items = shoppingCart.items.filter(item => item.id !== id );
            }
        },
        count:() => {
            return shoppingCart.items.reduce((acc , item) => acc + item.cantidad, 0);
        },
        get:(id) => {
            const index = shoppingCart.items.findIndex(item => item.id === id);
            return index >= 0 ? shoppingCart.items[index] : null; 
        },
        getTotal:() => {

            const total = shoppingCart.items.reduce((acc, item) => {
                const found = db.methods.find(item.id);
                return acc + found.precio * item.cantidad;
            }, 0);
            return total;
        },
        hasInventory:(id, cantidad) => {
            return db.items.find(item => item.id === id).cantidad - cantidad >= 0;
        },
        purchase:() => {
            db.methods.remove(shoppingCart.items);
            shoppingCart.items = [];
        },
    },
};


renderStore();

function renderStore(){
const html = db.items.map(item => {
    return `
        <div class="item">
            <div class="title">${item.title}</div>
            <div class="precio">${numberToCurrency(item.precio)}</div>
            <div class="cantidad">${item.cantidad} unid </div>
            
            <div class="actions">
                <button class="add" data-id="${item.id}">
                    Agrega al carrito
                </button>
            </div>
        </div>
    `;
});


    document.querySelector("#store-container").innerHTML = html.join("");

    document.querySelectorAll('.item .actions .add').forEach(button =>{
       button.addEventListener('click', e => {
            const id = parseInt(button.getAttribute('data-id'));
            const item = db.methods.find(id);

            if(item && item.cantidad -1 > 0 ){
                //añadir al carrito
                shoppingCart.methods.add(id, 1);  
                renderShoppingCart();
            }else{
                console.log('Ya no hay inventario');
            }
       }) ;
    });
}

function renderShoppingCart(){
    const html = shoppingCart.items.map(item => {
        const dbItem = db.methods.find(item.id);
        return `
        
            <div class="item">
                <div class="title">${dbItem.title}</div>
                <div class="precio">${numberToCurrency(dbItem.precio)}</div>
                <div class="cantidad">${item.cantidad} unid</div>
                <div class="subtotal">
                    Subtotal:${numberToCurrency(item.cantidad * dbItem.precio)}
                </div>
                <div class="actions">
                    <button class="addOne" data-id="${item.id}">+</button>
                    <button class="removeOne" data-id="${item.id}">-</button>
                </div>
            </div>
        
        `;
    });

    const closeButton = `
       <div class="cart-header">
            <button class="bClose">Cerrar</button>
       </div>
    `;

    const purchaseButton = 
        shoppingCart.items.length > 0 
        ? `
        <div class="cart-actions">
            <button id="bPurchase">Comprar</button>
        </div>
    `
    :"";

    const total = shoppingCart.methods.getTotal();
    const totalContainer = `<div class="total">Total: ${numberToCurrency(total)}</div>`;


    const shoppingCartContainer = document.querySelector('#shopping-cart-container');
    
    shoppingCartContainer.classList.remove('hide');
    shoppingCartContainer.classList.add('show');
    
    
    shoppingCartContainer.innerHTML = closeButton + html.join('') + totalContainer +purchaseButton;

    document.querySelectorAll('.addOne').forEach(button =>{
        button.addEventListener('click', e => {
            const id = parseInt(button.getAttribute('data-id'));
            shoppingCart.methods.add(id, 1);
            renderShoppingCart();
        });
    });

    document.querySelectorAll('.removeOne').forEach(button =>{
        button.addEventListener('click', e => {
            const id = parseInt(button.getAttribute('data-id'));
            shoppingCart.methods.remove(id, 1);
            renderShoppingCart();
        });
    });


    document.querySelector('.bClose').addEventListener('click', e => {
        shoppingCartContainer.classList.remove('show');
        shoppingCartContainer.classList.add('hide');
    });

    const bPurchase = document.querySelector('#bPurchase');
    if(bPurchase){
        bPurchase.addEventListener('click' , e => {
            shoppingCart.methods.purchase();
            renderStore();
            renderShoppingCart();
        });
    }
}



function numberToCurrency(n){
    return new Intl.NumberFormat('en-US', {
        maximumSignificantDigits:2,
        style: 'currency',
        currency: 'USD'
    }).format(n);
}