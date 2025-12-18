import Box from "./box.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const boxes = [];

for (let i = 0; i < 10; i++) {
  const randomX = Math.random() * (500 - 100);
  const randomY = Math.random() * (500 - 100);
  boxes.push(new Box(ctx, randomX, randomY));
}

function loop() {
  requestAnimationFrame(loop);
  ctx.clearRect(0, 0, 500, 500);

  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const boxA = boxes[i];
      const boxB = boxes[j];

      if (
        boxA.left < boxB.right &&
        boxA.right > boxB.left &&
        boxA.top < boxB.bottom &&
        boxA.bottom > boxB.top
      ) {
        const overlapX = Math.min(
          boxA.right - boxB.left,
          boxB.right - boxA.left
        );

        const overlapY = Math.min(
          boxA.bottom - boxB.top,
          boxB.bottom - boxA.top
        );

        if (overlapX < overlapY) {
          // split horizonatlly
          const moveDistance = overlapX / 2;
          if (boxA.position.x < boxB.position.x) {
            boxA.position.x -= moveDistance;
            boxB.position.x += moveDistance;
          } else {
            boxA.position.x += moveDistance;
            boxB.position.x -= moveDistance;
          }

          boxA.direction.x *= -1;
          boxB.direction.x *= -1;
        } else {
          const moveDistance = overlapY / 2;
          // split vertically
          if (boxA.position.y < boxB.position.y) {
            boxA.position.y -= moveDistance;
            boxB.position.y += moveDistance;
          } else {
            boxA.position.y += moveDistance;
            boxB.position.y -= moveDistance;
          }

          boxA.direction.y *= -1;
          boxB.direction.y *= -1;
        }
      }
    }
    boxes[i].update();
    boxes[i].draw();
  }
}
loop();

document.addEventListener("click", function (e) {
  for (let i = 0; i < boxes.length; i++) {
    const isPointing = boxes[i].isPointingAtMe(e.x, e.y);
    if (isPointing) {
      boxes[i].color = "blue";
      boxes[i].speed = 0;
    }
  }
});
