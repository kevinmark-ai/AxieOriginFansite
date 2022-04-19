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

var pvpModal = document.getElementById("pvpModal");
var practiceModeBtn = document.getElementById("practiceModeBtn");
var practiceModalBtn = document.getElementById("practiceModalBtn");
var practiceModal = document.getElementsByClassName("practiceModal");
practiceModeBtn.onclick = function () {
  pvpModal.style.opacity = "1";
  pvpModal.style.pointerEvents = "all";
};
pvpModal.onclick = function () {
    pvpModal.style.opacity = "0";
  pvpModal.style.pointerEvents = "none";

}

var pvpModal1 = document.getElementById("pvpModal1");
var rankedModeBtn = document.getElementById("rankedModeBtn");
var rankedModalBtn = document.getElementById("rankedModalBtn");
var rankedModal = document.getElementsByClassName("rankedModal");
rankedModeBtn.onclick = function () {
  pvpModal1.style.opacity = "1";
  pvpModal1.style.pointerEvents = "all";
};
pvpModal1.onclick = function () {
    pvpModal1.style.opacity = "0";
  pvpModal1.style.pointerEvents = "none";
};


var pvpModal2 = document.getElementById("pvpModal2");
var tournamentModeBtn = document.getElementById("tournamentModeBtn");
var tournamentModalBtn = document.getElementById("tournamentModalBtn");
var tournamentModal = document.getElementsByClassName("tournamentModal");
tournamentModeBtn.onclick = function () {
  pvpModal2.style.opacity = "1";
  pvpModal2.style.pointerEvents = "all";
};
pvpModal2.onclick = function () {
    pvpModal2.style.opacity = "0";
  pvpModal2.style.pointerEvents = "none";
};