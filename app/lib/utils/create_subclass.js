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