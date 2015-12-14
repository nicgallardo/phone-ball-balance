var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');
var score = document.querySelector('.score');
var blackHoleLocation = document.querySelector('.blackhole-location')

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;
var blackHole = {
  x: 10,
  y: 10
}

var point = 1;
//need to loop through bombs object constantly to see if they are hit
//needs to loop through bombs to make sure new bomb isnt placed where the hole is when player achieves point
//create bomb needs to loop through the bombs to make sure bombs are not placed on top of another 
function handleOrientation(event) {
  var x = Math.floor(event.beta);
  var y = Math.floor(event.gamma);

  if(blackHole.x == x && blackHole.y == y) {
    // fn addAPoint
    // blackHole.x = ra
    // blackHole.y = rand()
    score.innerHTML = "points : " + point + "\n";
    point++;
    changeHole();
  }

  output.innerHTML = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  x += 90;
  y += 90;

  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";
}

function changeHole() {
  var xCoord = Math.floor(Math.random()*(10, 170));
  var yCoord = Math.floor(Math.random()*(10, 170));
  blackHole.x = correctNumb(xCoord);
  blackHole.y = correctNumb(yCoord);

  function correctNumb(numb){
    if(numb == 0 ) return 90;
    if(numb == 90) return 0;
    return numb > 90 ? numb/2 : -(-numb + 90);
  }

  var hole = document.querySelector('.hole');
  hole.style.top = xCoord + 'px';
  hole.style.left = yCoord + 'px';

  blackHoleLocation.innerHTML = "blackHole.x : " + blackHole.x + "\n";
  blackHoleLocation.innerHTML += "blackhole.y : " + blackhole.y + "\n";
  //create bombs. The coridances will be placed in an object which will be iterated over//
  createBomb();
}

var bombs = {};
var iteration = point;
function createBomb() {
  var xCoord = Math.floor(Math.random()*(10, 170));
  var yCoord = Math.floor(Math.random()*(10, 170));
  bombX = correctNumb(xCoord);
  bombY = correctNumb(yCoord);

  function correctNumb(numb){
    if(numb == 0 ) return 90;
    if(numb == 90) return 0;
    return numb > 90 ? numb/2 : -(-numb + 90);
  }

  bombs[iteration] = {"x": bombX, "y": bombY};

  var newBomb = document.createElement('bomb');
  newBomb.className = 'bomb';
  newBomb.style.top = xCoord;
  newBomb.style.top = yCoord;

}

window.addEventListener('deviceorientation', handleOrientation);
