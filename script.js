console.log("page loaded...");

function playVideo(name) {
    var x = document.getElementById(name);
    x.play();
}

function pauseVideo(name) {
    var x = document.getElementById(name);
    x.pause();
}