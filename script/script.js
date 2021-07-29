var main = document.getElementById("mainView");
var ctx = main.getContext("2d");
var pix = ctx.create;
var width = main.width / 36,
  height = main.height / 36;
var x = main.width / 2 - width,
  y = main.height - 2 * height;

//---Moving Function---
var move = 25;
function goesRight() {
  if (x < main.width - 3 * width) x += move;
}

function goesLeft() {
  if (x > 0) x -= move;
}

function goesDown() {
  if (y < main.height - 2 * height) {
    y += move;
  }
}

function goesUp() {
  if (y > 0) {
    y -= move;
  }
}
//-----------------------

//---Transform
var head = new Object();
head.x = x + width;
head.y = y;
function setHead(x, y) {
  head.x = x;
  head.y = y;
}

function drawMainCharUp() {
  ctx.beginPath();
  ctx.rect(x + width, y, width, height);
  ctx.fill();
  ctx.rect(x, y + height, width, height);
  ctx.fill();
  ctx.rect(x + width, y + height, width, height);
  ctx.fill();
  ctx.rect(x + 2 * width, y + height, width, height);
  ctx.fill();
  ctx.closePath();
}

function drawMainCharDown() {
  ctx.beginPath();
  ctx.rect(x + width, y + 2 * height, width, height);
  ctx.fill();
  ctx.rect(x, y + height, width, height);
  ctx.fill();
  ctx.rect(x + width, y + height, width, height);
  ctx.fill();
  ctx.rect(x + 2 * width, y + height, width, height);
  ctx.fill();
  ctx.closePath();
}

function drawMainCharLeft() {
  ctx.beginPath();
  ctx.rect(x + width, y, width, height);
  ctx.fill();
  ctx.rect(x, y + height, width, height);
  ctx.fill();
  ctx.rect(x + width, y + height, width, height);
  ctx.fill();
  ctx.rect(x + width, y + 2 * height, width, height);
  ctx.fill();
  ctx.closePath();
}
function drawMainCharRight() {
  ctx.beginPath();
  ctx.rect(x + width, y, width, height);
  ctx.fill();
  ctx.rect(x + 2 * width, y + height, width, height);
  ctx.fill();
  ctx.rect(x + width, y + height, width, height);
  ctx.fill();
  ctx.rect(x + width, y + 2 * height, width, height);
  ctx.fill();
  ctx.closePath();
}

var statusMain = "u";
function drawMainChar() {
  switch (statusMain) {
    case "u":
      drawMainCharUp();
      setHead(x + width, y);
      break;
    case "d":
      drawMainCharDown();
      setHead(x + width, y + 2 * height);
      break;
    case "l":
      drawMainCharLeft();
      setHead(x, y + height);
      break;
    case "r":
      drawMainCharRight();
      setHead(x + 2 * width, y + height);
      break;
    default:
      break;
  }
}

//-------------------------------------------------

var wB = width - 10,
  hB = height - 10;
var bullLoc = new Object();
(bullLoc.xB = head.x), (bullLoc.yB = head.y);

function drawBullet() {
  ctx.beginPath();
  ctx.rect(xB, yB, wB, hB);
  ctx.fill();
  ctx.closePath();
}

function shoot(){

}

function draw() {
  ctx.clearRect(0, 0, main.width, main.height);
  drawMainChar();
  drawBullet();
}

// function shoot(){
//   switch(){

//   }
// }

function up(){
  if (statusMain != "u") statusMain = "u";
  else goesUp();
}

function down(){if (statusMain != "d") statusMain = "d";
        else goesDown();}

function left(){
  if (statusMain != "l") statusMain = "l";
        else goesLeft();
}

function right(){
  if (statusMain != "r") statusMain = "r";
        else goesRight();
}

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    var countKey;
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
        shoot();
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
