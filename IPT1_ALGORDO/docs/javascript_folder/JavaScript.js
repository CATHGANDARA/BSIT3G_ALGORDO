let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

function playPause() {
  console.log("Play/Pause button clicked");

  if (song.paused) {
    song.play();  // Play the audio
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  } else {
    song.pause();  // Pause the audio
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});
