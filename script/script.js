var main = document.getElementById("mainView");
var ctx = main.getContext("2d");
var pix = ctx.create;
var width = 25,
  heigth = 25;
var x = 0,
  y = 0;

var move = 25;

ctx.beginPath();
ctx.rect(x, y, width, heigth);
ctx.fill();

function right() {
  if (x != main.width-25) {
    x += move;
  }
 
}

function left() {
  if (x != 0) x -= move;
  //   ctx.clearRect(0, 0, main.width, main.height);
}

function down() {
  if (y != main.height - 25) {
    y += move;
  }
  //   ctx.clearRect(0, 0, main.width, main.height);
}

function up() {
  if (y != 0) {
    y -= move;
  }
  //   ctx.clearRect(0, 0, main.width, main.height);
}

function shoot() {}

function drawMainChar() {
  ctx.beginPath();
  ctx.rect(x, y, width, heigth);
  ctx.fill();
  ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, main.width, main.height);
    drawMainChar();
}

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    switch (event.key) {
      case "ArrowDown":
        // code for "down arrow" key press.
        down();
        break;
      case "ArrowUp":
        // code for "up arrow" key press.
        up();
        break;
      case "ArrowLeft":
        // code for "left arrow" key press.
        left();
        break;
      case "ArrowRight":
        // code for "right arrow" key press.
        right();
        break;
      case " ":
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);

setInterval(draw, 1);
// the last option dispatches the event to the listener first,
// then dispatches event to window
