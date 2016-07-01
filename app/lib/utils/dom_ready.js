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