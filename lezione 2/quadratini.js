let rects = [];
let numRects = 300

function setup() { 
  frameRate(60)
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER)

  for (let i=0; i<numRects; i++){
    var x = random(width);
    var y = random(height);
    var grandezza = random(5, 10);
    var q = new Quadrato(x, y, grandezza);
    rects.push(q);
  }
} 

function draw() { 
  background(0)
  for (let i=0; i<rects.length; i++){   
    let q = rects[i];
    q.update();
    q.display();
  }
}

class Quadrato {
  constructor (x, y, grand) {
    this.x = x; 
    this.y = y;
    this.g = grand;

    let r = random(0,255)
    let g = random(0,150)
    let b = random(0,255)
    this.color = color(r, g, b);

    this.noiseIncrement = 0.01;
    this.pixelSpeed = 2;
    this.noisePositionX = random(1000);
    this.noisePositionY = random(1000);
  }
  
  update () {
    this.noisePositionX += this.noiseIncrement;
    this.noisePositionY += this.noiseIncrement;

    var n1 = noise(this.noisePositionX);
    var n2 = noise(this.noisePositionY);
    var deltaX = map(n1, 0,1, -this.pixelSpeed,this.pixelSpeed);
    var deltaY = map(n2, 0,1, -this.pixelSpeed,this.pixelSpeed);
    
    this.x += deltaX;
    this.y += deltaY;
  }
  
  display () {
    
    fill(this.color)
    noStroke()
    rect(this.x, this.y, this.g, this.g);
  }
}


function mousePressed () {
  var x = mouseX;
  var y = mouseY;
  var grandezza = random(5, 10);
  var q = new Quadrato(x, y, grandezza);
  rects.push(q);
}

