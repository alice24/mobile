//basically the same as the DOM example
var swipe = function(swipe) {
  //new method name
  swipe.cjsSwipe = function(obj,stage) {
    var distance = 0; // changed to accommodate mouse swipe testing
    var time = 200; // ms; changed to accommodate mouse swipe testing

    var mouseX;
    var mouseY;

    obj.addEventListener("mousedown", function(e) {
      //target to grab the square location
      var startX = e.stageX;
      var startY = e.stageY;

      stage.addEventListener("pressmove", getMouse);
      function getMouse(e) {
        mouseX = e.stageX;
        mouseY = e.stageY;
      };

      var swipeTimeout = setTimeout(function() {
        var diffX = mouseX - startX;
        var diffY = mouseY - startY;

        stage.removeEventListener("mousemove", getMouse);

        var swipeX = 0;
        var swipeY = 0;

        if (Math.abs(diffX) > Math.abs(diffY)) { // swiping in x
            if (diffX <-distance) {
                swipeX = -1
            }
            if (diffX > distance) {
                swipeX = 1;
            }
        } else {
            if (diffY <-distance) {
                swipeY = -1
            }
            if (diffY > distance) {
                swipeY = 1;
            }
        }

        var swipeEvent = new createjs.Event("swipe");
        swipeEvent.swipeX = swipeX;
        swipeEvent.swipeY = swipeY;
        obj.dispatchEvent(swipeEvent);
      }, time);
    })
  }
  return swipe;
}(swipe || {})
