var utils = require('./utils'),
	domReady = utils.domReady,
	Hero = require('./Hero');

var c = createjs;
var stage = new c.Stage('main');

console.log('Game Started: EaselJS version: ' + c.EaselJS.version);

domReady(function(){
	
	var hero1 = new Hero('Hero1', 50, 50);
	//hero1.Hero$initialize();
	console.log(hero1);

	c.Ticker.timingMode = c.Ticker.RAF;
	c.Ticker.setFPS(60);
	c.Ticker.addEventListener('tick', onUpdate);
});

function onUpdate(){
	stage.update();
}

function onGroupUpdate(){
	this.rotation -=1;
}