(function (window) {
  var YaakovGreeter = {};
  YaakovGreeter.name = "Yaakov";
  var Greeting = "Hello ";
  YaakovGreeter.sayHello = function () {
	console.log(Greeting +  YaakovGreeter.name);
  }

  window.YaakovGreeter = YaakovGreeter;
})(window);
 
 (function (window) {
  var JoeGreeter = {};
  JoeGreeter.name = "Joe";
  var Greeting = "Hello ";
  JoeGreeter.sayHello = function () {
	console.log(Greeting +  JoeGreeter.name);
  }

  window.JoeGreeter = JoeGreeter;
})(window);
