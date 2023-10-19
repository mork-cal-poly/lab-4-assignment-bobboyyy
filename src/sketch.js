function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawSloth(100, 300);
}

function drawSloth(x, y) {
  push();
  translate(x, y);
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
