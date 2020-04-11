let check = true;
let sessionn = 1;
let myVar = null;
let breakMin = 0;
let remainingTime = 0;

const timerView = document.getElementById('time');
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

function breakTime() {
    if (sessionn%5==0 && sessionn!=0) {
        breakView.textContent = "20:00";
        breakMin = 20;
    } else {
        breakView.textContent = "5:00";
        breakMin = 5;
    }
}

function startTimer() {
    if (check == false) {
        alert("You need to stop first!");
    } if (check == true) {
    check = false;
    startCount(25);
    }
}

// let repeat = setInterval();

function startCount(minutes) {
    if (remainingTime != 0) {
        remainingTime /= 60000;
        let enddt = addMins(createDateInstance(), remainingTime).getTime();
        myVar = setInterval(updateCount, 1000, enddt);
    } else {
        let enddt = addMins(createDateInstance(), minutes).getTime();
        myVar = setInterval(updateCount, 1000, enddt);
    }
}

function startBreak(minutes) {
    let enddt = addMins(createDateInstance(), minutes).getTime();
    myVar = setInterval(updateCount, 1000, enddt);
}

function updateCount(enddt) {
    let startdt = createDateInstance().getTime();
    if (enddt>startdt) {
        remainingTime = enddt-startdt;
        if ((enddt-startdt)<60000) {
            timerView.innerHTML =  Math.floor(((enddt-startdt)%(1000*60))/1000) + " sec";
        } else {
            timerView.innerHTML =  Math.floor((enddt-startdt)/1000/60) + " min, " +Math.floor(((enddt-startdt)%(1000*60))/1000) + " sec";
        }
        
    } else {
        remainingTime = 0;
        timerView.innerHTML = "Time Expired";
        clearInterval(myVar);
        check = true;
        breakTime();
        startBreak(breakMin);
        sessionUp();
    }
}

function stopTimer() {
    check = true;
    remainingTime = 0;
    clearInterval(myVar);
}

function pauseTimer() {
    check = true;
    clearInterval(myVar);
}

function resetAll() {
    sessionn = 1;
    check = true;
    sessionView.textContent = sessionn;
    breakTime();
    stopTimer()
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

function printLocTime() {
    date1 = createDateInstance();
    console.log("Current Day: "+date1.getFullYear()+"/"+(date1.getUTCMonth()+1)+"/"+date1.getDate()+
                "\nCurrent Time:"+date1.getHours()+":"+date1.getMinutes());
}

function addMins(datest, min) {
    let dateend = new Date(datest.getTime()+(min*60*1000));
    return dateend;
}

function printD(date) {
    date = createDateInstance();
    console.log("Timer end: "+date.getFullYear()+"/"+(date.getUTCMonth()+1)+"/"+date.getDate()+
                "\n"+date.getHours()+":"+date.getMinutes());
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

//functions for increasing/decreasing the break duration
//but after looking through things more, I don't think we need them.
 function breakTimeUp() {
     let time = document.getElementById('break-time').textContent;
     time = time.substring(0, time.indexOf(":"));
     time++;
     breakMin++;
     let updatedTime = document.getElementById('break-time');
     updatedTime.innerHTML = time+":00";
 }

 function breakTimeDown() {
     let time = document.getElementById('break-time').textContent;
     time = time.substring(0, time.indexOf(":"));
     if (time > 1) {
         time--;
         breakMin--;
         let updatedTime = document.getElementById('break-time');
         updatedTime.innerHTML = time+":00";
     } else {
         alert("Time must be a positive number");
     }
 }