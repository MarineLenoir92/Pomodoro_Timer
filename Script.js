const initialTime = 25;
let timeInMin = initialTime * 60;
console.log(timeInMin)

const timerWindows = document.getElementById("timer")

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
//timeRemain = timeRemain == 0 ? 0 : timeRemain - 0
timeRemain--

if (timeRemain < 0 ){
    clearInterval(interval)
}

}, 1000)

}



//countdown()
