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