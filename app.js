function bubble() {
    var clutter = "";

    for(var i = 0; i <= 174; i++) {
        var randomNumber = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector("#pannel-bottom").innerHTML = clutter;
}

bubble();