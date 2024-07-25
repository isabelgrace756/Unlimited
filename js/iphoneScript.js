/**
 * 
 */
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

var welcomeYear = 1970;
var is2007 = false;

function changeYear() {
        welcomeYear++;
        document.getElementById("welcomeYear").innerHTML = welcomeYear;
}
function skeuomorphIcons() {
    $("#welcome").fadeOut();
    $("#alarmClock").attr("src", "../assets/iphoneAssets/clock2.png");
    $("#books").attr("src", "../assets/iphoneAssets/books2.png");
    $("#camera").attr("src", "../assets/iphoneAssets/camera2.png");
    $("#clover").attr("src", "../assets/iphoneAssets/contacts2.png");
    $("#compass").attr("src", "../assets/iphoneAssets/compass2.png");
    $("#letter").attr("src", "../assets/iphoneAssets/email2.png");
    $("#notebook").attr("src", "../assets/iphoneAssets/notes2.png");
    $("#stamp").attr("src", "../assets/iphoneAssets/findMy2.png");
    $("#stickies").attr("src", "../assets/iphoneAssets/stickies2.png");
    $("#tv").attr("src", "../assets/iphoneAssets/tv2.png");
    $("#typewriter").attr("src", "../assets/iphoneAssets/typewriter2.png");
    $("#watch").attr("src", "../assets/iphoneAssets/watch2.png");
    $("#whisk").attr("src", "../assets/iphoneAssets/whisk2.png");
    $(".element").css({
        "all" : "unset",
        'width' : "125px",
        "transition" : "all 1s ease"
    });
    $("#button, #button2, #button3, #button4, #cord, #dice, #pen").css("display", "none");
    $("body").css("background-image", "url('https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HDFEWtaPU067ki6MWufGig.png')");
}
var i = 0;
const texts = new Array("You have something better to do, don't you?", "hey look at me!!!", "Real life is in this little box!", "You are UNLIMITED.");

