/** Hello.
 * 
 */

setTimeout(function() {document.getElementById("welcomeText").style.display = "block"}, 1000);
setTimeout(function() {document.getElementById("tips1").style.display = "block"}, 2000);
setTimeout(function() {document.getElementById("tips2").style.display = "block"}, 3000);
setTimeout(function() {document.getElementById("tips3").style.display = "block"}, 4000);
setTimeout(function() {document.getElementById("tips4").style.display = "block"}, 5000);
// SHOW TIME
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = "PM";
    
    minutes = (minutes < 10 ? "0" : "") + minutes;
    
    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    var timeString = hours + ":" + minutes + " " + ampm;
    
    document.getElementById("currentTime").innerText= timeString;
}
setInterval(updateTime, 1000);

// LINKS TO PAGES
var prevPageLink = document.getElementById("prevPageLink");
let nextPageLink = document.getElementById("nextPageLink");
var homeLink = document.getElementById("homeLink");

prevPageLink.addEventListener("click", function() {
    window.location.assign("tvEra.html");
});
homeLink.addEventListener("click", function() {
    window.location.assign("index.html");
});
nextPageLink.addEventListener("click", function() {
    window.location.assign("y2k.html");
});

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

// OPEN CHATROOM
var chatClose = document.getElementById("closeChat");
var chatOpen = document.getElementById("openChat");
chatClose.addEventListener("click", function() {
    closeWindow(chatWindow);
});
chatOpen.addEventListener("click", function() {
    chatOpen.querySelector("p").style = "background : #0222c5; border : 1px dashed white;";
});
chatOpen.addEventListener("dblclick", function() {
    openWindow(chatWindow);
    chatOpen.querySelector("p").style = "background : none; border : none;";
});

// OPEN AUDIO PLAYER
var audioClose = document.getElementById("closeAudio");
var audioOpen = document.getElementById("openAudio");
audioClose.addEventListener("click", function() {
    closeWindow(audioWindow);
});
audioOpen.addEventListener("click", function() {
    audioOpen.querySelector("p").style = "background : #0222c5; border : 1px dashed white;";
});
audioOpen.addEventListener("dblclick", function() {
    openWindow(audioWindow);
    audioOpen.querySelector("p").style = "background : none; border : none;";
});

// OPEN BROWSER
var browserClose = document.getElementById("closeBrowser");
var browserOpen = document.getElementById("openBrowser");
var dialUp = document.getElementById("dialUp");

browserClose.addEventListener("click", function() {
    closeWindow(browser);
    document.getElementById("splash").style.display = "block";
});
browserOpen.addEventListener("click", function() {
    browserOpen.querySelector("p").style = "background : #0222c5; border : 1px dashed white;";
});
browserOpen.addEventListener("dblclick", function() {
    openWindow(browser);
    browserOpen.querySelector("p").style = "background : none; border : none;";
    dialUp.load();
    dialUp.play();
    setTimeout(function() {document.getElementById("splash").style.display = "none"}, 3000);
});

// OPEN BULBY WINDOW
var bulbyClose = document.getElementById("closeBulby");
var bulbyOpen = document.getElementById("openBulby");
bulbyClose.addEventListener("click", function() {
    closeWindow(bulbyWindow);
});
bulbyOpen.addEventListener("click", function() {
    bulbyOpen.querySelector("p").style = "background : #0222c5; border : 1px dashed white;";
});
bulbyOpen.addEventListener("dblclick", function() {
    openWindow(bulbyWindow);
    bulbyOpen.querySelector("p").style = "background : none; border : none;";
});

var browser = document.getElementById("browser");
var miniBrowser = document.getElementById('browserFrame');

// OPEN NEW SITES
var cameronsWorld = document.getElementById("cameronsWorld");
var melonLand = document.getElementById("melonLand");
var blueDwarf = document.getElementById("blueDwarf");

cameronsWorld.addEventListener("click", function() {
    miniBrowser.src = "https://www.cameronsworld.net/";
    browser.style.cursor='url(../90sAssets/loadingCursor.png), auto';
});
melonLand.addEventListener("click", function() {
    miniBrowser.src = "https://forum.melonland.net/";
    browser.style.cursor='url(../90sAssets/loadingCursor.png), auto';
});
blueDwarf.addEventListener("click", function() {
    miniBrowser.src = "https://bluedwarf.top/cackle/index.php";
    browser.style.cursor='url(../90sAssets/loadingCursor.png), auto';
});
miniBrowser.addEventListener("load", function() {
    browser.style.cursor = 'default';
});

// CHATROOM SCREENNAME
 var name;
 var screenNameForm = document.getElementById("screenNameForm");
 screenNameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var screenName = document.getElementById("screenName").value;
    name = screenName + ": ";
    screenNameForm.style.display = "none";
    $("#greeting").css({"font-weight" : "bold",
        "color" : "#e93800", "font-size" : "16pt"
    });
    document.getElementById("greeting").innerHTML = "Hello, " + screenName + "! What would you like to chat about today?";
    document.getElementById("topicChoices").style.display = "block";
 });
 
 // GET TEXT FORM INPUT
 var textForm = document.getElementById("textForm");
 var boop = document.getElementById("chatBoop");
  textForm.addEventListener("submit", function(event) {
    boop.play();
     event.preventDefault();
     var textBox = document.getElementById("textBox").value;
     $(chatContent).append(userSays).append(textBox + "<br>");
     $("#textBox").val("");
     setTimeout(function() {$(chatContent).append(friendSays).append("I know we've never met but I just feel like I know you so well.<br>");}, 2000);
     setTimeout(function() {$(chatContent).append(friendSays).append("Would you like to choose a new topic?<br>");}, 5000);
     setTimeout(function() {$(chatContent).append(topicChoices)}, 7000);
 });
 
 
