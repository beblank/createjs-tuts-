var createSubclass = require('./utils/create_subclass'),
	Container = createjs.Container;

module.exports = createSubclass(Container, 'Hero', {
	initialize: Hero$initialize, 
	fire: Hero$fire
});

function Hero$initialize(name, x, y){
	Container.prototype.initialize.apply(this, arguments);
	this.name = name;
	this.x = x; 
	this.y = y;
}

function Hero$fire() {
	Console.log("fire!");
	
}