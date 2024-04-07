var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
    video.autoplay = false;
    video.loop = false;
});

document.addEventListener("DOMContentLoaded", function() {
    // Play Button
    document.getElementById("play").addEventListener("click", function() {
        video.play();
        console.log("Play Video");
        updateVolumeInfo();
    });

    // Pause Button
    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

    // Slow Down Button
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate -= 0.1;
        console.log("New speed:", video.playbackRate);
        updateVolumeInfo();
    });

    // Speed Up Button
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate += 0.1;
        console.log("New speed:", video.playbackRate);
        updateVolumeInfo();
    });

    // Skip Ahead Button
    document.getElementById("skip").addEventListener("click", function() {
        if (video.currentTime + 10 < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0;
        }
        console.log("Current video location:", video.currentTime);
    });

    // Mute Button
    var muteButton = document.getElementById("mute");
    muteButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = "Mute";
        } else {
            video.muted = true;
            muteButton.textContent = "Unmute";
        }
    });

    // Volume Slider
    var volumeSlider = document.getElementById("slider");
    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        updateVolumeInfo();
    });
});

function updateVolumeInfo() {
    var volumeInfo = document.getElementById("volume");
    volumeInfo.textContent = Math.round(video.volume * 100) + "%";
}

// Styled Button - Old School
document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

// Original Button - Remove Old School class
document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
