(function (window) {
  var JohnGreeter ={};
  JohnGreeter.name = "John";
  var Greeting = "Hello ";
  JohnGreeter.sayHello= function () {
   console.log(Greeting +  JohnGreeter.name);
  }	

window.JohnGreeter = JohnGreeter;

})(window);

(function (window) {
  var MarieGreeter ={};
  MarieGreeter.name = "Marie";
  var Greeting = "Hello ";
  MarieGreeter.sayHello= function () {
   console.log(Greeting +  MarieGreeter.name);
  }	

window.MarieGreeter = MarieGreeter;

})(window);










