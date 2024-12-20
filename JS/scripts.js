
document.addEventListener('DOMContentLoaded', () => { // hace que se ejecute la función al finalizar la carga de la página

    var cardContainer = document.querySelector('#card-container'); //también se puede usar getElementById

    //CONSUMO DE API
    function fetchProductos() {
        fetch('https://dummyjson.com/products?limit=20')
            .then(response => response.json())
            .then((data) => {

                var productos = data.products;
                cardContainer.innerHTML = ''; // esta línea pone el elemento seleccionado (cardContainer) en blanco

                // GENERA UNA CARD P/PRODUCTO
                productos.forEach((product) => {
                    var cardDiv = document.createElement('div');
                    cardDiv.className = 'col-md-4'; // esto sirve para darle adaptavilidad a la pantalla (con Bootstrap)

                    cardDiv.innerHTML = `
                        <div class="card mb-4">
                        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">$${product.price}</p>
                            <button class="btn btn-success mt-auto">COMPRAR</button>
                        </div>
                        </div>
                ` ;

                    //AGREGA EVENTO AL BOTON COMPRAR
                    const botonAgregar = cardDiv.querySelector('button');
                    botonAgregar.addEventListener('click', () => {
                        agregarAlCarrito(product);
                    });

                    //AGREGA LA CARD AL CONTENEDOR
                    cardContainer.appendChild(cardDiv);

                });
            });
            // .catch((error) => console.error('Error', error));
    }


    //AGREGA PRODUCTOS AL CARRO DE COMPRAS
    function agregarAlCarrito(product)
    {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.title} ha sido agregado al carrito!`);
    }


    //CARGA INICIAL
    fetchProductos()

});



