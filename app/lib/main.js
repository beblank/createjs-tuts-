var utils = require('./utils'),
	domReady = utils.domReady,
	Hero = require('./Hero');

var c = createjs;
var stage = new c.Stage('main');

console.log('Game Started: EaselJS version: ' + c.EaselJS.version);

domReady(function(){
	var hero1 = new Hero('Hero 1', 50, 50);
	console.log(hero);
	stage.addChild(hero1);

	

	c.Ticker.timingMode = c.Ticker.RAF;
	c.Ticker.setFPS(60);
	c.Ticker.addEventListener('tick', onUpdate);
});

function onUpdate(){
	stage.update();
}