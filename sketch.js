let input;
let img;
let canvas;
let imgSave;
let imgReset;
let rc;
let gc;
let bc;
let lineColor = 255;
let bgColor = 255;
let lineWeight = 5;
let lineTrig = 0;

function setup() {
  frameRate(60);
  canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  stroke(lineColor);
  background(bgColor);



  imgSave = createButton('Save Image');
  imgSave.parent('save-button');
  imgSave.mousePressed(saveImage);

  imgReset = createButton('Reset Image');
  imgReset.parent('reset-button');
  imgReset.mousePressed(reset);
}

function saveImage() {
  saveCanvas(canvas, 'mirrorDrawing', 'png');
}
function reset() {
  background(bgColor);
}

function draw() {
  background(255, 255, 255, 0)
  strokeWeight(lineWeight);
  stroke(lineColor);

  if (mouseIsPressed == true){
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, mouseY, width - pmouseX, pmouseY);

  if( lineTrig == 0) {
    lineColor = color(random(255),random(255),random(255));
    lineTrig = 1;
    }
  }
function keyPressed() {
  if (key == 'q') {
  lineDown();
  }
  if (key == 'w') {
  lineUp();
  }
}
function lineUp() {
  lineWeight++;
  console.log('Line weight increased, line weight = ' + lineWeight);
}


function lineDown() {
  if (lineWeight > 1) {
    lineWeight--;
    console.log('Line weight decreased, line weight = ' + lineWeight);
  } else {
    console.log('Line weight at minimum.');
  }
}

}
