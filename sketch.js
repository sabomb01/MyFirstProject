function setup() {
  createCanvas( 800 , 800 );
  var c = color(0, 100, 0, 30);  
fill(c);  
noStroke();  
}

function draw() {
  ellipse(mouseX, mouseY, 80, 80);  

}
