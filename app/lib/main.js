var utils = require('./utils'),
	domReady = utils.domReady;

var c = createjs;

console.log('Game Started: EaselJS version: ' + c.EaselJS.version);

domReady(function(){
	var stage = new c.Stage('main');

	var circle = new c.Shape();
	circle.graphics.beginFill('green').drawCircle(0,0,50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);

	var square = new c.Shape();
	square.graphics.beginFill('green').drawRect(0,0,50,50);
	square.x = 200;
	square.y = 100;
	stage.addChild(square);

	stage.update();
});