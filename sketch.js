function setup() {
  createCanvas( 1000 , 1000 );
  noStroke();  
c = color('rgb(0,0,255)');
fill(c); 
rect(10, 10, 35, 35);  

c = color('rgb(0%, 0%, 100%)');
fill(c); 
rect(55, 10, 35, 35);  
c = color('rgba(0, 0, 255, 1)');
fill(c); 
rect(10, 55, 35, 35);  

c = color('rgba(0%, 0%, 100%, 1)');
fill(c);
rect(55, 55, 35, 35);  

}

function draw() {
 rect(mouseX, mouseY, 55, 55);

}
