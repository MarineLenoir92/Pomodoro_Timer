const initialTime = 25;
let timeInMin = initialTime * 60;
console.log(timeInMin)

const timerWindows = document.getElementById("timer")



function countdown() {

let timeRemain = timeInMin;

setInterval(() =>{

let minutes = parseInt(timeRemain / 60, 10);
//Conditional operator = if/else//
minutes = minutes < 10 ? "0" + minutes : minutes;
console.log(minutes)

let seconds = parseInt(timeRemain % 60, 10);
//Conditional operator = if/else//
seconds = seconds < 10 ? "0" + seconds : seconds;
console.log(seconds)


timerWindows.innerHTML = `${minutes} : ${seconds}` 
//timeInMin = timeInMin <= 0 ? 0 : timeInMin - 1
timeRemain--

}, 1000)

}


countdown()
