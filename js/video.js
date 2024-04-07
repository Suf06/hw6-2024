var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector('video');
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Current location is " + video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
		console.log("Unmute")
    } else {
        video.muted = true;
        this.textContent = "Unmute";
		console.log("Mute")
    }
});


document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    updateVolumeInfo();
    console.log("Volume is " + video.volume);
});

function updateVolumeInfo() {
    var volumeDisplay = document.querySelector('#volume');
    volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
}


document.querySelector("#vintage").addEventListener("click", function() {
    if (!video.classList.contains('oldSchool')) {
        video.classList.add('oldSchool');
    }
});


document.querySelector("#orig").addEventListener("click", function() {
    if (video.classList.contains('oldSchool')) {
        video.classList.remove('oldSchool');
    }
});