(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./utils":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
module.exports={
	domReady:require('./dom_ready')
};
},{"./dom_ready":2}]},{},[1]);