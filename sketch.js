/* 1366 by 728 */

var mode = 1;
// hoppy cat game
var grassXs = [];
var grassWidth;
var grass;
var Cat;
var food = [];
var kitty;
var kittyintheair;
// snake game
var s;
var scl = 20;
var snakeFood;

//
function windowResized() {
	resizeCanvas(window.outerWidth*.83, window.outerHeight*.70)
}
//
function setup() {
	createCanvas(window.outerWidth*.83, window.outerHeight*.70);

	////Hoppy Cat
	grassWidth = ceil(width*0.05);
	for (var i = 0; i < 25; i++) {
		grassXs.push(i*grassWidth);
	}
	grass = loadImage("Images/grass.jpg");
	kitty = loadImage("Images/kitty.jpg");
	kittyintheair = loadImage("Images/kittyintheair.png");
	Cat = new cat(100,300);
	for (var i=0; i < 1000; i++) {
		food.push(new catEatFood(i*71 + 350,random(30,260)));
	}
	console.log(Cat);
	console.log(food);

	////Snake Game
    s = new Snake();
    snakeFood = createVector(random(width),random(height));
    frameRate(10);
}

//master function
function draw() { 

	if(mode === 1 ) {
// static
    background(101, 133, 214);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    console.log(grassWidth);
    for (var i = 0; i < grassXs.length; i++) {
        image(grass, grassXs[i], height*0.85, grassWidth, grassWidth);
        grassXs[i] -= 1;
        if (grassXs[i] <= -grassWidth) {
            grassXs[i] = width;
        }
    }
    
    
    for (var i = 0; i < food.length; i++) {
        food[i].draw();
        Cat.checkForFoodGrab(food[i]);
        food[i].x -= 1;
    }
    
    
    textSize(18);
    text("Score: " + Cat.food, 20, 30);
    
    if (Cat.food/food.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }
    
    if (keyIsPressed && keyCode === 32) {
        Cat.hop();
    } else {
        Cat.fall();
    }
   	Cat.draw();
    }

    else if(mode === 2) { 
        if (s.eat(snakeFood)) {
            pickLocation();
        }
    	background(51);
        s.death();
        s.update();
        s.show();
        fill(255,0,100);
        rect(snakeFood.x,snakeFood.y,scl,scl);
       
    }

    else if(mode === 3) {
    	background(0,255,0);
    }

    else if(mode === 4) {
		background(255,0,0);
    }
};








