var controller = document.getElementById('controller');

// change controller's location

function moveController(x) {
  if(x >= 0 && x + 2 < document.body.clientWidth) {
    document.getElementById('img1').style.width = x + 'px';
    controller.style.left = x - 20 + 'px';
    currentWidth = (x / document.body.clientWidth) * 100;
  }
}

// set animation time

function setAnimationTime(s) {
  controller.style.transitionDuration = s + 's';
  document.getElementById('img1').style.transitionDuration = s + 's';
}

// controller's location fixed on resize

var currentWidth = 30;
window.addEventListener('resize', function() {
  document.getElementById('img1').style.width = currentWidth + '%';
  controller.style.left = 'calc(' + currentWidth + '% - 20px)';
});

// for pc and mobile with click and touch

document.body.addEventListener('mousedown', function(e) {
  setAnimationTime(0.7);
  let x = e.pageX;
  moveController(x);
})

document.body.addEventListener('mouseup', function() {
  setAnimationTime(0);
})

// for pc with drag

dragElement(controller);

function dragElement(element) {
  
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    controller.style.cursor = 'grabbing';
  }

  function elementDrag(e) {
    let x = e.pageX;
    moveController(x);
    setAnimationTime(0);
  }
  
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    controller.style.cursor = 'grab';
  }
}

// for mobile with drag
  
controller.addEventListener('touchmove', function(e) {
  let x = e.targetTouches[0].pageX;
  moveController(x);
  setAnimationTime(0);
})
  
controller.addEventListener('touchend', function() {
  setAnimationTime(0);
})