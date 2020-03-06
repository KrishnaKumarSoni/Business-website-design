// var canvas = document.querySelector('#whatIsCanvas');
// var ctx = canvas.getContext('2d');

// canvas.width = 450;
// canvas.height= 600;

// /***********************************************UTILITY FUNCTIONS*****************************************/

// function isoTriangleUtility(x, y, a, b, v){
// 	this.a = a;
// 	this.b = b;
// 	this.x = x;
// 	this.y = y;
// 	this.altitudeLength = Math.sqrt((b*b) - (a*a*0.25));
// 	this.vel = v;

// 	if(this.vel.x < 0 ) this.factor = Math.PI;
// 	else this.factor = 0;
// 	ctx.translate(this.x, this.y);
// 	ctx.rotate(this.factor + Math.PI/2 - Math.atan(-this.vel.y/this.vel.x));
// 	ctx.moveTo(0, -(2/3)*this.altitudeLength);
// 	ctx.lineTo((this.a)/2, (1/3)*this.altitudeLength);
// 	ctx.lineTo(-(this.a)/2, (1/3)*this.altitudeLength);
// 	ctx.lineTo(0, -(2/3)*this.altitudeLength);
// 	ctx.strokeStyle="white";
// 	// ctx.fillStyle="#6d6d6d";
// 	ctx.stroke();
// 	ctx.fill();
// 	ctx.rotate(this.factor - Math.PI/2 + Math.atan(-this.vel.y/this.vel.x));
// 	ctx.translate(-this.x, -this.y);
// }

// function guidelines(){
// 	ctx.strokeStyle="red";
// 	ctx.lineWidth = 0.5;
// 	ctx.beginPath();
// 	ctx.moveTo(0, 0);
// 	ctx.lineTo(0, canvas.height);
// 	ctx.stroke();
// 	ctx.moveTo(0, 0);
// 	ctx.lineTo(-canvas.width, 0);
// 	ctx.stroke();
// 	ctx.moveTo(0, 0);
// 	ctx.lineTo(0, -canvas.height);
// 	ctx.stroke();
// 	ctx.moveTo(0, 0);
// 	ctx.lineTo(canvas.width, 0);
// 	ctx.stroke();
// 	ctx.closePath();
// }
// function randomVector(mag){
// 	var theta = Math.random()*(Math.PI*2);

// 	if(mag) magnitude = mag;
// 	else magnitude = Math.random();

// 	return Victor(mag*Math.cos(theta), mag*Math.sin(theta));
// }

// function distance(x1, y1, x2, y2){
// 	return Math.sqrt((x2 - x1)*(x2-x1) + (y2-y1)*(y2-y1));
// }

// function circle(x, y, rad){
// 	ctx.beginPath();
// 	ctx.arc(x, y, rad, 0, Math.PI*2, false);
// 	ctx.closePath();
// }
// function map(n, start1, stop1, start2, stop2, withinBounds) {
//   var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
//   if (!withinBounds) {
// 	return newval;
//   }
//   if (start2 < stop2) {
// 	return this.constrain(newval, start2, stop2);
//   } else {
// 	return this.constrain(newval, stop2, start2);
//   }
// };

// function fillRectCentered(x, y, w, h){
// 	ctx.fillRect(x - (w/2), y - (h/2), w, h);
// }

// function randomIn(min, max){
// 	return Math.random()*(max-min) + min;
// }

// /***********************************************UTILITY FUNCTIONS END HERE*****************************************/
// function Star(){
// 	this.x = randomIn(0, canvas.width);
// 	this.y = randomIn(0, canvas.height); 
// 	this.vel = randomIn(0.5, 2);
// 	this.radius = 3;

// 	this.update = function(){
// 		this.x += this.vel;
// 		ctx.beginPath();
// 		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
// 		ctx.fillStyle = 'white';
// 		ctx.fill();
// 		ctx.closePath();
// 	}

// 	this.show = function(){
// 		ctx.beginPath();
// 		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
// 		ctx.fillStyle = 'white';
// 		ctx.fill();
// 		ctx.closePath();
// 	}

// }

// var stars = [];
// var numberOfStars = 20;

// function init(){
// 	for(i=0; i<numberOfStars; i++){
// 		stars.push(new Star());
// 	}
// }
// init();




