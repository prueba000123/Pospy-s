import { showDataCarrito } from "../modules/carrito.js";
import { showCards } from "../modules/showCard.js";
import { showModal } from "../modules/showModal.js";

let contenedorFrutas = document.getElementById('containerFruta');
let contenedorLeche = document.getElementById('containerLeche');
let contenedorPopsy = document.getElementById('containerPopsy');
let contenedorModal = document.getElementById('contenedorModal');
let contenedorModalCarrito = document.getElementById('contenedorModalCarrito');
let botonCarrito = document.getElementById('showCarrito')
let dataCarrito = JSON.parse(localStorage.getItem('carrito'));
let carrito = dataCarrito !== null ? dataCarrito : [] ;

document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch('http://localhost:4000/paletas');
    let data = await res.json();

    let paletasFruta = data.filter(item => item.categorie == 'fruta');
    let paletasPopsy = data.filter(item => item.categorie == 'popsy');
    let paletasLeche = data.filter(item => item.categorie == 'leche');

    showCards(paletasFruta, contenedorFrutas);
    showCards(paletasLeche, contenedorLeche);
    showCards(paletasPopsy, contenedorPopsy);

})

// DESPLEGAR EL MODAL
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-outline-primary')) {
        let id = e.target.id;
        showModal(id, contenedorModal);
    }
})


//AGREGAR AL CARRITO
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('carrito')) {
        let id = e.target.id;
        let producto = JSON.parse(localStorage.getItem('producto'));


        if (carrito.length === 0) {
           producto.units = 1
            carrito.push(producto);
            alert("Producto agregado de forma exitosa");
        } else {
            
            let prueba = carrito.find(item => item.id == id);

            if(prueba === undefined){
                producto.units = 1
                carrito.push(producto);
                alert("Producto agregado de forma exitosa");
            } else {
                alert("el producto ya se encuentra en el carrito")
            }
        }

        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
})

botonCarrito.addEventListener('click', () => {
    let data = JSON.parse(localStorage.getItem('carrito'));
    showDataCarrito(data, contenedorModalCarrito)
})


document.addEventListener('click', (e) => {
    if(e.target.classList.contains('sumar')){
        carrito[e.target.id].units++;
        showDataCarrito(carrito, contenedorModalCarrito)
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('restar')){
        carrito[e.target.id].units--;
        showDataCarrito(carrito, contenedorModalCarrito)
    }
})