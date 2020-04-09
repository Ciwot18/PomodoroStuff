let check = 1;
let sessionn = 1;
let myVar = null;
let breakMin = 0;

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
                console.log(buttondiv.id);
			} else if (buttondiv.id == "stop") {
                console.log(buttondiv.id);
                stopTimer();
			} else if (buttondiv.id == "right-up") {
				console.log(buttondiv.id);
			} else if (buttondiv.id == "right-down") {
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
    if (check == 0) {
        alert("You need to stop first!");
    } if (check == 1) {
    check = 0;
    startCount(25);
    }
}

function startCount(minutes) {
    let enddt = addMins(createDateInstance(), minutes).getTime();
    myVar = setInterval(updateCount, 1000, enddt);
}

function startBreak(minutes) {
    let enddt = addMins(createDateInstance(), minutes).getTime();
    myVar = setInterval(updateCount, 1000, enddt);
}

function updateCount(enddt) {
    let startdt = createDateInstance().getTime();
    if (enddt>startdt) {
        timerView.innerHTML =  Math.floor((enddt-startdt)/1000/60) + "Minutes and " +Math.floor(((enddt-startdt)%(1000*60))/1000) + " Seconds";
    } else {
        timerView.innerHTML = "Time Expired";
        clearInterval(myVar);
        check = 1;
        breakTime();
        startBreak(breakMin);
        sessionUp();
    }
}

function stopTimer() {
    check = 1;
    clearInterval(myVar);
}

function resetAll() {
    sessionn = 0;
    check = 1;
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
    let dateend = new Date(datest.getTime()+(/*min*/min*1000));
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