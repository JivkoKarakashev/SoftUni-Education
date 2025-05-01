function attachGradientEvents() {
    const gradientElement = document.querySelector('div#gradient');
    const resultDivElement = document.querySelector('div#result');

    const mouseMoveEventListener = (e) => {
        console.log(e);
        const resultPercent = Math.floor(e.offsetX / e.currentTarget.clientWidth * 100);
        resultDivElement.textContent = `${resultPercent}%`;
    };
    const mouseOutEventListener = () => {
        resultDivElement.textContent = '';
    };

    gradientElement.addEventListener('mousemove', mouseMoveEventListener);    
    gradientElement.addEventListener('mouseout', mouseOutEventListener);
}