function flatIcons() {
        $(".element").css("animation", "pulse 1s ease-in");
        $(".element").find("img").css("width", "125px");
    setTimeout(function() {
        $("body").css("background-image", "url('https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hEHM6-fq9bCj6wXbZm51Ag.jpeg')");
        $("#alarmClock").attr("src", "../assets/iphoneAssets/clock3.webp");
        $("#books").attr("src", "../assets/iphoneAssets/books3.png");
        $("#camera").attr("src", "../assets/iphoneAssets/camera3.webp");
        $("#clover").attr("src", "../assets/iphoneAssets/contacts3.png");
        $("#compass").attr("src", "../assets/iphoneAssets/compass3.png");
        $("#letter").attr("src", "../assets/iphoneAssets/email3.webp");
        $("#notebook").attr("src", "../assets/iphoneAssets/notes3.png");
        $("#stamp").attr("src", "../assets/iphoneAssets/findMy3.webp");
        $("#stickies").attr("src", "../assets/iphoneAssets/stickies3.png");
        $("#tv").attr("src", "../assets/iphoneAssets/tv3.webp");
        $("#typewriter").attr("src", "../assets/iphoneAssets/typewriter3.png");
        $("#watch").attr("src", "../assets/iphoneAssets/watch3.png");
        $("#whisk").attr("src", "../assets/iphoneAssets/whisk3.png");
    }, 1050);
    $("#alarmClock, #letter, #notebook, #stamp").css("cursor", "pointer");
    $("#alarmClock, #letter, #notebook, #stamp").css("pointer-events", "auto");
    setTimeout(function() {
        $(".badge").toggleClass("animate");
        $("#toolbar").css("animation-play-state", "running");
    }, 1000);
   var textInterval = setInterval(function() {
        if (i < texts.length) {
            $("#notificationText").html(texts[i]);
            i++;
            $("#notification").animate({top : "0px"}, "slow", function() {
                setTimeout(function() {
                    $("#notification").animate({top : "-100px"}, "slow");
                }, 3000);
            });
        } else {
            clearInterval(textInterval);
        }
    }, 15000);
}
function moveIcons() {
    $("#alarmClock").animate({
        "grid-column" : "1",
        "grid-row" : "1"
    }, "slow");
    $("#books").animate({
        "grid-column" : "2",
        "grid-row" : "1"
    }, "slow");
    $("#camera").animate({
        "grid-column" : "3",
        "grid-row" : "1"
    }, "slow");
    $("#clover").animate({
        "grid-column" : "4",
        "grid-row" : "1",
        "width" : "120px"
    }, "slow");
    $("#compass").animate({
        "grid-column" : "1",
        "grid-row" : "2"
    }, "slow");
    $("#letter").animate({
        "grid-column" : "2",
        "grid-row" : "2",
        "width" : "130px"
    }, "slow");
    $("#notebook").animate({
        "grid-column" : "3",
        "grid-row" : "2",
        "width" : "125px"
    }, "slow");
    $("#stamp").animate({
        "grid-column" : "4",
        "grid-row" : "2"
    }, "slow");
    $("#stickies").animate({
        "grid-column" : "1",
        "grid-row" : "3"
    }, "slow");
    $("#tv").animate({
        "grid-column" : "2",
        "grid-row" : "3"
    }, "slow");
    $("#typewriter").animate({
        "grid-column" : "3",
        "grid-row" : "3"
    }, "slow");
    $("#watch").animate({
        "grid-column" : "4",
        "grid-row" : "3", 
        "width" : "130px"
    }, "slow");
    $("#whisk").animate({
        "grid-column" : "1",
        "grid-row" : "4",
        "width" : "130px"
    }, "slow");
}
$(document).ready(function(){
    var interval = setInterval(function() {
        if (welcomeYear < 2006) {
            changeYear();
        } else {
            clearInterval(interval);
            is2007 = true;
            setTimeout(function() {
                changeYear();
                skeuomorphIcons();
                moveIcons();
                setTimeout(function() {
                    flatIcons();
                }, 3000);
            }, 3000);
        }
    }, 45);
});
$("#closeBlurb").on("click", function() {
    document.getElementById("blurbContainer").style.transform = "scale(0)";
    document.getElementById("overlay").style.display = "none";
});
$("#alarmClock").on("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("blurbContainer").style.transform = "scale(1)";
    document.getElementById("blurbContainer").style.background = "linear-gradient(#6666d0, #413fa7)";
    document.getElementById("blurbContainer").style.border = "#9493d9 5px solid";
    $("#blurbText").html("Add up all the moments you've spent head down, eyes glossed over, about something you can't recall twenty minutes later.<br><br>How many things have you missed?<br><br>How can you get those years back?");
});
$("#letter").on("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("blurbContainer").style.transform = "scale(1)";
    document.getElementById("blurbContainer").style.background = "linear-gradient(#2e59a2, #2a93bd)";
    document.getElementById("blurbContainer").style.border = "none";
    $("#blurbText").html("Would I get into less trouble if I had to write or speak every letter and word I wanted to convey?<br><br>Have my communication skills devolved since instant messaging is carried with me in my pocket wherever I go?<br><br>Wouldn't life just be a lot better if I didn't have the ability to scrutinize every word I or others write or say?");
});
$("#notebook").on("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("blurbContainer").style.transform = "scale(1)";
    document.getElementById("blurbContainer").style.background = "linear-gradient(#ffde42, #edb244)";
    document.getElementById("blurbContainer").style.border = "#443913 5px solid";
    $("#blurbText").html("What do I love about my phone?<br><br>What don't I love?<br><br>What changes do I see in myself when I use my phone too much?<br><br>What did I love doing as a kid?<br><br>If I had more time, what would I do?");
});
$("#stamp").on("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("blurbContainer").style.transform = "scale(1)";
    document.getElementById("blurbContainer").style.background = "linear-gradient(#5eca3b, #00b27e)";
    document.getElementById("blurbContainer").style.border = "none";
    $("#blurbText").html("Is there anywhere I use my phone where I don't need it?<br><br>What am I so afraid of in those moments of quiet or boredom?<br><br>Is something out to get me?");
});
$("#homeButton").on("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".navigationPanel").style.display = "grid";
    $("#overlay").on("click", function() {
        document.getElementById("overlay").style.display = "none";
        document.querySelector(".navigationPanel").style.display = "none";
    });
});
$("#prevPage").on("click", function() {
    window.location.assign("../y2k.html");
});
$("#goHome").on("click", function() {
    window.location.assign("../index.html");
});
$("#nextPage").on("click", function() {
    window.location.assign("../socialMedia.html");
});
// WARNING MESSAGE CLOSE
document.getElementById("warning").addEventListener("click", function() {
    document.getElementById("warning").style.display = "none";
});
