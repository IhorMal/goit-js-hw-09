const ref = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    bodyColor: document.querySelector('body'),
}

const { buttonStart, buttonStop, bodyColor} = ref;
let ntervalId = null;

buttonStart.addEventListener('click', startRandomColor);

buttonStop.addEventListener('click', stopRandomColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startRandomColor() {
    buttonStart.disabled = true;
    buttonStop.disabled = false;

    ntervalId =  setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stopRandomColor() {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    
    clearInterval(ntervalId);
    ntervalId = null
}

