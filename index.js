
document.getElementById('test').addEventListener('click',()=>{
    window.open('../TG/index.html');
})
document.getElementById('test').addEventListener('touch',()=>{
    window.open('../TG/index.html');
})
document.getElementById('flip').addEventListener('click',()=>{
    window.open('../Flip Book/index.html');
})
document.getElementById('flip').addEventListener('touch',()=>{
    window.open('../Flip Book/index.html');
})
document.getElementById('intera').addEventListener('click',()=>{
    window.open('../Interactive/index.html');
})
document.getElementById('intera').addEventListener('touch',()=>{
    window.open('../Interactive/index.html');
})
document.getElementById('anima').addEventListener('click',()=>{
    window.open('../Animations/index.html');
})
document.getElementById('anima').addEventListener('touch',()=>{
    window.open('../Animations/index.html');
})
document.getElementById('audio').addEventListener('click',()=>{
    window.open('../Audio/index.html');
})
document.getElementById('worksheet').addEventListener('click',()=>{
    window.open('../Lesson Plan/index.html');
})
document.getElementById('ans').addEventListener('click',()=>{
    window.open('../Answer Key/ANSWER-KEY.pdf');
})
function exitscreen(){
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
var elem = document.getElementById("introvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
document.getElementById('close').addEventListener('click',()=>{
    document.getElementById('books').style.display='none';
})