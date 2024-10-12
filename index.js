// Get the number of drum buttons
var len = document.querySelectorAll(".drum").length;

// Iterate through all drum buttons
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickh);
    document.querySelectorAll(".drum")[i].addEventListener("touchstart", clickh); // Add touchstart for mobile
}

// Function to handle click or touch
function clickh() {
    var innerKey = this.innerHTML;
    key(innerKey);
    ba(innerKey);
}

// Detect keypress events
document.addEventListener("keypress", function (event) {
    key(event.key);
    ba(event.key);
});

// Preload audio files for better performance
var audioFiles = {
    "w": new Audio('sounds/tom1.mp3'),
    "a": new Audio('sounds/tom2.mp3'),
    "s": new Audio('sounds/tom3.mp3'),
    "d": new Audio('sounds/tom4.mp3'),
    "j": new Audio('sounds/crash.mp3'),
    "k": new Audio('sounds/kickbass.mp3'),
    "l": new Audio('sounds/snare.mp3')
};

// Function to play the sound based on the key
function key(key) {
    var audio = audioFiles[key];
    if (audio) {
        audio.currentTime = 0;  // Reset sound to avoid delay in repeated presses
        audio.play();
    }
}

// Button animation function
function ba(cr) {
    var ak = document.querySelector("." + cr);
    if (ak) {
        ak.classList.add("pressed");
        setTimeout(function () {
            ak.classList.remove("pressed");
        }, 100);
    }
}
