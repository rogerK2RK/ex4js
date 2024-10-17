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


const apiKey = '6262ddd0c19b7323ed0f1a971e7d812f';

const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const resultsList = document.querySelector('#resultsList');
const baseUrl  = 'https://api.themoviedb.org/3'

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value;
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Vérifier si `data.results` est bien un tableau
        if (Array.isArray(data.results)) {
            // Utiliser `data.results` qui contient le tableau des films
            resultsList.innerHTML = data.results.map(movie => {
                // Création de l'affichage pour chaque film
                return `
                    <li>
                        <h3>${movie.title}</h3>
                        <p>${movie.overview || 'Description non disponible'}</p>
                    </li>
                `;
            }).join('');
        } else {
            // Si `data.results` n'est pas un tableau, afficher un message d'erreur
            resultsList.innerHTML = `<p>Aucun résultat trouvé.</p>`;
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        resultsList.innerHTML = `<p>Erreur lors de la récupération des données.</p>`;
    });
});