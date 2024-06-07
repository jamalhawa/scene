// setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

draw();

// Put ALL drawing code in the draw function
function draw() {
  //floor
  ctx.fillStyle = "burlywood";
  ctx.fillRect(0, 350, 500, 150);

  //background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 350);

  //pole
  ctx.fillStyle = "gray";
  ctx.fillRect(470, 200, 15, 200);

  ctx.fillStyle = "gray";
  ctx.fillRect(440, 200, 40, 15);

  //backboard
  ctx.fillStyle = "white";
  ctx.fillRect(440, 160, 8, 80);

  //rim
  ctx.fillStyle = "orange";
  ctx.fillRect(410, 215, 30, 5);

  //netting
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.fillRect(411, 220, 28, 25);

  //paint
  ctx.lineWidth = 4;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(120, 350);
  ctx.lineTo(120, 450);
  ctx.stroke();

  ctx.lineWidth = 4;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(120, 450);
  ctx.lineTo(150, 500);
  ctx.stroke();

  ctx.lineWidth = 4;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(200, 350);
  ctx.lineTo(200, 450);
  ctx.stroke();

  ctx.lineWidth = 4;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(120, 450);
  ctx.lineTo(420, 450);
  ctx.stroke();

  ctx.lineWidth = 4;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(420, 500);
  ctx.lineTo(420, 350);
  ctx.stroke();

  // the shoota
  let shooter = document.getElementById("shoota");
  ctx.drawImage(shooter, 30, 275, 150, 120);

  // ball
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(240, 200, 13, 0, 3 * Math.PI);
  ctx.fill();

  //speech
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText(`"thats in."`, 20, 260);
}
