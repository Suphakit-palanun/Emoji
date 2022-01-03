var point = 0 ;
var audio = new Audio('1.mp3');
function pop(){
    point += 1;
    audio.play()
    document.getElementById("point").innerHTML = point
}