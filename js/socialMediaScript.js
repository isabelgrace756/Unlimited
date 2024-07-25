/**
 * 
 */
document.addEventListener('click', () => {
  const videos = document.querySelectorAll('video');

  videos.forEach(video => {
    video.muted = false;
  });
}, { once: true });

// CHANGES TITLE ON BROWSER TAB PERIODICALLY
function lookAtMeTitle() {
    document.querySelector("title").innerHTML = "LOOK AT ME!";
    setTimeout(socialMediaTitle, 5000);
}
function socialMediaTitle() {
    document.querySelector("title").innerHTML = "Social Media";
    setTimeout(lookAtMeTitle, 5000);
}
setTimeout(lookAtMeTitle, 5000);

// PLAYS AUDIO UPON ANY USER INTERACTION
/* function playAudio() {
    const audio = document.getElementById("audio");
    audio.play();
    document.removeEventListener("click", playAudio);
    document.removeEventListener("keydown", playAudio);
}
document.addEventListener("click", playAudio);
document.addEventListener("keydown", playAudio);
*/ 
document.getElementById("algorithmBlurb").addEventListener('click', function() {
    document.getElementById("algorithmBlurb").style = "overflow-y : scroll";
    document.getElementById("algorithmBlurb").innerHTML = "Restrict distracting social media apps to one device, such as your computer or tablet to minimize your craving for dopamine.<br><br>Make social media a place with a purpose--learning, connection with friends and family, or inspiration.<br><br>Reduce doomscrolling by scheduling meaningless social media time. You won't miss out as much as you think you will, I promise.<br><br>Mute or unfollow those whose content evokes negative feelings.<br><br>Restrict online purchases to a minimum of a weeklong waiting period. If you don't want it a week after initially seeing it, maybe you just wanted it out of convenience.<br><br>"
});
// SHOWS HIDDEN DIVS AND ACTIVATES THEIR ANIMATIONS
function starSpin(element, star) {
    var star = document.getElementById(star);
    var element = document.getElementById(element);
    star.style.display = "block";
    star.style.animationPlayState = "running";
    $(element).on("mousemove", function(e) {
        var x  = e.clientX;
        var y = e.clientY;
        star.style.left = x + "px";
        star.style.top = y + "px";
    });
}

function starStop(element, star) {
    var star = document.getElementById(star);
    star.style.display = "none";
    star.style.animationPlayState = "paused";
    $(element).off("mousemove");
}

$("#prevPage").on("mouseenter", function() {
    starSpin("prevPage", "starOne");
});
$("#prevPage").on("mouseleave", function() {
    starStop("prevPage", "starOne");
});
$("#goHome").on("mouseenter", function() {
    starSpin("goHome", "starTwo");
});
$("#goHome").on("mouseleave", function() {
    starStop("goHome", "starTwo");
});
$("#nextPage").on("mouseenter", function() {
    starSpin("nextPage", "starThree");
});
$("#nextPage").on("mouseleave", function() {
    starStop("nextPage", "starThree");
});

// LINKS
$("#prevPage").on("click", function() {
    window.location.assign('https://unlimitedtheinfoera.com/theiPhone.html');
});
$("#goHome").on("click", function() {
    window.location.assign('https://unlimitedtheinfoera.com/index.html');
});
$("#nextPage").on("click", function() {
    window.location.assign('https://unlimitedtheinfoera.com/futures.html');
});

// TIME RELEASED CSS EVOLVING STYLES

const bgColors = new Array("white", "rgb(94, 202, 59)", "rgb(2, 34, 197)", "rgb(255, 254, 35)", "rgb(233, 56, 0)", "rgb(241, 122, 255)");
const bgToColor = new Map();
bgToColor.set("white", "#0222c5");
bgToColor.set("rgb(94, 202, 59)", "#f17aff");
bgToColor.set("rgb(2, 34, 197)", "white");
bgToColor.set("rgb(255, 254, 35)", "#e93800");
bgToColor.set("rgb(233, 56, 0)", "#fffe23");
bgToColor.set("rgb(241, 122, 255)", "#e93800");
function changeColor(element, element2) {
    var element = document.getElementById(element);
    var element2 = document.getElementById(element2);
    var currentBg = element.style.backgroundColor;

    var bgIndex = bgColors.indexOf(currentBg);
    if (bgIndex == bgColors.length - 1) {
        bgIndex = -1;
    }
    bgIndex++;
    var newBg = bgColors[bgIndex];
    element.style.backgroundColor = newBg;
    var newColor = bgToColor.get(newBg);
    element2.style.color = newColor;
}

