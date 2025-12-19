const Directions = [1, -1];

class Box {
  constructor(ctx, x, y, imageSrc) {
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

    this.image = new Image();
    this.image.src = imageSrc;

    // sprite settings
    this.frameWidth = 64;
    this.frameHeight = 64;
  }

  /* ---------- getters ---------- */
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

  /* ---------- draw ---------- */
  draw(frameIndex = 0) {
    if (!this.image.complete) return;

    this.ctx.drawImage(
      this.image,
      frameIndex * this.frameWidth, // sprite X
      0,                             // sprite Y
      this.frameWidth,
      this.frameHeight,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  /* ---------- update ---------- */
  update() {
    this.checkBorderCollision();

    this.position.x += this.speed * this.direction.x;
    this.position.y += this.speed * this.direction.y;
  }

  /* ---------- wall collision ---------- */
  checkBorderCollision() {
    if (this.right >= 500) {
      this.position.x = 500 - this.size.width;
      this.direction.x *= -1;
    } else if (this.left <= 0) {
      this.position.x = 0;
      this.direction.x *= -1;
    }

    if (this.bottom >= 500) {
      this.position.y = 500 - this.size.height;
      this.direction.y *= -1;
    } else if (this.top <= 0) {
      this.position.y = 0;
      this.direction.y *= -1;
    }
  }

  /* ---------- mouse hit ---------- */
  isPointingAtMe(mouseX, mouseY) {
    return (
      mouseX > this.left &&
      mouseX < this.right &&
      mouseY > this.top &&
      mouseY < this.bottom
    );
  }
}

export default Box;
