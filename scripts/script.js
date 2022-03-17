import { showCards } from "../modules/showCard.js";

let contenedorFrutas = document.getElementById('containerFruta');
let contenedorLeche = document.getElementById('containerLeche');
let contenedorPopsy =  document.getElementById('containerPopsy');

document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch('http://localhost:4000/paletas');
    let data = await res.json();

    let paletasFruta = data.filter(item => item.categorie == 'fruta' );
    let paletasPopsy = data.filter(item => item.categorie == 'popsy');
    let paletasLeche = data.filter(item => item.categorie == 'leche');

   showCards(paletasFruta, contenedorFrutas);
   showCards(paletasLeche, contenedorLeche);
   showCards(paletasPopsy, contenedorPopsy);

}) 