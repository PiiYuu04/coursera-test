(function (window) {
	var speakerbye = {};
	var speakWord = "Good Bye";
	speakerbye.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	window.speakerbye = speakerbye;
})(window);