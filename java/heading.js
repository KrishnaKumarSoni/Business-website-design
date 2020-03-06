var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
})

function randomIn(min, max){
	return Math.random()*(max-min) + min;
}

function map(n, start1, stop1, start2, stop2, withinBounds) {
  var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
	return newval;
  }
  if (start2 < stop2) {
	return this.constrain(newval, start2, stop2);
  } else {
	return this.constrain(newval, stop2, start2);
  }
};

var text = [
"1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
"1", "2", "3", "4", "5", "6", "7", "8", "9"	
];

function randomColor(index){
	var colorArray = [
		"rgba(0, 0, 0, 0.0)",
		"rgba(0, 0, 0, 0.1)",
		"rgba(0, 0, 0, 0.2)",
		"rgba(0, 0, 0, 0.3)",
		"rgba(0, 0, 0, 0.4)",
		"rgba(0, 0, 0, 0.5)",
		"rgba(0, 0, 0, 0.6)",
		"rgba(0, 0, 0, 0.7)"
	];

	return colorArray[index];
}

function number(number, rollNumber){
	this.x = randomIn(0, canvas.width);
	this.y = randomIn(0, canvas.height); 

	if(randomIn(0, 1) < 0.4) this.y = randomIn(canvas.height/2 + 30, canvas.height); 
	else if(randomIn(0, 1) < 0.8) this.y = randomIn(0, canvas.height/2 - 30);
	else this.y = randomIn(canvas.height - 30, canvas.height + 30);
	
	this.fontSize = randomIn(24, 70);
	this.vel = randomIn(0.5, 2);
	this.number = number;
	this.rollNumber = rollNumber

	this.blue = randomIn(0, 0).toString();
	this.red = randomIn(0, 0).toString();
	this.green = randomIn(0, 0).toString();
	// this.blue = randomIn(0, 2).toString();
	// this.red = randomIn(0, 255).toString();
	// this.green = randomIn(0, 100).toString();

	if(randomIn(0, 1) > 0.5){
		this.move = 1;
	}else this.move = -1;

	

	this.update = function(){

		// if(this.x < canvas.width/2) this.fontSize = map(this.x, 0, canvas.width/2, 24, 70);
		// else this.fontSize = map(this.x, canvas.width/2, canvas.width, 70, 24);

		if(this.x > canvas.width){
			this.x = 0;
			this.y = randomIn(0, canvas.height);
		}else if(this.x < -2*this.fontSize ){
			this.x = canvas.width;
			this.y = randomIn(0, canvas.height);
		}

		if(this.move == 1) this.x -= this.vel;
		else if( this.move == -1) this.x += this.vel;

		this.show(this.fontSize);
	}

	this.show = function(size){
		// c.fillStyle = randomColor(Math.floor(map(this.x, 0, canvas.width/2, 0, 10)));
		if(this.x < canvas.width /2)
		var alpha = map(this.x, 0, canvas.width/2, 0.5, 0.05);
		else var alpha = map(this.x, canvas.width/2 + 1, canvas.width, 0.05, 0.5);
		c.fillStyle = "rgba(" + this.red + "," + this.green + "," + this.blue + ","  + alpha.toString() + ")";
		c.font = 1.2*size.toString() + "px eliantoregular";
		c.fillText(text[this.number], this.x, this.y);
	}

}

var numbers = [];
var numberOfNumbers;
if(canvas.width < 768) numberOfNumbers = 20;
else numberOfNumbers = 50;

function init(numberOfNumbers){
	for(i=0; i<numberOfNumbers; i++){
		var n = Math.floor(randomIn(0, 40));

		numbers.push(new number(n, i));
	}
}
init(numberOfNumbers);

var canvas2 = document.querySelector('#whatIsCanvas');
var ctx = canvas2.getContext('2d');

canvas2.width = 400;
canvas2.height= 600;

/***********************************************UTILITY FUNCTIONS*****************************************/
function circle(x, y, rad){
	ctx.beginPath();
	ctx.arc(x, y, rad, 0, Math.PI*2, false);
	ctx.closePath();
}
function randomIn(min, max){
	return Math.random()*(max-min) + min;
}
/***********************************************UTILITY FUNCTIONS END HERE*****************************************/
function Star(){
	this.z = randomIn(2, 10);
	this.x = randomIn(0, canvas2.width);
	this.y = randomIn(0, canvas2.height); 
	this.vel = map(this.z, 2, 10, 0.2, 2);
	this.radius = map(this.z, 2, 10, 0.5, 2.8);

	this.update = function(){
		this.x += this.vel;

		if(this.x > canvas2.width) this.x = 0;
		this.show();
	}

	this.show = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
		ctx.fill();
		ctx.closePath();
	}
}
var stars = [];
var numberOfStars = 50;
var info = [];
info[0] = '';
info[1] = 'You have admirable leadership \n ability and  charisma when \nshowing others a way.';
info[2] = 'You are down to earth and \n poeple love your presence.\n\n';
info[3] = 'You are very generous and \n believe in teamwork.\n\n';
info[4] = 'You are an authority person, \nhardworking and \nan organisor.\n\n';
info[5] = 'You like freedom and love to \ntravel, and an art-lover.\n\n';
info[6] = 'You are sincere and very much \naffectionate. You are always \nfinancially sound.\n\n';
info[7] = 'You are highly intellectual and\n  have a good interest in philosophical \ndiscussions.\n';
info[8] = 'You are very hardworking and \n good in finances.\n\n';
info[9] = 'You believe in humanity. You \n are a good human being, hardworking\n and highly motivated.\n';
var randomInfo = Math.floor(randomIn(1, 10));

function initStars(){
	for(i=0; i<numberOfStars; i++){
		stars.push(new Star());
	}
}
initStars();
var y = canvas.height/2;
var count = 0;

function animate(){

	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	ctx.clearRect(0, 0, canvas2.width, canvas2.height);

	for(i=0; i<numbers.length; i++){
		numbers[i].update();
	}
	for(var j = 0; j<stars.length; j++){
		stars[j].update();
	}

	if(count == 240){
		count = 0;
		randomInfo = Math.floor(randomIn(1, 10));
	}

	ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
	ctx.font = '20px Helvetica';
	ctx.textAlign = 'center';
	var lines = info[randomInfo].split('\n');
	var yOffset = 100;
	ctx.font = '280px Verdana';
	ctx.fillText(randomInfo, canvas2.width/2, canvas2.height/2 + 24);
	ctx.font = '20px Montserrat';
	ctx.fillText(lines[0], canvas2.width/2, canvas2.height/2 + 24 + yOffset);
	ctx.fillText(lines[1], canvas2.width/2, canvas2.height/2 + 48 + yOffset);
	ctx.fillText(lines[2], canvas2.width/2, canvas2.height/2 + 72 + yOffset);
	count ++;
}
animate();

var preload = document.getElementById('preloader');
window.addEventListener('load', function(){
	preload.style.display = 'none';
	alert("The word Numerology for this website is mentioned as Numrology as per expert's own numeric analysis.");
});


