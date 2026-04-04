const buttons = document.getElementsByTagName("button");
len = buttons.length;

for(i=0; i<len; i++) {
    buttons[i].addEventListener("click",play_sound);
}

function handle_click() {
    alert('Someone clicked!') 
};

function play_sound() {
    var inner_html = this.innerHTML;
    switch_dict(inner_html);
}

function switch_dict(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();    
    }
}
document.addEventListener("keypress", function(event) {
    var key_pressed = event.key;
    switch_dict(key_pressed);
})