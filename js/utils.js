export function waitFor(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

export function showError(message) {
    const errorElement = document.querySelector('#message-geo');
    errorElement.innerHTML = `<p style="color: red;">${message}</p>`;
}

export function hideError() {
    const errorElement = document.querySelector('#message-geo');
    errorElement.innerHTML = '';
}