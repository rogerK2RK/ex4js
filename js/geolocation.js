export function getPosition() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve(position.coords),
                (error) => reject(`Erreur de géolocalisation : ${error.message}`)
            );
        } else {
            reject('La géolocalisation n\'est pas supportée par ce navigateur.');
        }
    });
}