document.addEventListener('DOMContentLoaded', () => {
    const carritoItemsStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const carritoTableBody = document.getElementById('carrito-items');
    const totalGeneral = document.getElementById('total');
    let total = 0;


    //CARGA ITEMS A TABLA DE CARRITO
    carritoItemsStorage.forEach(item => {
        var row = document.createElement('tr');

        //NOMBRE DEL ITEM
        var nombreCelda = document.createElement('td');
        nombreCelda.textContent = item.title;
        row.appendChild(nombreCelda);

        //PRECIO DEL ITEM
        var precioCelda = document.createElement('td');
        precioCelda.textContent = item.title;
        row.appendChild(precioCelda);

        //CANTIDAD DE ITEMS (hardcodeado a 1 item)
        var cantidadCelda = document.createElement('td');
        cantidadCelda.textContent = 1;
        row.appendChild(cantidadCelda);

        //SUBTOTAL
        var subtotal = item.price;
        var subtotalCelda = document.createElement('td');
        subtotalCelda.textContent = `$${subtotal}`;
        row.appendChild(subtotalCelda);

        //AGREGA FILA A LA TABLA
        carritoTableBody.appendChild(row);

        //SUMA AL TOTAL
        total += subtotal;

    });

    //MUESTRA EL TOTAL
    totalGeneral.textContent = total.toFixed(2);

});

    //BOTON VUELVE A INICIO Y VACIA CARRITO
    document.getElementById('limpiar-carrito').addEventListener('click', () => {
        
        Swal.fire({
            title: "Volviendo al inicio. Carrito vacío!",
            icon: "error",
            });

    localStorage.removeItem('cart');
    setTimeout(() => {
        window.location.href='index.html';
    }, 1000); // el 4000 es para redirigir a Home despues de 1"
});

    //BOTON FINALIZAR COMPRA
    document.getElementById('finalizar-compra').addEventListener('click', () => {
        
        Swal.fire({
            title: "La transacción #00012 ha sido procesada",
            icon: "success",
            });
    
    localStorage.removeItem('cart');
    setTimeout(() => {
        window.location.href='index.html';
    }, 4000);
    
});