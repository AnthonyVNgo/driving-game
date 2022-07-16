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

function edoTenseiJutsu(event) {
  // const myinterval = setInterval(start, 10);
  if (event.key === ' ' && f1Position.ignitionOn === false) {
    // f1Position.ignitionOn = true;
  }
}

// function start() {
//   f1Position.x += 10;
//   f1Element.style.left = f1Position.x + 'px';
// }

document.addEventListener('keydown', edoTenseiJutsu);

// if (event.key === ' ' && f1Position.ignitionOn === true) {
// }
