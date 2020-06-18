var currentTrack = null;
var paused = false;

$(document).ready(function() {
    currentTrack = $('#currentTrack').val();

    $("#play").click(function() { play(); });
    $("#stop").click(function() { stop(); });
    $("#pause").click(function() { pause(); });
});

function play() {

    if (!paused) {
        stop();
        currentTrack = $('#currentTrack').val();

        //make sure track starts from the begining each time
        document.getElementById(currentTrack).load();
    }

    document.getElementById(currentTrack).play();
}

function stop() {
    if (currentTrack) {
        document.getElementById(currentTrack).pause();
        paused = false;
    }
}

function pause() {
    paused = true;
    document.getElementById(currentTrack).pause();
}