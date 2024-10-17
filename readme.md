# TP 4

## Rendu

Le rendu peut se faire soit par un dépôt github (recommandé), soit en le déposant sur l'ide de la 3wa, soit par une archive (mettre votre nom dans l'archive) à envoyer par discord.

## Objectifs

* Manipuler les promesses
* Envoyer des requêtes HTTP

Il y aura 2 mini-projets :
1. Exercice de refactorisation
2. Exercice avec une API REST

## Instructions

### 1. Refactorisation de l'exercice "Adresse"

Le but va être de refactoriser tout l'exercice "Adresse" (ex 2 d'hier). Il faudra découper le code en fonctions qui seront dispatchées dans différents fichiers.

* Créer une fonction *getPosition()* qui renvoie la position de l'utilisateur ou une erreur si une erreur survient. Elle doit être créée dans un fichier *geolocation.js*.
* Créer une fonction *getAddressFromCoords* qui renvoie l'adresse correspondant aux coordonnées passées en paramètre ou une erreur si aucune adresse ne correspond. Elle doit être créée dans un fichier *addressApi.js*.
* Créer une fonction *waitFor* qui attend x secondes (x est un paramètre) avant d'exécuter le code. Elle doit être créée dans un fichier *utils.js*.
* Créer une fonction *showError* qui affiche un message d'erreur passé en paramètre.
* Créer une fonction *hideError* qui cache le message d'erreur.

Le code du fichier *main.js* après refactorisation doit ressembler à ceci :

```javascript
geolocationButton.addEventListener('click', () => {
    getPosition()
        .then(coords => getAddressFromCoords(coords))
        .then(address => {
            addressText.textContent = address;
        })
        .catch(error => {
            showError(error);
            
            waitFor(3).then(() => {
                hideError(); 
            });
        });
});
```

### 2. Utiliser l'API TMDB

#### Mise en place

Utiliser l'API TMDB pour afficher une liste de films correspondant à une recherche.

Pour pouvoir utiliser l'API il faudra créer un compte sur le site [https://www.themoviedb.org/](https://www.themoviedb.org/) puis vous créer une clé API (depuis les préférences de votre compte).

#### Documentation

[Documentation API](https://developer.themoviedb.org/reference/intro/getting-started)

[Endpoint search](https://developer.themoviedb.org/reference/search-movie)

#### Instructions

Créer un champ de recherche puis un bouton de validation. Lorsque le formulaire de recherche est soumis, envoyer une requête vers l'API pour récupérer la liste des films correspondants à la recherche. Afficher ces films sur la page (image, titre, description). 

Si le temps vous manque, afficher uniquement le titre (même si c'est uniquement dans la console).

[BONUS] Afficher la liste des résultats sous forme de pagination.

**NB :** Le code doit être le plus structuré possible (créer des fichiers avec des fonctions/classes à exporter/importer, essayer de rendre le code le plus réutilisable possible)