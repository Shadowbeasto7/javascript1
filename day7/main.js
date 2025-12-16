import Box from "./box.js";


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const boxes = [];
const BOX_SIZE = 50;
const BOX_COUNT = 10;

// helper: check overlap between two boxes
function isOverlapping(a, b) {
  return (
    a.right > b.left &&
    a.left < b.right &&
    a.bottom > b.top &&
    a.top < b.bottom
  );
}
const img = new Image();
img.src = "..\day7\image\ram.png"; 

// create boxes without overlap
for (let i = 0; i < BOX_COUNT; i++) {
  let box;
  let overlapping;

  do {
    overlapping = false;

    const x = Math.random() * (canvas.width - BOX_SIZE);
    const y = Math.random() * (canvas.height - BOX_SIZE);

    const dirX = Math.random() < 0.5 ? -1 : 1;
    const dirY = Math.random() < 0.5 ? -1 : 1;

    box = new Box(x, y, dirX, dirY);

    // check against already created boxes
    for (let j = 0; j < boxes.length; j++) {
      if (isOverlapping(box, boxes[j])) {
        overlapping = true;
        break;
      }
    }
  } while (overlapping);

  boxes.push(box);
}

// collision handling (same as before)
function handleBoxCollision(a, b) {
  if (isOverlapping(a, b)) {
    a.directionX *= -1;
    a.directionY *= -1;
    b.directionX *= -1;
    b.directionY *= -1;

    // separate boxes
    a.position.x += a.directionX * a.speed;
    a.position.y += a.directionY * a.speed;
    b.position.x += b.directionX * b.speed;
    b.position.y += b.directionY * b.speed;
  }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].update(canvas);
  }

  // collision checks
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      handleBoxCollision(boxes[i], boxes[j]);
    }
  }

  // draw
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].draw(ctx);
  }

  requestAnimationFrame(loop);
}

loop();
