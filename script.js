console.log("page loaded...");

function playVideo(idName) {
    var x = document.getElementById(idName);
    x.play();
}

function pauseVideo(idName) {
    var x = document.getElementById(idName);
    x.pause();
}
function signInOut(idName) {
    var text = document.getElementById(idName).innerText;
    if (text == 'Login') {
        document.getElementById(idName).innerText = 'Logged Out';
    } else {
        document.getElementById(idName).innerText = 'Login'
    }
}

function subscribe(idName) {
    var text = document.getElementById(idName).innerText;
    if (text == 'Subscribe') {
        document.getElementById(idName).innerText = 'Subscribed';
    } else {
        document.getElementById(idName).innerText = 'Subscribe'
    }
}