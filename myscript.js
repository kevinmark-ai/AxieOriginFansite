var _audio = document.getElementById("bgm");
var icon = document.getElementById("switch");
var bgmSwitch = true;
_audio.play();
function isPlay(bgmSwitch) {
  if (bgmSwitch) {
    _audio.play();
  } else {
    _audio.pause();
  }
}
icon.onclick = function () {
  bgmSwitch = !bgmSwitch;
  isPlay(bgmSwitch);
};

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var closeModal = document.getElementById("modalClose");
var cardContainer = document.getElementsByClassName("card");
btn.onclick = function () {
  modal.style.opacity = "1";
  modal.style.pointerEvents = "all";
  btn.style.opacity = "0";
};
closeModal.onclick = function () {
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";
  btn.style.opacity = "1";
};

var practiceBanner = document.getElementsByClassName("practiceBanner")
var rankedBanner = document.getElementsByClassName("rankedBanner")
var tournamentBanner = document.getElementsByClassName("tournamentBanner")
