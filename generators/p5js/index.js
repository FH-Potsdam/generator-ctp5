console.log("Hello sketch.js");
let x = 0;
let canvas = undefined;
function setup() {
  canvas = createCanvas(100, 100);
  canvas.parent("sketch");
}

function draw() {
  background(255, 20);
  ellipse(x, width / 2, 5, 5);
  x++;
  if (x >= width) {
    x = 0;
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    if (canvas === undefined) {
      throw new Error("Could not find your canvas");
    }
    saveCanvas(canvas, "sketch", "png");
  }
}
