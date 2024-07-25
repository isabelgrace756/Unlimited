/**
 * 
 */
 setTimeout(loadingScreen, 5000);
 function loadingScreen() {
    document.getElementById("loadingScreen").style.display = "none";
 }
 window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const front = document.getElementById('front');
    const middle = document.getElementById('middle');
    const bg = document.getElementById('bg');

    // Adjust the scroll speed for each layer
    front.style.transform = `translateX(${-scrollPosition * 0.2}px)`;
    middle.style.transform = `translateX(${-scrollPosition * 1.4}px)`;
    bg.style.transform = `translateX(${-scrollPosition * 0.6}px)`;
});
// MUTE BUTTON
function toggleMute(mutedImg, unmutedImg) {
    let audio = document.getElementById("audioElement");
    audio.play();
    if (audio.muted) {
        audio.muted = false;
        document.querySelector(".muteButton").src = unmutedImg;
    } else {
        audio.muted = true;
        document.querySelector(".muteButton").src = mutedImg;
    }
    }
    
// GO HOME
var goHome = document.getElementById("goHome");
var goHomeText = document.getElementById("goHomeText");
goHome.addEventListener("mouseover", function() {
    goHomeText.style.left = "50px";
    goHomeText.style.transition = "left 0.5s";
    goHomeText.style.animation = "blink 1s infinite";
});
goHome.addEventListener("mouseleave", function() {
    goHomeText.style.left = "-300px";
});
// NEXT PAGE
var nextPage = document.getElementById("nextPage");
var nextPageText = document.getElementById("nextPageText");
nextPage.addEventListener("mouseover", function() {
    nextPageText.style.right = "-140px";
    nextPageText.style.transition = "right 0.5s";
    nextPageText.style.animation = "blink 1s infinite";
});
nextPage.addEventListener("mouseleave", function() {
    nextPageText.style.right = "-300vw";
});
// WARNING MESSAGE CLOSE
document.getElementById("warning").addEventListener("click", function() {
    document.getElementById("warning").style.display = "none";
});
    
