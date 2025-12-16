// box.js
class Box {
  constructor(x, y, directionX, directionY, color) {
    this.position = { x, y };

    this.size = {
      width: 50,
      height: 50,
    };

    this.directionX = directionX;
    this.directionY = directionY;
    this.speed = 1;
    this.color = color || "red";
  }

  
  get left() {
    return this.position.x;
  }

  get right() {
    return this.position.x + this.size.width;
  }

  get top() {
    return this.position.y;
  }

  get bottom() {
    return this.position.y + this.size.height;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  update(canvas) {
    this.checkWallCollision(canvas);

    this.position.x += this.speed * this.directionX;
    this.position.y += this.speed * this.directionY;
  }

  checkWallCollision(canvas) {
    if (this.left <= 0 || this.right >= canvas.width) {
      this.directionX *= -1;
    }

    if (this.top <= 0 || this.bottom >= canvas.height) {
      this.directionY *= -1;
    }
  }
}

export default Box;
