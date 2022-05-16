let initialTime = 25;
let timeInMin = initialTime * 60;
let timeRemain = timeInMin;
var startTimer;


const timerWindows = document.getElementById("timer") 
const timerWindowsToolbar = document.getElementById("countdown")


document.getElementById("start").addEventListener("click", function start(){
    if(startTimer === undefined){
        startTimer = setInterval(countdown, 1000)
    }
    else{
        alert("Le Timer est déjà en marche")
    }
})

document.getElementById("reset").addEventListener("click", function(){
    reset()
})

document.getElementById("stop").addEventListener("click", function(){
    stop()
})


function countdown() {
let minutes = parseInt(timeRemain / 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
console.log(minutes)

let seconds = parseInt(timeRemain % 60, 10);
seconds = seconds < 10 ? "0" + seconds : seconds;
console.log(seconds)

timerWindows.innerHTML = `${minutes} : ${seconds}` ;
timerWindowsToolbar.innerHTML = `(${minutes} : ${seconds})` + "  Pomodoro Timer";

timeRemain--

if (timeRemain < 0) {
    document.getElementById("alarm").play() && clearInterval(startTimer);
    timerWindowsToolbar.innerHTML = "UNE PAUSE S'IMPOSE !";
}
}


function reset(){
    clearInterval(startTimer);
    timeRemain = initialTime * 60
    startTimer = undefined
    timerWindows.innerHTML = "25 : 00" ;
    timerWindowsToolbar.innerHTML = "(25 : 00)"  + "  Pomodoro Timer";
}

function stop(){
    clearInterval(startTimer);
    startTimer = undefined;
    timerWindows.innerHTML = `${minutes} : ${seconds}` ;
    timerWindowsToolbar.innerHTML = `(${minutes} : ${seconds})` + "  Pomodoro Timer";
}