setInterval(function() {
    changeColor("leftMarquee", "leftMarqueeText");
}, 50000);
setInterval(function() {
    changeColor("rightMarquee", "rightMarqueeText");
}, 60000);
setInterval(function() {
    changeColor("topMarquee", "topMarqueeText");
}, 30000);
setInterval(function() {
    changeColor("dollarMarquee", "dollarMarqueeText");
}, 10000);

// PAYWALL POPUPS
setTimeout(function () {
    document.getElementById("paywallPopupWindow").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}, 2000);
$("#subscribeButton").on("click", function() {
    $("#overlay").css("display", "none");
    $("#paywallPopupWindow").css("display", "none");
});

// ENDLESS SCROLL VIDEO PLAYER
const videos = new Array("video1.mp4", "video2.mp4", "video3.mp4", "video5.mp4", "video6.mp4", "video7.mp4", "video9.mp4", "video10.mp4", "video12.mp4", "video13.mp4", "video14.mp4");

$("#down").on("click", function() {
    var video = document.getElementById("currentVideo");
    var currentFullPath = video.querySelector("source").src;
  console.log(currentFullPath);
    var substring = "/socialMediaVideos/";
    var cIndex = currentFullPath.indexOf(substring);
  console.log(cIndex);
    var currentSrc = currentFullPath.substring(cIndex + substring.length);
  console.log(currentSrc);
    var currentIndex = videos.indexOf(currentSrc);
  console.log(currentIndex);
    
    if (currentIndex == videos.length - 1) {
        currentIndex = -1;
    }
    currentIndex++;
    currentSrc = "../socialMediaVideos/" + videos[currentIndex];
  console.log(currentSrc);
    video.querySelector("source").src = currentSrc;
    checkAdByIndex(currentIndex);
    video.load();
    video.play();
});
$("#up").on("click", function() {
    var video = document.getElementById("currentVideo");
    var currentFullPath = video.querySelector("source").src;
    var substring = "/socialMediaVideos/";
    var cIndex = currentFullPath.indexOf(substring);
    var currentSrc = currentFullPath.substring(cIndex + substring.length);
    var currentIndex = videos.indexOf(currentSrc);
    
    if (currentIndex == 0) {
        currentIndex = videos.length - 1;
    }
    currentIndex--;
    currentSrc = "../socialMediaVideos/" + videos[currentIndex];
    video.querySelector("source").src = currentSrc;
    checkAdByIndex(currentIndex);
    video.load();
    video.play();
});
function checkAdByIndex(index) {
    if (index == 0) {
        ad1();
    } else if (index == 1) {
        ad2();
    } else if (index == 2) {
        ad3();
    } else if (index == 3) {
        ad4();
    } else if (index == 4) {
        ad5();
    } else if (index == 5) {
        ad6();
    } else if (index == 6) {
        ad7();
    } else if (index == 7) {
        ad8();
    } else if (index == 8) {
        ad9();
    } else if (index == 9) {
        ad10();
    } else if (index == 10) {
        ad11();
    }
}
function ad1() {
    document.getElementById("ad").querySelector("img").src = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQF1XqpoBgsGck-teZsV3GaHy0obkMV6IYFGqx6UEa892CxK6nwpS24gqNwaZbPM8mPTqpDPSh7PoBsyIYNoTD0NMqVLGx2WgTREuZdWvgd0B1Ke_ynoWALAT_-w3WBClFA8IQuwA&usqp=CAc";
    document.getElementById("ad").querySelector("p").innerHTML = "Cute 1pc Light Blue Beauty/Hair Salon SPA Headband $2.90 - Temu";
}
function ad2() {
    document.getElementById("ad").querySelector("img").src = "https://i5.walmartimages.com/seo/Slime-Kit-Slime-Snow-Mud-Hairy-Floam-Slime-Scented-Stress-Relief-No-Kids-Toy-Toys_ee860fa3-27d0-491e-a16b-572b0181f751_1.df97bb6eae43b938be38ae4637d61763.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF";
    document.getElementById("ad").querySelector("p").innerHTML = "Slime Kit Slime Snow Mud Hairy Floam Slime Scented Stress Relief No Kids Toy Toys $14.99 - Walmart";
}
function ad3() {
    document.getElementById("ad").querySelector("img").src = "https://img.kwcdn.com/product/open/2024-06-06/1717680516766-c8823e522fc343859093afa27d3f6d67-goods.jpeg?imageView2/2/w/800/q/70/format/webp";
    document.getElementById("ad").querySelector("p").innerHTML = "500g Magic Sand Set: Fake Sand Game Set for Fun, Sensory Activity, and Creativity - No Confusion $9.97 - Temu";
}
function ad4() {
    document.getElementById("ad").querySelector("img").src = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQYuXSwx4eEYwv10LCkfadPLadxYMTaSb-DviBER2RzF1dtTwh3E0rl0UGwd8aGQfj5yCtHZiUnJjXrCOIFga_X9ujSouP4VD1fQz6faA2C0nESKBCSOs-rVNGpVGGHuAzF864qgBkBWg&usqp=CAc";
    document.getElementById("ad").querySelector("p").innerHTML = "7pairs Classic Russian Volume Eyelash Extension In Cat Eye Style With Mink Hair Material, Natural Looking D Curl Fluffy Fake Eyelashes $2.30 - Shein";
}
function ad5() {
    document.getElementById("ad").querySelector("img").src = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6350/6350837_sd.jpg";
    document.getElementById("ad").querySelector("p").innerHTML = "Minecoins 3,500-Coin In-Game Currency Card $19.99 - Best Buy";
}
function ad6() {
    document.getElementById("ad").querySelector("img").src = "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d160926b622654804b6d19aad81ee4e0.jpg?imageView2/2/w/800/q/70/format/webp";
    document.getElementById("ad").querySelector("p").innerHTML = "Women's Fashion Heightening Platform Shoes, Casual Faux Leather Solid Color Lace Up Sneakers, Versatile Outdoor Shoes $20.27 - Temu";
}
function ad7() {
    document.getElementById("ad").querySelector("img").src = "https://img.kwcdn.com/product/open/2024-03-26/1711460720580-8e158252eb884af9be3b88a5fa93882f-goods.jpeg?imageView2/2/w/800/q/70/format/webp";
    document.getElementById("ad").querySelector("p").innerHTML = "Blue Sky & White Clouds Pvc Window Cling - Matte Finish, Removable Adhesive Decal For Glass Surfaces $9.49 - Temu";
}
function ad8() {
    document.getElementById("ad").querySelector("img").src = "https://img.kwcdn.com/product/fancy/2e29e82e-fbb5-4b7d-964a-e5b4637977c7.jpg?imageView2/2/w/800/q/70/format/webp";
    document.getElementById("ad").querySelector("p").innerHTML = "1Pc Unique Garlic Clove Tabletop Decor For Parties - No Batteries Required, Feather-Free $0.58 - Temu";
}
function ad9() {
    document.getElementById("ad").querySelector("img").src = "https://m.media-amazon.com/images/I/612UPb62sJL._AC_SX695_.jpg";
    document.getElementById("ad").querySelector("p").innerHTML = "Sesame Street Unisex-Child Slippers $12.28 - Amazon";
}
function ad10() {
    document.getElementById("ad").querySelector("img").src = "https://img.kwcdn.com/product/fancy/a3d40a42-f756-482a-b4c6-57995e898f83.jpg?imageView2/2/w/800/q/70/format/webp";
    document.getElementById("ad").querySelector("p").innerHTML = "15.8 Oz. Coffee Grounds, Medium Roast - Contains Chaga, Turkey Tail, Probiotics $18.49 - Temu";
}
// WARNING MESSAGE CLOSE
document.getElementById("warning").addEventListener("click", function() {
    document.getElementById("warning").style.display = "none";
});

