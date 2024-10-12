var len = document.querySelectorAll(".drum").length;

for(var i = 0; i < len; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickh);

    

}
function clickh(){
    var innerKey = this.innerHTML;
    key(innerKey);
    ba(innerKey);

}

document.addEventListener("keypress", function(event){
    key(event.key);
    ba(event.key);

});

function key(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/tom1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/tom2.mp3');
            audio.play();
        break;  
        case "s":
            var audio1 = new Audio('sounds/tom3.mp3');
            audio1.play();
        break;  
        case "d":
            var audio2 = new Audio('sounds/tom4.mp3');
            audio2.play();
        break;  
        case "j":
            var audio3 = new Audio('sounds/crash.mp3');
            audio3.play();
        break;  
        case "k":
            var audio4 = new Audio('sounds/kickbass.mp3');
            audio4.play();
        break;  
        case "l":
            var audio7 = new Audio('sounds/snare.mp3');
            audio7.play();
        break;
    }

}

function ba(cr){
    var ak = document.querySelector("." + cr);
    ak.classList.add("pressed");
    setTimeout(function(){
        ak.classList.remove("pressed");
    }, 100);

}
