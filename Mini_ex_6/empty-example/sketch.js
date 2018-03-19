
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

function draw() {
  for (var i = 0; i < 2; i++) {
    fill(random(100,125),random(130,160),242)
    ellipse(random(0, width), random(0, height), 35);
  }
if(mouseX>500){
fill(random(225,255),225,6);
ellipse(random(0, width), random(0, height), 35);
}
if(mouseY>500){
fill(252,random(117,167),200);
ellipse(random(0, width), random(0, height), 35);
}
}
