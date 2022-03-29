let dist = 0
let slider = document.getElementById("slider")
let right = document.getElementById("commentRight")
let left = document.getElementById("commentLeft")


function sliderRight() {
    dist = dist + 100
    console.log(dist)
    if (dist == 300) {
        dist = 0
    }
    slider.style.transform = "translateX(-" + dist + "%)"
}

function sliderLeft() {
    dist = dist - 100
    console.log(dist)
    if (dist == -100) {
        dist = 200
    }
    slider.style.transform = "translateX(-" + dist + "%)"
}

function takeAndGive() {

}
right.onclick = function() {
    let activePair = document.getElementsByClassName("activePair")[0]
    let nextPair;

    if (activePair.nextElementSibling) {
        nextPair = activePair.nextElementSibling;
    } else {
        nextPair = document.getElementsByClassName("pair")[0]
    }

    activePair.classList.remove("activePair");
    setTimeout(function() {
        nextPair.classList.add("activePair");
    }, 500)
}

left.onclick = function() {
    let activePair = document.getElementsByClassName("activePair")[0]
    let previousPair;
    activePair.classList.remove("activePair");
    if (activePair.previousElementSibling) {
        previousPair = activePair.previousElementSibling;
    } else {
        previousPair = document.getElementsByClassName("pair")[2]
    }
    setTimeout(function() {
        previousPair.classList.add("activePair");
    }, 500)
}