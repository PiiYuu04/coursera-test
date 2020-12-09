(function (window) {
	var names = ["Yaakov", "Paul", "Jen", "Jason", "John", "Larry", "Frank", "Paula", "Laura", "Jim"];
	for (var i=0; i < names.length; i++) {
	  var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter == "j") {
		  speakerbye.speak(names[i]);
		} else {
		  speakerbye.speak(names[i]);
		}
	}
})(window);