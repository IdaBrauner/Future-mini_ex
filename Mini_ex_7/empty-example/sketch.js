var blink;
var bobby = false;

function preload() {
  img = loadImage('data/tove.jpg')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  blink = loadStrings('data/Blink.txt')
  sind = loadStrings('data/Pigesind.txt')
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  textSize(14);
  textFont('Courier New');
  strokeWeight(1);
  stroke(255, 225, 6);
  fill(255, 225, 6);
    if(bobby == false) {
      for (var i = 0; i < blink.length; i++) {
        text(blink[i], width/2+200, 200+i*20);
        text(sind[i], width/2-600, 100+i*20);
    }
  } else {
      for (var i = 0; i < blink.length; i++) {
        if(i%2==0){
          text(sind[i], width/2+200, 200+i*20);
          text(blink[i], width/2-600, 100+i*20);
          } else {
              text(blink[i], width/2+200, 200+i*20);
              text(sind[i], width/2-600, 100+i*20);
      }
      }
  }
}

function mousePressed() {
  bobby = !bobby;
}
