var f1Position = {
  position: 0
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
