let check = true;
let sessionn = 1;
let myVar = null;
let breakMin = 0;
let breakAddMin = 0;
let breakLessMin = 0;
let remainingTime = 0;

const timerView = document.getElementById('time');
const titleView = document.getElementById('title');
const sessionView = document.querySelector('#session-default');
sessionView.textContent = sessionn;
const breakView = document.querySelector('#break-default');

const cmddivs = document.querySelectorAll('div');
		cmddivs.forEach((buttondiv) => {

            buttondiv.addEventListener('click', (e) => {
			if (buttondiv.id == "play") {
                console.log(buttondiv.id);
                startTimer();
            } else if (buttondiv.id == "reset") {
                console.log(buttondiv.id);
                resetAll();
			} else if (buttondiv.id == "pause") {
                pauseTimer();
                console.log(buttondiv.id);
			} else if (buttondiv.id == "stop") {
                console.log(buttondiv.id);
                stopTimer();
			} else if (buttondiv.id == "right-up") {
                breakTimeUp()
				console.log(buttondiv.id);
			} else if (buttondiv.id == "right-down") {
                breakTimeDown()
                console.log(buttondiv.id);
			} else if (buttondiv.id == "left-up") {
                console.log(buttondiv.id);
                sessionUp();
			} else if (buttondiv.id == "left-down") {
                console.log(buttondiv.id);
                sessionDown();
			} else {
                //console.log("Other stuff");
            }
		});
    });


function startTimer() {
    if (check == false) {
        alert("You need to stop first!");
    } if (check == true) {
    check = false;
    startCount(25);
    }
}

function startCount(minutes) {
    if (remainingTime != 0) {
        remainingTime /= 60000;
        let enddt = addMins(createDateInstance(), remainingTime).getTime();
        myVar = setInterval(updateCount, 800, enddt);
    } else {
        let enddt = addMins(createDateInstance(), minutes).getTime();
        myVar = setInterval(updateCount, 800, enddt);
    }
}

function startBreak(minutes) {
    let enddt = addMins(createDateInstance(), minutes).getTime();
    myVar = setInterval(updatePause, 800, enddt);
}

function updateCount(enddt) {
    titleView.innerHTML = "Session";
    let startdt = createDateInstance().getTime();
    if (enddt>startdt) {
        remainingTime = enddt-startdt;
        if (remainingTime<60000) {
            timerView.innerHTML =  Math.floor((remainingTime%(1000*60))/1000) + " sec";
        } else {
            timerView.innerHTML =  Math.floor(remainingTime/1000/60) + " min, " +Math.floor((remainingTime%(1000*60))/1000) + " sec";
        }
    } else {
        remainingTime = 0;
        clearInterval(myVar);
        breakTime();
        startBreak(breakMin);     
    }
}

function updatePause(enddt) {
    titleView.innerHTML = "Break Time";
    let startdt = createDateInstance().getTime();
    if (enddt>startdt) {
        remainingTime = enddt-startdt;
        if (remainingTime<60000) {
            timerView.innerHTML =  Math.floor((remainingTime%(1000*60))/1000) + " sec";
        } else {
            timerView.innerHTML =  Math.floor(remainingTime/1000/60) + " min, " +Math.floor((remainingTime%(1000*60))/1000) + " sec";
        }
    } else {
        remainingTime = 0;
        clearInterval(myVar);
        startCount(25);
        sessionUp();
        breakTime();
    }
}

function stopTimer() {
    check = true;
    clearInterval(myVar);
    if (remainingTime<60000) {
        timerView.innerHTML =  Math.floor((remainingTime%(1000*60))/1000) + " sec<br>Time Stopped, press<br>Play to restart";
    } else {
        timerView.innerHTML =  Math.floor(remainingTime/1000/60) + " min, " +
                            Math.floor((remainingTime%(1000*60))/1000) + " sec<br>Time Stopped, press<br>Play to restart";
    }
    remainingTime = 0;
}

function pauseTimer() {
    check = true;
    clearInterval(myVar);
    if (remainingTime<60000) {
        timerView.innerHTML =  Math.floor((remainingTime%(1000*60))/1000) + " sec<br>Time Paused";
    } else {
        timerView.innerHTML =  Math.floor(remainingTime/1000/60) + " min, " +
                            Math.floor((remainingTime%(1000*60))/1000) + " sec<br>Time Paused";
    }
}

function resetAll() {
    sessionn = 1;
    check = true;
    sessionView.textContent = sessionn;
    timerView.innerHTML = "25:00";
    breakTime();
    remainingTime = 0;
    clearInterval(myVar);
}

function sessionUp() {
    sessionn++;
    sessionView.textContent = sessionn;
    breakTime();
}

function sessionDown() {
    if (sessionn>1) {
        sessionn--;
        sessionView.textContent = sessionn;
        breakTime();
    } else {
        alert("The session number cannot be negative");
    }
}

function breakTime() {
    if (sessionn%5==0 && sessionn!=0) {
        breakMin = 20+breakAddMin-breakLessMin;
        breakView.textContent = breakMin+":00";
    } else {
        breakMin = 5+breakAddMin-breakLessMin;
        breakView.textContent = breakMin+":00";
    }
}

function printLocTime() {
    date1 = createDateInstance();
    console.log("Current Day: "+date1.getFullYear()+"/"+(date1.getUTCMonth()+1)+"/"+date1.getDate()+
                "\nCurrent Time:"+date1.getHours()+":"+date1.getMinutes());
}

function addMins(datest, min) {
    let dateend = new Date(datest.getTime()+(min*60*1000));
    return dateend;
}

function sleep(delay) { //delay measured in ms
    let start = createDateInstance().getTime();
    while (createDateInstance().getTime() < start + delay) {

    }
}

function createDateInstance() {
    let dateInstance = new Date();
    return dateInstance;
}

function breakTimeUp() {
     breakAddMin++;
     breakTime();
 }

 function breakTimeDown() {
     if (breakMin > 1) {
         breakLessMin--;
         breakTime();
     } else {
         alert("Time must be a positive number");
     }
 }