
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



class Box {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = 10;
    this.height=10;
    this.height=10;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  
}

const colors = ["red", "green", "black","blue"];

const boxes = [];
for (let i = 0; i < 100; i++) {
  const i = 10;
  const x = Math.floor(Math.random() * (canvas.width - i * 2)) + i;
  const y = Math.floor(Math.random() * (canvas.height - i * 2)) + i;

  const Color = colors[Math.floor(Math.random() * colors.length)];
  const box = new Box(x, y, Color);
  boxes.push(box);
}

 for(let i=0; i<100;i++){
    boxes[i].draw();
}