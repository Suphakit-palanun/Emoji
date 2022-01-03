var point = 0 ;
var audio = new Audio('yee.mp3');
function pop(){
    point += 1;
    audio.play()
    document.getElementById("point").innerHTML = point
}