// CHATROOM CONTENT
var chatContent = document.getElementById("chatContent");
var topicChoices = document.getElementById("topicChoices");
var userSays = "<span style='font-weight : bold; color : #0222c5;'>" + name + "</span>";
var friendSays = "<span style='font-weight : bold; color : #e93800;'>YourFriend95: </span>";
$("#currentEvents").click(function() {
    boop.play();
    $(chatContent).remove(topicChoices);
    $(chatContent).append(userSays).append("Current Events<br>");
    setTimeout(function() {$(chatContent).append(friendSays).append("Did you know that ____ happened in ___?<br>").addClass("text")}, 1000);
    setTimeout(function() {$(chatContent).append(friendSays).append("Would you like to choose a new topic?<br>");}, 2000);
    setTimeout(function() {$(chatContent).append(topicChoices)}, 4000);
});
$("#science").click(function() {
    boop.play();
    $(chatContent).remove(topicChoices);
    $(chatContent).append(userSays).append("Science<br>");
    setTimeout(function() {$(chatContent).append(friendSays).append("Did you know that ____ was discovered in ___?<br>").addClass("text")}, 1000);
    setTimeout(function() {$(chatContent).append(friendSays).append("Would you like to choose a new topic?<br>");}, 2000);
    setTimeout(function() {$(chatContent).append(topicChoices)}, 4000);
});
$("#celebs").click(function() {
    boop.play();
    $(chatContent).remove(topicChoices);
    $(chatContent).append(userSays).append("Celebs<br>");
    setTimeout(function() {$(chatContent).append(friendSays).append("Did you see that new movie with ___?<br>").addClass("text")}, 1000);
    setTimeout(function() {$(chatContent).append(friendSays).append("Would you like to choose a new topic?<br>");}, 2000);
    setTimeout(function() {$(chatContent).append(topicChoices)}, 4000);
});
$("#personalLife").click(function() {
    boop.play();
    $(chatContent).remove(topicChoices);
    $(chatContent).append(userSays).append("My Personal Life<br>");
    $(chatContent).append(friendSays).append("How's that husband of yours?<br>").addClass("text")
    setTimeout(function() {$(chatContent).append(friendSays).append("Tell me a secret.<br>");}, 2000);
});

// AUDIO PLAY BUTTON
function toggleAudioPlay(pauseImg, playImg, audioId) {
let audio = document.getElementById(audioId);
    if (!audio.paused) {
        audio.pause();
        audio.muted = true;
        document.getElementById("playButton").src = playImg;
    } else {
        audio.play();
        audio.muted = false;
        document.getElementById("playButton").src = pauseImg;
    }
}
const songSrcs = new Array("90sAssets/barbie.mp3", "90sAssets/kernkraft.mp3", "90sAssets/windows.mp3");
const songMap = new Map();
songMap.set("90sAssets/barbie.mp3", "Barbie Secret Agent-Gameboy Color");
songMap.set("90sAssets/kernkraft.mp3", "Kernkraft 400-Zombie Nation");
songMap.set("90sAssets/windows.mp3", "canyon.mid - Windows 95");


function nextSong() {
    var audioElement = document.getElementById("audio1");
    var currentFullPath = audioElement.querySelector("source").src;
    var substring = "https://unlimitedtheinfoera.com/";
    console.log(currentFullPath);
    
    var cIndex = currentFullPath.indexOf(substring);
    console.log(cIndex);
    var currentSrc = currentFullPath.substring(cIndex + substring.length);
    var currentIndex = songSrcs.indexOf(currentSrc);

    console.log(currentSrc);
    console.log(currentIndex);
    if (currentIndex == songSrcs.length - 1) {
        currentIndex = -1;
        }
    currentIndex++;
    currentSrc = songSrcs[currentIndex];
    var currentTrack = songMap.get(currentSrc);
    audioElement.querySelector("source").src = currentSrc;
   
    var tIndex = currentTrack.indexOf("-");
    document.getElementById("trackTitle").innerHTML = currentTrack.substring(0 , tIndex);
    document.getElementById("theArtist").innerHTML = currentTrack.substring(tIndex + 1, currentTrack.length);
    
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
   
    var tIndex = currentTrack.indexOf("-");
    document.getElementById("trackTitle").innerHTML = currentTrack.substring(0 , tIndex);
    document.getElementById("theArtist").innerHTML = currentTrack.substring(tIndex + 1, currentTrack.length);
    
    audioElement.load();
    audioElement.play();
}
// WARNING MESSAGE CLOSE
document.getElementById("warning").addEventListener("click", function() {
    document.getElementById("warning").style.display = "none";
});
