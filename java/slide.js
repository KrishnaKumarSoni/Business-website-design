var images = [
	document.getElementById('mark'), 
	document.getElementById('obama'), 
	document.getElementById('dhoni'), 
	document.getElementById('ambani'), 
	document.getElementById('gates'), 
	document.getElementById('modi'), 
	document.getElementById('sachin'), 
	document.getElementById('AB'),
	document.getElementById('pichai'),
	document.getElementById('kohli'),
	document.getElementById('nehwal'),
	document.getElementById('trump'),
	document.getElementById('mark1'), 
	document.getElementById('obama1'), 
	document.getElementById('dhoni1'), 
	document.getElementById('ambani1'), 
	document.getElementById('gates1'), 
	document.getElementById('modi1'), 
	document.getElementById('sachin1'), 
	document.getElementById('AB1'),
	document.getElementById('pichai1'),
	document.getElementById('kohli1'),
	document.getElementById('nehwal1'),
	document.getElementById('trump1')
];


setInterval(function(){
	for(var i=0; i<images.length; i++){
		if(parseInt(images[i].style.left) < -1000){
			var temp = images[i];
			images.splice(0, 1);
			images.push(temp);
			images[images.length-1].style.left = parseInt(images[images.length - 2].style.left) + 200 + 'px';
		}
		var a = images[i].style.left;
		a = parseInt(a) - 1;
		images[i].style.left = a + "px";
	}	
}, 10);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


//FUNCTIONS TO GET POSITION OF AN ELEMENT RELATIVE TO THE DOM:
function getOffsetLeft( elem )
{
	var offsetLeft = 0;
	do {
		if ( !isNaN( elem.offsetLeft ) )
		{
			offsetLeft += elem.offsetLeft;
		}
	} while( elem = elem.offsetParent );
	return offsetLeft;
}

function getOffsetTop( elem )
{
	var offsetTop = 0;
	do {
		if ( !isNaN( elem.offsetTop ) )
		{
			offsetTop += elem.offsetTop;
		}
	} while( elem = elem.offsetParent );
	return offsetTop;
}	

