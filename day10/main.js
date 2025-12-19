import Box from "./box.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const imageSrc = "./spider.png";
const boxes = [];

/* ---------- spawn without overlap ---------- */
function isOverlapping(newBox, list) {
  return list.some(box =>
    newBox.left < box.right &&
    newBox.right > box.left &&
    newBox.top < box.bottom &&
    newBox.bottom > box.top
  );
}

for (let i = 0; i < 10; i++) {
  let box;
  do {
    const x = Math.random() * 400;
    const y = Math.random() * 400;
    box = new Box(ctx, x, y, imageSrc);
  } while (isOverlapping(box, boxes));

  boxes.push(box);
}

/* ---------- sprite animation ---------- */
let imageClipIndex = 0;
const TOTAL_FRAMES = 4;

setInterval(() => {
  imageClipIndex = (imageClipIndex + 1) % TOTAL_FRAMES;
}, 100);

/* ---------- main loop ---------- */
function loop() {
  requestAnimationFrame(loop);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const A = boxes[i];
      const B = boxes[j];

      if (
        A.left < B.right &&
        A.right > B.left &&
        A.top < B.bottom &&
        A.bottom > B.top
      ) {
        const overlapX = Math.min(
          A.right - B.left,
          B.right - A.left
        );

        const overlapY = Math.min(
          A.bottom - B.top,
          B.bottom - A.top
        );

        if (overlapX < overlapY) {
          const move = overlapX / 2;
          if (A.position.x < B.position.x) {
            A.position.x -= move;
            B.position.x += move;
          } else {
            A.position.x += move;
            B.position.x -= move;
          }
          A.direction.x *= -1;
          B.direction.x *= -1;
        } else {
          const move = overlapY / 2;
          if (A.position.y < B.position.y) {
            A.position.y -= move;
            B.position.y += move;
          } else {
            A.position.y += move;
            B.position.y -= move;
          }
          A.direction.y *= -1;
          B.direction.y *= -1;
        }
      }
    }

    boxes[i].update();
    boxes[i].draw(imageClipIndex);
  }
}

loop();

/* ---------- mouse click fix ---------- */
document.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  for (let box of boxes) {
    if (box.isPointingAtMe(mouseX, mouseY)) {
      box.color = "blue";
      box.speed = 0;
    }
  }
});
