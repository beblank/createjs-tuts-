var app = (function(){
	var foo = 'green';
	var message=function (){
		var newMessage = "My favourite color is" + foo;
		return newMessage;
	};
	return{
		message : message
	};
});

console.log(app.message());