const initialTime = 0.2;
let timeInMin = initialTime * 60;

const timerWindows = document.getElementById("timer") 
const timerWindowsToolbar = document.getElementById("countdown")

document.getElementById("start").addEventListener("click", countdown)


function countdown() {
let timeRemain = timeInMin;

let interval = setInterval(() =>{

let minutes = parseInt(timeRemain / 60, 10);
//Conditional operator = if/else//
minutes = minutes < 10 ? "0" + minutes : minutes;
console.log(minutes)

let seconds = parseInt(timeRemain % 60, 10);
//Conditional operator = if/else//
seconds = seconds < 10 ? "0" + seconds : seconds;
console.log(seconds)

timerWindows.innerHTML = `${minutes} : ${seconds}` 
timerWindowsToolbar.innerHTML = `(${minutes} : ${seconds})` + "  Pomodoro Timer"

timeRemain--

if (timeRemain < 0 ){
    document.getElementById("alarm").play() && clearInterval(interval)
    timerWindowsToolbar.innerHTML = "UNE PAUSE S'IMPOSE !"
}

}, 1000)
}

