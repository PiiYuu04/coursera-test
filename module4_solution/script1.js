(function (window) {
  var piyu = {};
  piyu.name = "PinarYunus";
  var you = "Hello ";
  piyu.sayHello = function () {
    console.log(you + piyu.name);
  }

  window.piyu = piyu;

})(window);
