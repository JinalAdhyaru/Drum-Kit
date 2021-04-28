//detecting button press
var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrumButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonHTML = this.innerHTML;
        soundPlay(buttonHTML);
        buttonAnimation(buttonHTML);
    });
} 


//detecting keyboard key press
document.addEventListener("keydown",function(event) {
    var keyboardKey = event.key;
    soundPlay(keyboardKey);
    buttonAnimation(keyboardKey);
});

//playing audio
function soundPlay(value) {
    switch (value) {
        case "w":   var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
        case "a":   var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
        case "s":   var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
        case "d":   var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;
        case "j":   var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                    break;
        case "k":   var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break;
        case "l":   var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
        default:    console.log(value);
                    break;
        }
}

//adding animations
function buttonAnimation(e) {
    var activeButton = document.querySelector("." + e);
    console.log(e, activeButton);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
} 