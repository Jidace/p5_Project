let a;
var r, g, b;
let black = "true";

function setup() {
    //put setup code here
  createCanvas(1080, 720);
    r = random(255);
    g = random(255);
    b = random(255);
   
  stroke(255);
  a = height / 2;
}

function draw() {
    if (black === "true"){
        background("black");
    } else{
        background(r, g , b); 
    }
  
  line(0, a, width, a);
    //speed of line
  a = a - 1.25;
  if (a < 0) {
    a = height;  
  }
}
function mousePressed(){
    r = random(255);
    g = random(255);
    b = random(255);
   black = "false";
}
