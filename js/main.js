/** EX 1 Géolocalisation **/

import { getPosition } from './geolocation.js';
import { getAddressFromCoords } from './addressApi.js';
import { showError, hideError, waitFor } from './utils.js';

const divGeoMess = document.querySelector('#message-geo');
const btnGeo = document.querySelector('#get-geoloca');

btnGeo.addEventListener('click', () => {
    getPosition()
        .then(coords => {
            return getAddressFromCoords(coords);
        })
        .then(address => {
            divGeoMess.innerHTML = `<p>Je suis à l'adresse suivante : ${address}</p>`;
        })
        .catch(error => {
            showError(error);
            waitFor(3).then(() => hideError());
        });
});


/** EX 2 Cinéma **/


const apiKey = 'VOTRE_CLE_API_TMDB';

const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const resultsList = document.querySelector('#resultsList');
const baseUrl  = 'https://api.themoviedb.org/3'

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        departList.innerHTML = data.map(movie => {
            console.log(movie);
        }).join('');
    })
    // Ajout d'une gestion d'erreur
    .catch(error => console.error('Erreur:', error)); 
   
});