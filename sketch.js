function setup() {
  createCanvas( 800 , 800 );
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




c = color('hsla(160, 100%, 50%, 0.5)');
fill(c); 
rect(55, 10, 45, 80);  
}

function draw() {
 rect(mouseX, mouseY, 55, 55);

}
