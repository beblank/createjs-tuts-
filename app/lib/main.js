var utils = require('./utils'),
	domReady = utils.domReady;

var c = createjs;
var stage = new c.Stage('main');

console.log('Game Started: EaselJS version: ' + c.EaselJS.version);

domReady(function(){
	var group = new c.Container();
	group.x = 200;
	group.y = 175;
	stage.addChild(group);

	var circle = new c.Shape();
	circle.graphics.beginFill('green').drawCircle(0,0,50);
	circle.x = 100;
	circle.y = 100;
	group.addChild(circle);

	var square = new c.Shape();
	square.graphics.beginFill('green').drawRect(0,0,50,50);
	square.x = 200;
	square.y = 100;
	group.addChild(square);

	c.Ticker.timingMode = c.Ticker.RAF;
	c.Ticker.setFPS(60);
	c.Ticker.addEventListener('tick', onUpdate);
});

function onUpdate(){
	stage.update();
}