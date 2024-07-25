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
// CHECKS IF SPLASH SCREEN HAS BEEN SHOWN BEFORE
if (sessionStorage.getItem('splashScreenShown')) {
    splashScreen.style.display = "none";
    document.body.style.background = "#6666d0";
    navigationScreen.style.display = "block";
} else {
    typeAllLines(lines, div);
}

// CLOSES SPLASH SCREEN ON USER ENTER
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      splashScreen.style.display = "none";
      document.body.style.background = "#6666d0";
      navigationScreen.style.display = "block";
      sessionStorage.setItem('splashScreenShown', 'true');
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
var videoTwo = document.getElementById("videoInPlayerTwo");

videoTwoClose.addEventListener("click", function() {
    closeWindow(videoPlayerTwo);
})
videoTwoOpen.addEventListener("click", function() {
    videoTwoOpen.querySelector("p").style.background = "white";
})
videoTwoOpen.addEventListener("dblclick", function() {
    openWindow(videoPlayerTwo);
    videoTwoOpen.querySelector("p").style.background = "none";
    videoTwo.playVideo();
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
var showroomOpen = document.querySelector("#openShowroom");
showroomOpen.addEventListener("click", function() {
    showroomOpen.querySelector("p").style.background = "white";
})
showroomOpen.addEventListener("dblclick", function() {
    window.location.assign("showroom.html");
    showroomOpen.querySelector("p").style.background = "none";
})
var openVideo1 = document.querySelector("#openVideo1");
openVideo1.addEventListener("click", function() {
    openVideo1.querySelector("p").style = "text-decoration : underline";
})
openVideo1.addEventListener("dblclick", function() {
    document.getElementById("videoInMainPlayer").src = "https://www.youtube.com/embed/2B-XwPjn9YY?si=mV0UCIz15PNAFsUz&rel=0&controls=0&autoplay=1&modestbranding=1";
    openVideo1.querySelector("p").style = "text-decoration : none";
})
var openVideo2 = document.querySelector("#openVideo2");
openVideo2.addEventListener("click", function() {
    openVideo2.querySelector("p").style = "text-decoration : underline";
})
openVideo2.addEventListener("dblclick", function() {
    document.getElementById("videoInMainPlayer").src = "https://www.youtube.com/embed/wRdl1BjTG7c?si=4zdszyAMybLLZgch&rel=0&controls=0&autoplay=1&modestbranding=1";
    openVideo2.querySelector("p").style = "text-decoration : none";
})
var openVideo3 = document.querySelector("#openVideo3");
openVideo3.addEventListener("click", function() {
    openVideo3.querySelector("p").style = "text-decoration : underline";
})
openVideo3.addEventListener("dblclick", function() {
    document.getElementById("videoInMainPlayer").src = "https://www.youtube.com/embed/MnrJzXM7a6o?si=i5NSc9R9wOwBBQq-&rel=0&controls=0&autoplay=1&modestbranding=1";
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

    var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('videoInMainPlayer', {
                events: {
                    'onReady': onPlayerReady
                }
            });
        }
// VIDEO PLAY BUTTON
function togglePlay(pauseImg, playImg, videoId) {
let video = document.getElementById(videoId);
    var state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
        player.pauseVideo();
        document.getElementById(videoId + "PlayButton").src = playImg;
    } else {
        player.playVideo();
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
const songSrcs = new Array("assets/wonderland.mp3", "assets/futurePerspectives.mp3", "assets/robotics.mp3");
const songMap = new Map();
songMap.set("assets/wonderland.mp3", "Wonderland - David Reilly");
songMap.set("assets/futurePerspectives.mp3", "Future Perspectives - Anthony Hobson");
songMap.set("assets/robotics.mp3", "Robotics - Andy Clark");


function nextSong() {
    var audioElement = document.getElementById("audio1");
    var currentFullPath = audioElement.querySelector("source").src;
    var substring = "https://unlimitedtheinfoera.com/";
    console.log(currentFullPath);
    
    var cIndex = currentFullPath.indexOf(substring);
    console.log(cIndex);
    var currentSrc = currentFullPath.substring(cIndex + substring.length);
    console.log(currentSrc);
    var currentIndex = songSrcs.indexOf(currentSrc);

    if (currentIndex == songSrcs.length - 1) {
        currentIndex = -1;
        }
    currentIndex++;
    currentSrc = songSrcs[currentIndex];
    var currentTrack = songMap.get(currentSrc);
    audioElement.querySelector("source").src = currentSrc;
   
    document.querySelectorAll(".marquee").forEach(function(marqueeElement) {
        marqueeElement.innerHTML = currentTrack;
    });
    
    audioElement.load();
    audioElement.play();
}
function previousSong() {
    var audioElement = document.getElementById("audio1");
    var currentFullPath = audioElement.querySelector("source").src;
    var substring = "https://unlimitedtheinfoera.com/";
    
    var cIndex = currentFullPath.indexOf(substring);
    var currentSrc = currentFullPath.substring(cIndex + substring.length);
    var currentIndex = songSrcs.indexOf(currentSrc);

    console.log(currentSrc);
    console.log(currentIndex);
    if (currentIndex == 0) {
        currentIndex = 3;
        }
    currentIndex--;
    currentSrc = songSrcs[currentIndex];
    var currentTrack = songMap.get(currentSrc);
    audioElement.querySelector("source").src = currentSrc;
   
    document.querySelectorAll(".marquee").forEach(function(marqueeElement) {
        marqueeElement.innerHTML = currentTrack;
    });
    
    audioElement.load();
    audioElement.play();
}
// WARNING MESSAGE CLOSE
document.getElementById("warning").addEventListener("click", function() {
    document.getElementById("warning").style.display = "none";
});
