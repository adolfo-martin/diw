document.addEventListener('DOMContentLoaded', setup);

let intervalId = undefined;

function setup(e) {
    setupButton();
    moveStarship();
}

function setupButton() {
    document.querySelector('#tDivButton')
        .addEventListener('click', destroyStarship);
}

function moveStarship() {
    let currentFrame = 0;
    const starShip = document.querySelector('#tDivStarship');

    intervalId = setInterval(
        () => {
            switch (currentFrame) {
                case 0:
                    currentFrame = 1;
                    starShip.classList.remove('frame-zero');
                    starShip.classList.add('frame-one');
                    break;
                case 1:
                    currentFrame = 2;
                    starShip.classList.remove('frame-one');
                    starShip.classList.add('frame-two');
                    break;
                case 2:
                    currentFrame = 0;
                    starShip.classList.remove('frame-two');
                    starShip.classList.add('frame-zero');
                    break;
            }
        },
        250
    )
}

function destroyStarship(e) {
    clearInterval(intervalId);
    const starShip = document.querySelector('#tDivStarship');
    starShip.classList.remove('frame-zero');
    starShip.classList.remove('frame-one');
    starShip.classList.remove('frame-two');
    starShip.classList.add('frame-three');
}