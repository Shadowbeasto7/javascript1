const Directions = [1, -1];

class Box {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.position = {
      x: x,
      y: y,
    };

    this.size = {
      width: 50,
      height: 50,
    };

    this.color = "red";
    this.speed = 1;
    this.direction = {
      x: Directions[Math.floor(Math.random() * Directions.length)],
      y: Directions[Math.floor(Math.random() * Directions.length)],
    };
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

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update() {
    this.checkBorderCollision();

    this.position.x = this.position.x + this.speed * this.direction.x;
    this.position.y = this.position.y + this.speed * this.direction.y;
  }
  isPointingAtMe(mouseX, mouseY) {
    return (
      mouseX > this.left &&
      mouseX < this.right &&
      mouseY > this.top &&
      mouseY < this.bottom
    );
  }

  checkBorderCollision() {
    if (this.position.x + this.size.width >= 500) {
      this.direction.x = -1;
    } else if (this.position.x <= 0) {
      this.direction.x = 1;
    }

    if (this.position.y + this.size.height >= 500) {
      this.direction.y = -1;
    } else if (this.position.y <= 0) {
      this.direction.y = 1;
    }
  }
}

export default Box;
