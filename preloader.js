
const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(29, 36, 40, 1);
`;
lottieContainer.style.display = 'none';

document.body.appendChild(lottieContainer);

function hideOverlay() {
    lottieContainer.style.display = 'block';
    // Substitua pela URL direta do seu arquivo JSON do Lottie.
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas' se preferir
        loop: true,
        autoplay: true,
        path: 'https://matheustkful.github.io/preloaderJSLottie/preLoader.json',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    hideOverlay(); // Teste sem o setTimeout
});

//window.addEventListener('load', hideOverlay);
