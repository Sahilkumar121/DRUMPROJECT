var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerhtml = this.innerHTML;

        switch(buttonInnerhtml) {
            case document.querySelectorAll(".drum")[0].innerHTML:   
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case document.querySelectorAll(".drum")[1].innerHTML:
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            case document.querySelectorAll(".drum")[2].innerHTML:
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case document.querySelectorAll(".drum")[3].innerHTML:
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case document.querySelectorAll(".drum")[4].innerHTML:
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case document.querySelectorAll(".drum")[5].innerHTML:
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case document.querySelectorAll(".drum")[6].innerHTML:
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            default:
                console.log(this.innerHTML);
        }
    });
}



