const Direction=[1,-1]
class Box {
  constructor(ctx,x,y) {
    this.ctx = ctx;
    this.position = {
      x: x,
      y: y,
  
    };

    this.size = {
      width: 100,
      height: 100,
    };

    this.color = "red";
    this.speed = 0.5;
    this.direction ={
      x:Direction[Math.floor(Math.random()*Direction.length)],
      y:Direction[Math.floor(Math.random()*Direction.length)],
    }
    ;
  }
  
  draw() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    
  }

  update() {
    this.position.x=this.position.x+1 * this.direction * this.speed * this.direction.x;
    // this.position.y=this.position.y+1;
    this.position.y=this.position.y+1*this.direction*this.speed*this.direction.y;
}


    checkBorderCollision(){
    if(this.position.x+this.size>=500){
      this.direction.x=-1;
  }
  else if(this.position.x<=0){
    this.direction.x=1;

  }
  if(this.position.y+this.size>=500){
      this.direction.y=-1;
  }
  else if(this.position.y<=0){
    this.direction.y=1;

  }

    // write code here during class

  }
}


export default Box;
