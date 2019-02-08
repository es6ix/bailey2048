// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function() {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

var imageList = [
  "img/bailey1.png",
  "img/bailey2.png",
  "img/bailey3.png",
  "img/bailey4.png",
  "img/bailey5.png",
  "img/bailey6.png",
  "img/bailey7.png",
  "img/bailey8.png",
  "img/bailey9.png",
  "img/bailey10.png",
  "img/bailey11.png",
  "img/bailey12.png",
  "img/bailey13.png",
  "img/bailey14.png",
  "img/bailey15.png",
  "img/bailey16.png",
  "img/bailey17.png",
  "img/bailey18.png",
  "img/bailey19.png"
];
for (var i = 0; i < imageList.length; i++) {
  var imageObject = new Image();
  imageObject.src = imageList[i];
}
