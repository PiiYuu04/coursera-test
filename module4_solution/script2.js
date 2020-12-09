(function (window) {
  var you = {};
  you.name = "Earth";
  var piyu = "Hi ";
  you.sayHi = function () {
    console.log(piyu + you.name);
  }

  window.you = you;

})(window);
