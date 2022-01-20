function playVideo() {
  var introSound = document.getElementById("introSound");

  var video = document.getElementById("background-video");
  introSound.play();
  video.play();
  introSound.addEventListener("ended", function () {
    window.location.href = "gallery.html";
  });
}