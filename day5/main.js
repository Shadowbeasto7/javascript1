import Box from "./box.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const box = new Box(ctx);



// setInterval(function(){
//     // console.log("thi");
//     // ctx.clearRect(0,0,500,500);
//     // box.update();
//     // box.draw(); 

// },600)
function loop(){
    requestAnimationFrame(loop);
    ctx.clearRect(0,0,500,500);
    box.update();
    box.draw(); 
}
loop();
