/**
 * 
 */
 // USERNAME SUBMIT
function displayGreeting() {
    const inputBox = document.getElementById("username");
    const submitButton = document.getElementById("submitButton");
    const oldText = document.getElementById("oldText");
    var name = document.getElementById('username').value;
    var greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.innerText = "Hi, I'm " + name + "!";
    submitButton.style.display = "none";
    inputBox.style.display = "none";
    oldText.style.display = "none";
}
// CHANGE TO GIRLY THEME
document.getElementById('theme1Button').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', '../css/y2ktheme1.css');
    document.getElementById("headerDeco").innerHTML = "<span style='font-size:20pt'>・┆✦ʚ♡ɞ✦ ┆・</span>Welcome to my World!<span style='font-size:20pt'>・┆✦ʚ♡ɞ✦ ┆・</span>";
    document.getElementById("blurbsText").innerHTML = "<span style='text-decoration: underline'>Job:</span> Influencer?<br><span style='text-decoration: underline'>Mood:</span> in my own digital world";
    document.getElementById("nowPlaying").querySelector("p").innerHTML = "Perfect Day - Hoku";
    document.getElementById("blurbs").querySelector("h2").innerHTML = "Pretty Princess's Blurbs";
    document.getElementById("videoStickerA").src = "../y2kAssets/theme1/videoSticker.gif";
    document.getElementById("videoStickerB").src = "../y2kAssets/theme1/videoSticker2.gif";
    document.getElementById("profilePic").src = "../y2kAssets/theme1/profilePic.gif";
    document.getElementById("gridSticker1").querySelector("img").src = "../y2kAssets/theme1/kiss.gif";
    document.getElementById("gridSticker2").querySelector("img").src = "../y2kAssets/theme1/wild.gif";
    document.getElementById("gridSticker3").querySelector("img").src = "../y2kAssets/theme1/online.gif";
    document.getElementById("gridSticker4").querySelector("img").src = "../y2kAssets/theme1/princess.gif";
    document.getElementById("blurbs").querySelector("img").src = "../y2kAssets/theme1/welcome.gif";
});
// CHANGE TO SCENE THEME
document.getElementById('theme2Button').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', '../css/y2ktheme2.css');
    document.getElementById("headerDeco").innerHTML = "<span style='font-size:20pt'>⁺˚⋆｡°✩₊✩°｡⋆˚⁺</span>Welcome to my World!<span style='font-size:20pt'>⁺˚⋆｡°✩₊✩°｡⋆˚⁺</span>";
    document.getElementById("blurbsText").innerHTML = "<span style='text-decoration: underline'>Mood:</span> Spent 2 long customizing my page<br><span style='text-decoration: underline'>Hobbies:</span> broadcasting my mood to anyone who will listen";
    document.getElementById("nowPlaying").querySelector("p").innerHTML = "Webcore Song = Blah";
    document.getElementById("blurbs").querySelector("h2").innerHTML = "SceneKid02's Blurbs";
    document.getElementById("videoStickerA").src = "../y2kAssets/theme2/videoSticker.gif";
    document.getElementById("videoStickerB").src = "../y2kAssets/theme2/videoSticker2.gif";
    document.getElementById("profilePic").src = "../y2kAssets/theme2/profilePic.gif";
    document.getElementById("gridSticker1").querySelector("img").src = "../y2kAssets/theme2/heart.gif";
    document.getElementById("gridSticker2").querySelector("img").src = "../y2kAssets/theme2/emo.gif";
    document.getElementById("gridSticker3").querySelector("img").src = "../y2kAssets/theme2/skull.gif";
    document.getElementById("gridSticker4").querySelector("img").src = "../y2kAssets/theme2/helloKitty.gif";
    document.getElementById("blurbs").querySelector("img").src = "../y2kAssets/theme2/welcome.gif";
});
// CHANGE TO NERDY THEME
document.getElementById('theme3Button').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', '../css/y2ktheme3.css');
    document.getElementById("headerDeco").innerHTML = "<span style='font-size:20pt'>☀︎𓍊𓋼𓍊𓋼𓍊𓆏𓍊𓋼𓍊𓋼𓍊☀︎</span>Welcome to my World!<span style='font-size:20pt'>☀︎𓍊𓋼𓍊𓋼𓍊𓆏𓍊𓋼𓍊𓋼𓍊☀︎</span>";
    document.getElementById("blurbsText").innerHTML = "<span style='text-decoration: underline'>Update:</span> I’m barely on here XD too much to do IRL<br><span style='text-decoration: underline'>Mood:</span> Just here because my friendz pressured me";
    document.getElementById("nowPlaying").querySelector("p").innerHTML = "Fireflies - Owl City";
    document.getElementById("blurbs").querySelector("h2").innerHTML = "spaceIsGr8's Blurbs";
    document.getElementById("videoStickerA").src = "../y2kAssets/theme3/videoSticker.png";
    document.getElementById("videoStickerB").src = "../y2kAssets/theme3/videoSticker2.gif";
    document.getElementById("profilePic").src = "../y2kAssets/theme3/profilePic.gif";
    document.getElementById("gridSticker1").querySelector("img").src = "../y2kAssets/theme3/vortex.gif";
    document.getElementById("gridSticker2").querySelector("img").src = "../y2kAssets/theme3/astronaut.gif";
    document.getElementById("gridSticker3").querySelector("img").src = "../y2kAssets/theme3/dice.gif";
    document.getElementById("gridSticker4").querySelector("img").src = "../y2kAssets/theme3/ufo.gif";
    document.getElementById("blurbs").querySelector("img").src = "../y2kAssets/theme3/welcome.gif";
});
// CHANGE TO GOTH THEME
document.getElementById('theme4Button').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', '../css/y2ktheme4.css');
    document.getElementById("headerDeco").innerHTML = "<span style='font-size:20pt'>𓆩♱𓆪</span> Welcome to my World <span style='font-size:20pt'>𓆩♱𓆪</span>";
    document.getElementById("nowPlaying").querySelector("p").innerHTML = "All I Wanted - Paramore";
    document.getElementById("blurbs").querySelector("h2").innerHTML = "GothGrl03's Blurbs";
    document.getElementById("videoStickerA").src = "../y2kAssets/theme4/videoSticker.gif";
    document.getElementById("videoStickerB").src = "../y2kAssets/theme4/videoSticker2.gif";
    document.getElementById("profilePic").src = "../y2kAssets/theme4/profilePic.gif";
    document.getElementById("gridSticker1").querySelector("img").src = "../y2kAssets/theme4/heart.gif";
    document.getElementById("gridSticker2").querySelector("img").src = "../y2kAssets/theme4/skull.gif";
    document.getElementById("gridSticker3").querySelector("img").src = "../y2kAssets/theme4/dying.gif";
    document.getElementById("gridSticker4").querySelector("img").src = "../y2kAssets/theme4/bat.gif";
    document.getElementById("blurbs").querySelector("img").src = "../y2kAssets/theme4/welcome.gif";
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

