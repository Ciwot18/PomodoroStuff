let date1 = new Date();
let check = 1;

const cmddivs = document.querySelectorAll('div');
		
		cmddivs.forEach((buttondiv) => {

            buttondiv.addEventListener('click', (e) => {
			if (buttondiv.id == "play") {
                console.log(buttondiv.id);
                startTimer();
            } else if (buttondiv.id == "reset") {
                console.log(buttondiv.id);
                resetTimer();
			} else if (buttondiv.id == "pause") {
                console.log(buttondiv.id);
			} else if (buttondiv.id == "stop") {
				console.log(buttondiv.id);
			} else if (buttondiv.id == "right-up") {
				console.log(buttondiv.id);
			} else if (buttondiv.id == "right-down") {
				console.log(buttondiv.id);
			} else if (buttondiv.id == "left-up") {
				console.log(buttondiv.id);
			} else if (buttondiv.id == "left-down") {
				console.log(buttondiv.id);
			} else {
                console.log("Other stuff");
            }
			
		  });
        });

function startTimer() {
    if (check == 0) {
        alert("You need to stop first!");
    } if (check == 1) {
    check = 0;
    }
}

function resetTimer() {
    check = 1;
}

function printLocTime() {
    console.log("Current Day: "+date1.getFullYear()+"/"+(date1.getUTCMonth()+1)+"/"+date1.getDate()+
                "\nCurrent Time:"+date1.getHours()+":"+date1.getMinutes());
    //return date1.getTime();
}

function addMins(dates, min) {
    let date2 = new Date(dates.getTime()+(min*60*1000));
    return date2;
}

function printD(date) {
    printLocTime();
    console.log("Timer end: "+date.getFullYear()+"/"+(date.getUTCMonth()+1)+"/"+date.getDate()+
                "\n"+date.getHours()+":"+date.getMinutes());
}

//printD(addMins(date1, 10));
//I made a little system to see how to set a timer