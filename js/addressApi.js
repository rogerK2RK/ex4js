export function getAddressFromCoords({ latitude, longitude }) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.display_name)
        .catch(() => {
            throw new Error('Impossible de récupérer l\'adresse.');
        });
}