let dist = 0
let slider = document.getElementById("slider")
let right = document.getElementById("commentRight")
let left = document.getElementById("commentLeft")
let callMe = document.getElementsByClassName("modal")[0]
let slides = document.querySelector(".sliderContainer")

function runSlider() {
    if (dist === slider.children.length) {
        dist = 0
    }

    let sliderParent = slider.parentElement.clientWidth

    slider.style.transform = `translateX(-${sliderParent * dist}px)`
    dist++
}

setInterval(() => {
    runSlider()
}, 2000)

function takeAndGive() {}

function show() {
    callMe.style.display = "block";
    callMe.style.opacity = "1";
}

callMe.onclick = function() {
    callMe.style.opacity = "0"
    callMe.style.display = "none"

}

callMe.children[0].onclick = function(event) {
    event.stopPropagation(); //остановить распростронение
}