var timer = 60;
var score = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#score-value").textContent = score;
}

function getNewHit(){
    var randomNumber = Math.floor( Math.random () * 10);
    document.querySelector("#hit-value").textContent = randomNumber;
}

function bubble() {
    var clutter = "";

    for(var i = 0; i <= 174; i++) {
        var randomNumber = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector("#pannel-bottom").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval( function () {
        if( timer > 0 ) {
            timer-- ;
            document.querySelector("#timer-value").textContent = timer;
        } else {
            clearInterval(timerint);
        }
    },1000)
}

runTimer();
bubble();
getNewHit();