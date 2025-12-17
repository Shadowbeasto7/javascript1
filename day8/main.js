const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const gravity = 0.5;
const bounceFactor = 0.7; // energy loss
const groundY = canvas.height - 50;

const balls = [];

// Ball class
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.velocityY = 20;
    this.color = "red";
  }

  update() {
    // gravity
    this.velocityY += gravity;
    this.y += this.velocityY;

    // ground collision
    if (this.y + this.radius >= groundY) {
      this.y = groundY - this.radius;
      this.velocityY *= -bounceFactor; // bounce
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

// Create new ball on click
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;

  balls.push(new Ball(x, 50));
});

// Draw ground
function drawGround() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, groundY, canvas.width, 40);
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGround();

  balls.forEach(ball => {
    ball.update();
    ball.draw();
  });

  requestAnimationFrame(animate);
}

animate();
