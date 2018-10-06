var cat = function(x,y) {
	this.x = x;
	this.y = y;
	this.img = image(kitty || kittyintheair);
	this.food = 0;
};

cat.prototype.draw = function() {
	fill(255,0,0);
	this.y = constrain(this.y, 0, height-80);
    image(kitty, this.x, this.y, 40 , 40);
};

cat.prototype.hop = function() {
    this.img = image(kitty,this.x, this.y, 40, 40);
    this.y -= 3;
};  

cat.prototype.fall = function() {
    this.img = image(kitty,this.x, this.y, 40 ,40);
    this.y += 3;
};

cat.prototype.checkForFoodGrab = function(catFood) {
	if ((catFood.x >= (this.x) && catFood.x <= (this.x + 40)) &&
		catFood.y >= (this.y) && catFood.y <= (this.y + 40))
	 {
        catFood.y = -400;
        this.food++;
    }
};

//catfood function
var catEatFood = function(x,y) {
	this.x = x;
	this.y = y;
};

catEatFood.prototype.draw = function() {
	fill(0,0,0);
	rectMode(CENTER);
	rect(this.x, this.y, 5, 5);
};
