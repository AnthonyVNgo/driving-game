var f1Position = {
  position: 0,
  x: 0,
  y: 0,
  ignitionOn: false
};

var f1Element = document.querySelector('#f1');

function steering(event) {
  if (event.key === 'ArrowDown') {
    f1Position.position = 1;
    f1Element.className = 'down';
  } else if (event.key === 'ArrowUp' && f1Position.position === 2) {
    f1Position.position = 3;
    f1Element.className = 'up-rev';
  } else if (event.key === 'ArrowUp') {
    f1Position.position = 3;
    f1Element.className = 'up';
  } else if (event.key === 'ArrowLeft' && f1Position.position === 3) {
    f1Position.position = 2;
    f1Element.className = 'rotate-counter-clock';
  } else if (event.key === 'ArrowLeft' && f1Position.position !== 2) {
    f1Position.position = 2;
    f1Element.className = 'left';
  } else if (event.key === 'ArrowRight') {
    f1Position.position = 0;
    f1Element.className = 'right';
  }
}

document.addEventListener('keydown', steering);

let interval;

function move() {
  if (f1Position.position === 0) {
    f1Position.x += 5;
    f1Element.style.left = f1Position.x + 'px';
  } else if (f1Position.position === 2) {
    f1Position.x -= 5;
    f1Element.style.left = f1Position.x + 'px';
  } else if (f1Position.position === 1) {
    f1Position.y += 5;
    f1Element.style.top = f1Position.y + 'px';
  } else if (f1Position.position === 3) {
    f1Position.y -= 5;
    f1Element.style.top = f1Position.y + 'px';
  }
}

function edoTenseiJutsu(event) {
  if (event.key === ' ' && f1Position.ignitionOn === false) {
    f1Position.ignitionOn = true;
    interval = setInterval(move, 25);
  } else if (event.key === ' ' && f1Position.ignitionOn === true) {
    f1Position.ignitionOn = false;
    clearInterval(interval);
  }
}

document.addEventListener('keydown', edoTenseiJutsu);
