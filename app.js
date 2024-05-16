var timer = 60;
var score = 0;
var hitRandomNumb = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#score-value").textContent = score;
}

function getNewHit(){
    hitRandomNumb = Math.floor( Math.random () * 10);
    document.querySelector("#hit-value").textContent = hitRandomNumb;
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
            document.querySelector("#pannel-bottom").innerHTML = `<h1>GAME OVER!</h1>  <br> <h3>You Scored ${score}</h3>`;
        }
    },1000)
}


document.querySelector("#pannel-bottom").addEventListener('click', function(details){
    var clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hitRandomNumb) {
        increaseScore();
        bubble();
        getNewHit();
    }
})

runTimer();
bubble();
getNewHit();