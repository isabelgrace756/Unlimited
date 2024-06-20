// TYPES BOOTUP TEXT LINES ONE CHARACTER AT A TIME
const div = document.querySelector(".bootupText");
const splashScreen = document.getElementById("splashScreen");

const lines = [
    "> UNLMTED : booting up...",
    "> 01110011",
    "> 01101000",
    "> UNLMTED : tossing big data...",
    "> 01110010",
    "> 01101001",
    "> UNLMTED : analyzing internet history...",
    "> 01101101",
    "> 01110000",
    "> PRESS ENTER TO CONTINUE: "
];

function textTypeEffect(element, text, callback, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];
    if (i === text.length - 1) {
        callback();
        return;
    }
    setTimeout(() => textTypeEffect(element, text, callback, i + 1), 50);
}

function typeAllLines(lines, element, index = 0) {
    if (index < lines.length) {
        // Create a new element for the line
        const lineElement = document.createElement("div");
        element.appendChild(lineElement);

        // Type the line into the new element
        textTypeEffect(lineElement, lines[index], () => typeAllLines(lines, element, index + 1));
    }
}
typeAllLines(lines, div);

// CLOSES SPLASH SCREEN ON USER ENTER
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      splashScreen.style.display = "none";
      document.body.style.background = "#6666d0";
      navigationScreen.style.display = "block";
    }
});

// MUTE BUTTON
function toggleMute(mutedImg, unmutedImg, audioId) {
    let audio = document.getElementById(audioId);
    audio.play();
    if (audio.muted) {
        audio.muted = false;
        document.querySelector(".muteButton").src = unmutedImg;
    } else {
        audio.muted = true;
        document.querySelector(".muteButton").src = mutedImg;
    }
    }
    
// MAKES WINDOWS DRAGGABLE    
var draggableElements = document.getElementsByClassName("window");

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// OPEN AND CLOSE WINDOW BUTTONS

function openWindow(element) {
    element.style.display = "block";
}
function closeWindow(element) {
    element.style.display = "none";
}

var videoClose = document.getElementById("closeMainVideoPlayer");
var videoOpen = document.getElementById("openMainVideoPlayer");

videoClose.addEventListener("click", function() {
    closeWindow(mainVideoPlayer);
})
videoOpen.addEventListener("click", function() {
    videoOpen.querySelector("p").style.background = "white";
})
videoOpen.addEventListener("dblclick", function() {
    openWindow(mainVideoPlayer);
    videoOpen.querySelector("p").style.background = "none";
})
var videoTwoClose = document.getElementById("closeVideoPlayerTwo");
var videoTwoOpen = document.getElementById("openVideoPlayerTwo");

videoTwoClose.addEventListener("click", function() {
    closeWindow(videoPlayerTwo);
})
videoTwoOpen.addEventListener("dblclick", function() {
    openWindow(videoPlayerTwo);
})
var audioClose = document.querySelector("#closeAudioPlayer");
var audioOpen = document.querySelector("#openAudioPlayer");

audioClose.addEventListener("click", function() {
    closeWindow(audioPlayer);
})
audioOpen.addEventListener("click", function() {
    audioOpen.querySelector("p").style.background = "white";
})
audioOpen.addEventListener("dblclick", function() {
    openWindow(audioPlayer);
    audioOpen.querySelector("p").style.background = "none";
})
var aboutMeOpen = document.querySelector("#openAboutMe");
aboutMeOpen.addEventListener("click", function() {
    aboutMeOpen.querySelector("a").style.background = "white";
})
aboutMeOpen.addEventListener("dblclick", function() {
    window.location.assign("aboutMe.html");
    aboutMeOpen.querySelector("a").style.background = "none";
})
var openVideo1 = document.querySelector("#openVideo1");
openVideo1.addEventListener("click", function() {
    openVideo1.querySelector("p").style = "text-decoration : underline";
})
openVideo1.addEventListener("dblclick", function() {
    document.getElementById("videoInMainPlayer").src = "../assets/puppy.mp4";
    openVideo1.querySelector("p").style = "text-decoration : none";
})
var openVideo2 = document.querySelector("#openVideo2");
openVideo2.addEventListener("click", function() {
    openVideo2.querySelector("p").style = "text-decoration : underline";
})
openVideo2.addEventListener("dblclick", function() {
    document.getElementById("videoInMainPlayer").src = "../assets/beachPuppy.mp4";
    openVideo2.querySelector("p").style = "text-decoration : none";
})
var openVideo3 = document.querySelector("#openVideo3");
openVideo3.addEventListener("click", function() {
    openVideo3.querySelector("p").style = "text-decoration : underline";
})
openVideo3.addEventListener("dblclick", function() {
    document.getElementById("videoInMainPlayer").src = "../assets/tech.mp4";
    openVideo3.querySelector("p").style = "text-decoration : none";
})

// GRAYSCALE FILTER ON/OFF
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('grayscaleButton');
    button.addEventListener('click', function() {
        document.body.classList.toggle('grayscale');
        document.documentElement.classList.toggle('grayscale-bg');
    });
});

// VIDEO PLAY BUTTON
function togglePlay(pauseImg, playImg, videoId) {
let video = document.getElementById(videoId);
    if (!video.paused) {
        video.pause();
        document.getElementById(videoId + "PlayButton").src = playImg;
    } else {
        video.play();
        document.getElementById(videoId + "PlayButton").src = pauseImg;
    }
}
// VIDEO MUTE BUTTON
function toggleVideoMute(mutedImg, unmutedImg, videoId) {
    let video = document.getElementById(videoId);
    if (!video.muted) {
        video.muted = true;
        document.getElementById(videoId + "MuteButton").src = mutedImg;
    } else {
        video.muted = false;
        document.getElementById(videoId + "MuteButton").src = unmutedImg;
    }
}
// MAIN VIDEO PROGRESS BAR
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoInMainPlayer');
    var progressBar = document.getElementById('mainVideoProgressBar');

    video.addEventListener('timeupdate', function() {
        var percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percentage + '%';
    });
});
// VIDEO TWO PROGRESS BAR
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoInPlayerTwo');
    var progressBar = document.getElementById('videoProgressBarTwo');

    video.addEventListener('timeupdate', function() {
        var percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percentage + '%';
    });
});
// AUDIO PLAY BUTTON
function toggleAudioPlay(pauseImg, playImg, audioId) {
let audio = document.getElementById(audioId);
    if (!audio.paused) {
        audio.pause();
        audio.muted = true;
        document.getElementById(audioId + "PlayButton").src = playImg;
    } else {
        audio.play();
        audio.muted = false;
        document.getElementById(audioId + "PlayButton").src = pauseImg;
    }
}
const songSrcs = new Array("../assets/choir.mp3", "../assets/piano.mp3");
const songMap = new Map();
songMap.set("../assets/choir.mp3", "Choir Singing - The Choir");
songMap.set("../assets/piano.mp3", "Piano that Plays");
let audioElement = document.getElementById("audio1");

var forwardButton = document.getElementById("forwardButton");
forwardButton.addEventListener("click", function() {
    let currentTrack = audioElement.src;
    let relativeTrack = currentTrack.substring(currentTrack.indexOf("../assets")); // Extract relative path
    let currentPos = songSrcs.indexOf(relativeTrack);
      currentPos = (currentPos + 1) % songSrcs.length; // Loop back to start if at the end
    currentTrack = songSrcs[currentPos];
    audioElement.src = currentTrack;

    let marqueeText = songMap.get(currentTrack);
    document.querySelectorAll(".marquee").forEach(function(marqueeElement) {
    marqueeElement.innerHTML = marqueeText;
     });
})
