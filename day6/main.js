import Box from "./box";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const box = [];

for(let i=0;i<10;i++)
{
    const randomX=Math.random()*(500-100);
    const randomY=Math.random()*(500-100);
    box.push(new Box(ctx,randomX,randomY));
}

function loop(){
    requestAnimationFrame(loop);
    ctx.clearRect(0,0,500,500);

    for(let i=0;i<box.length;i++){
    box.update();
    box.draw();
 }
}
loop();