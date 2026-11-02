let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker();
}

function draw() {
  background(220, 20);

  walker.keyboard();
  walker.hitWall();
  walker.display();

  fill(0);
  noStroke();
  textSize(14);
  
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 20;
    this.hitCount = 0;
    this.justHit = false;
    this.r = 150;
    this.g = 150;
    this.b = 250;
  }

  keyboard() {
    let speed = 4;

    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x + speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x - speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y = this.y + speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y = this.y - speed;
    }
  }

  hitWall() {
    let hit = false;

    if (this.x < 0 || this.x > width) {
      this.x = constrain(this.x, 0, width);
      hit = true;
    }
    if (this.y < 0 || this.y > height) {
      this.y = constrain(this.y, 0, height);
      hit = true;
    }

    if (hit && !this.justHit) {
      this.hitCount = this.hitCount + 1;
      this.hitCount = this.hitCount % 13;
      this.justHit = true;

    } else if (!hit) {
      this.justHit = false;
    }
  }

  display() {
    noStroke();

    if (this.hitCount === 1) {
      fill(220, 220);
    } else if (this.hitCount === 2) {
      fill(100, 100, 250);
    } else if (this.hitCount === 3) {
      fill(50);
    } else if (this.hitCount === 4) {
      fill(100, 200, 150);
    } else if (this.hitCount === 5) {
      fill(180, 120, 220);
    } else if (this.hitCount >= 6 && this.hitCount <= 12) {
      fill(this.r, this.g, this.b, 200);
    } else {
      fill(150, 150, 250);
    }

    if (this.hitCount === 1) {
      this.size = 20;
    } else if (this.hitCount === 2) {
      this.size = 25;
    } else if (this.hitCount === 3) {
      this.size = 30;
    } else if (this.hitCount === 4) {
      this.size = 40;
    } else if (this.hitCount === 5) {
      this.size = 50;
    } else if (this.hitCount === 6) {
      this.size = 60;
    } else if (this.hitCount === 7) {
      this.size = 72;
    } else if (this.hitCount === 8) {
      this.size = 86;
    } else if (this.hitCount === 9) {
      this.size = 103;
    } else if (this.hitCount === 10) {
      this.size = 124;
    } else if (this.hitCount === 11) {
      this.size = 149;
    } else if (this.hitCount === 12) {
      this.size = 179;
    } else {
      this.size = 20;
    }

    if (this.hitCount === 2) {

      ellipse(this.x + random(-10, 10), this.y + random(-10, 10), this.size * 0.5);
    }
    
    else if (this.hitCount !== 1) {
      circle(this.x, this.y, this.size);
    }
  }
}
