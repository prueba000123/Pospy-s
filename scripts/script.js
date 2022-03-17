import { showCards } from "../modules/showCard.js";

let contenedorFrutas = document.getElementById('containerFruta');

document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch('http://localhost:4000/paletas');
    let data = await res.json();

    let paletasFruta = data.filter(item => item.categorie == 'fruta' );
    let paletasPopsy = data.filter(item => item.categorie == 'popsy');
    let paletasLeche = data.filter(item => item.categorie == 'leche');

    console.log(paletasFruta)
   showCards(paletasFruta, contenedorFrutas)

}) 