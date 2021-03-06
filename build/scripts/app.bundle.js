(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./utils/create_subclass":3}],2:[function(require,module,exports){
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
},{"./Hero":1,"./utils":5}],3:[function(require,module,exports){
module.exports = createSubclass;

function createSubclass(Superclass, name, methods){
	var Subclass;

	Subclass = function(){this.initialize.apply(this, arguments);};
	//Eval('Subclass = function' + name + '(){this.initialize.apply(this, arguments);};');

	Subclass.prototype = new Superclass();
	for (var key in methods){
		if (methods.hasOwnProperty(key)){
			Subclass.prototype[key] = methods[key];
		}
	}


	return Subclass;
}
},{}],4:[function(require,module,exports){
module.exports = domReady;

/** Fires when dom is ready, can be used at any time as result is cached
@ param {Function} func callback function for when dom is ready
@return {Any} return whatever func returns
*/

function domReady(func){
	var self = this, 
	args = Array.prototype.slice.call(arguments, 1);
	if (isReady.call(this))
		return callFunc();
	else
		document.addEventListener('readystatechange', callFunc);

	function callFunc() {
		// body...
		document.removeEventListener('readystatechange', callFunc);
		return func.apply(self, args);
	}
}

domReady.isReady = isReady;

/**
Return true if dom is ready
@return {Boolean}
*/
function isReady() {
	var readyState = document.readyState;
	return readyState == 'loading' ? false : readyState;
}
},{}],5:[function(require,module,exports){
module.exports={
	domReady:require('./dom_ready'),
	createSubclass: require('./create_subclass')
};
},{"./create_subclass":3,"./dom_ready":4}]},{},[2]);