let hearts = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  // Display all hearts
  for (let heart of hearts) {
    heart.display();
    heart.update();
  }
}

function mouseClicked() {
  // Create a new heart at the mouse position
  let newHeart = new Heart(mouseX, mouseY);
  hearts.push(newHeart);
}

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.alpha = 255;
  }
  
  display() {
    fill(160, 32, 240, this.alpha);
    noStroke();
    beginShape();
    let xoff = 0.1;
    for (let a = 0; a < TWO_PI; a += 0.1) {
      let x = 16 * pow(sin(a), 3);
      let y = -(13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
      vertex(this.x + x * this.size, this.y + y * this.size);
    }
    endShape(CLOSE);
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2;
    if (this.alpha <= 0) {
      // Remove the heart from the array when it disappears
      hearts.splice(hearts.indexOf(this), 1);
    }
  }
}
