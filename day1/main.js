const canvas = document.getElementById("canvas");
const ctx=canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(0,0,100,100);

//  ctx.fillStyle = "red";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(50,50,20,0,2*Math.PI);
// ctx.fill();
// ctx.fillStyle="blue";
// ctx.fill();
// ctx.strokeStyle="red";
// ctx.stroke()

// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(200, 100);
// ctx.stroke();

ctx.beginPath();
ctx.rect(10,10,70,200);
ctx.fillStyle = "black";


ctx.fill();

ctx.beginPath();
ctx.rect(33,10,25,250);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(45,50,20,0,2*Math.PI);
 ctx.fill();
 ctx.fillStyle="red";
 ctx.fill();

 ctx.beginPath();
 ctx.arc(45,100,20,0,2*Math.PI);
 ctx.fill();
 ctx.fillStyle="yellow";
 ctx.fill();

 ctx.beginPath();
 ctx.arc(45,150,20,0,2*Math.PI);
 ctx.fill();
 ctx.fillStyle="green";
 ctx.fill();

 




