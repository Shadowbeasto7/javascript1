// // const canvas = document.getElementById("canvas");
// // const ctx=canvas.getContext("2d");

// // class Box {
// //   constructor(x,y,color) {
// //     this.x = x;
// //     this.y = y;
// //     this.color="green";
// //     this.width = 50;
// //     this.height = 50;
// //   }

// //   draw() {
// //     ctx.beginPath();
// //     ctx.rect(this.x, this.y, this.width, this.height);
// //     ctx.fillStyle=this.color;
// //     ctx.fill();
// //   }
// // }
// // // canvas.width;
// // // canvas.height;

// // const box = new Box(10,20,"red");
// // box.draw();


// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");


// class Box {
//   constructor(x, y, color) {
//     this.x = x;
//     this.y = y;
//     this.color = ["red","green","blue"]|| "red";
//     this.width = 10;
//     this.height = 10;
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.width, this.height,2*Math.PI);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//     ctx.beginPath();
// // ctx.arc(45,50,20,0,2*Math.PI);
// //  ctx.fill();
// //  ctx.fillStyle="red";
// //  ctx.fill();
//   }
// }

// // const x = Math.floor(Math.random() * canvas.width);
// // const y = Math.floor(Math.random() * canvas.height);
// // const box = new Box(x, y, "blue");
// // box.draw();

// const boxes = [];
// for (let i = 0; i < 100; i++) {
//   const x = Math.floor(Math.random() * canvas.width);
//   const y = Math.floor(Math.random() * canvas.height);
//   const color= () => color[Math.floor(Math.random() * color.length)];
//   const box = new Box(x, y, "color");
//   boxes.push(box);
// }


// console.log(boxes);

// for(let i=0; i<100;i++){
//     boxes[i].draw();
// }

