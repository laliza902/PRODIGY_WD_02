let [milliseconds, seconds, minutes] = [0,0,0];
let timeRef =  document.querySelector(".timer");
let int = null;
let lapItaym = 0;
const laps = document.getElementsByClassName("laps")[0];

document.querySelector(".play").addEventListener("click",()=>{
    if(int !==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.querySelector(".pause").addEventListener("click",() =>{
    clearInterval(int);
});

document.querySelector(".reset").addEventListener("click",() =>{
    clearInterval(int);
    [milliseconds,seconds,minutes]=[0,0,0];
    timeRef.innerHTML = "00 : 00 : 000";

    laps.innerHTML = "";
});



function displayTimer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10? "0"+ minutes : minutes;
    let s = seconds < 10? "0"+ seconds : seconds;
    let ms = milliseconds < 10?  "00" + milliseconds : milliseconds < 100? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${m} : ${s} : ${ms}`;
}

document.querySelector(".mark").addEventListener("click",() => {
    const li = document.createElement("li");
    const lapNumber = document.createElement("span");
    const lapTime = document.createElement("span"); 
    const total = document.createElement("span");

    li.setAttribute("class", "lap-item");
    lapNumber.setAttribute("class", "lap");
    lapTime.setAttribute("class", "lap-time"); 
    total.setAttribute("class", "total");

    lapNumber.innerHTML = `#${++lapItaym}`;
    lapTime.innerHTML = `${minutes} : ${seconds} : ${milliseconds}`;

    li.append(lapNumber, lapTime);
    laps.append(li); 
});
