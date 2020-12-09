(function (window) {
	var speakerhello = {};
	var speakWord = "Hello";
	speakerhello.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	window.speakerhello = speakerhello;
})(window);