const iconMenu1=document.querySelector('.header02 .uil-bars');
const iconMenu2=document.querySelector('.header02 .uil-times');
const header02=document.querySelector('.header02');
iconMenu1.addEventListener('click',()=>{
    header02.classList.add('activeNav');
})
iconMenu2.addEventListener('click',()=>{
    header02.classList.remove('activeNav');
})
document.getElementById('timers').innerHTML ="04" + ":" + 11;
function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
    if (sec < 0) {sec = "59"};
    return sec;
}
startTimer();
function startTimer() {
    var presentTime = document.getElementById('timers').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
        if(m<0){return}
    document.getElementById('timers').innerHTML =m + ":" + s;
    setTimeout(startTimer, 1000);
};








