let flowerX = 0;
let flowerY = 0;

let slothX = 0;
let slothY = 0;
let slothClick = false;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background("#404040");
  push();
  translate(200, 320);
  strokeWeight(0);
  pan();
  pop();

  drawSloth(120, 230);
  if (slothClick == true) {
    slothX += 1;
  }

  //drawFlowers(200, 150);
}

function drawSloth(x, y) {
  push();
  translate(x + slothX, y + slothY);
  //push();
  //translate(200, 400);
  fill("#6D7347");
  //right shoulder
  ellipse(30, -65, 30, 50);
  //right hand nails
  fill(212, 197, 195);
  ellipse(75, -55, 15, 5);
  ellipse(75, -50, 15, 5);
  ellipse(75, -45, 15, 5);
  fill("#6D7347");
  //right arm
  ellipse(40, -50, 70, 30);
  fill(250, 233, 230, 98);
  //hand
  circle(63, -50, 15);
  fill("#6D7347");
  //body
  ellipse(0, -50, 80, 100);
  //left hand nails
  fill(212, 197, 195);
  ellipse(-25, -7, 5, 15);
  ellipse(-30, -7, 5, 15);
  ellipse(-35, -7, 5, 15);
  fill("#6D7347");
  //left arm
  ellipse(-30, -50, 40, 80);
  //leg
  ellipse(30, -15, 70, 40);
  //head
  ellipse(0, -125, 85, 65);
  //eye ring
  fill(85, 85, 85);
  ellipse(20, -125, 30, 20);
  ellipse(-20, -125, 30, 20);
  fill(50, 50, 50, 200);
  //eyes
  circle(-17, -125, 13);
  circle(17, -125, 13);
  //nose
  triangle(-5, -115, 5, -115, 0, -110);
  fill(0, 0, 0, 0);
  //mouth
  arc(0, -110, 25, 25, 0, PI);
  //pop();
  pop();
}

function pan() {
  //stovetop
  fill("#212121");
  rect(-130, -320, 400, 400);
  stroke("white");
  strokeWeight(1);
  circle(0, 50, 170);
  circle(230, -160, 170);
  circle(230, 50, 170);

  //pan handle
  strokeWeight(0);
  fill("grey");
  stroke("grey");
  strokeWeight(30);
  line(-200, -160, 0, -160);

  //spatula

  //handle
  stroke("brown");
  strokeWeight(10);
  line(-80, -290, 10, -290);

  //spatula
  stroke("rgb(80,80,80)");
  triangle(30, -290, 40, -305, 40, -275);

  //other part of handle
  strokeWeight(0);
  fill("grey");
  rect(10, -295, 18, 10);

  //other part of spatula
  stroke("grey");
  rect(45, -320, 60, 61);

  //pan
  strokeWeight(0);
  ellipse(0, -160, 180);
  fill("#575757");
  ellipse(0, -160, 165);
}

function drawFlowers(x, y) {
  push();
  translate(x + flowerX, y + flowerY);
  //flowers
  strokeWeight(5);
  stroke("green");
  line(-5, -120, -33, -160);
  line(5, -120, 30, -150);
  line(0, -120, 0, -180);

  //pedals
  strokeWeight(0);
  fill("yellow");
  //left
  ellipse(-45, -160, 25);
  ellipse(-30, -170, 25);
  ellipse(-30, -150, 25);
  ellipse(-23, -160, 25);

  //middle
  ellipse(-7, -183, 25);
  ellipse(5, -190, 25);
  ellipse(10, -180, 25);
  ellipse(3, -170, 22);

  //right
  ellipse(20, -150, 20);
  ellipse(30, -160, 25);
  ellipse(40, -150, 25);
  ellipse(33, -140, 22);

  //head of flower
  fill("brown");
  ellipse(-33, -160, 17);
  ellipse(30, -150, 17);
  ellipse(0, -180, 17);
  strokeWeight(0);

  //bottom of vase
  fill("#5F5D9C");
  ellipse(0, 0, 90, 200);

  //top of vase
  strokeWeight(0);
  fill("#5F5D9C");
  triangle(0, -60, -45, -125, 45, -125);

  pop();
}

function mouseClicked() {
  if (mouseX >= 120 && mouseX <= 282 && mouseY >= 80 && mouseY <= 244) {
    slothClick != slothClick;
  }
}
