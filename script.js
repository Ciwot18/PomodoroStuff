let date1 = new Date();
function printLocTime() {
    console.log("Current Day: "+date1.getFullYear()+"/"+date1.getUTCMonth()+"/"+date1.getDate()+
                "\nCurrent Time:"+date1.getHours()+":"+date1.getMinutes());
    //return date1.getTime();
}

function addMins(dates, min) {
    let date2 = new Date(dates.getTime()+(min*60*1000));
    return date2;
}

function printD(date) {
    printLocTime();
    console.log("Timer end: "+date.getFullYear()+"/"+date.getUTCMonth()+"/"+date.getDate()+
                "\n"+date.getHours()+":"+date.getMinutes());
}

printD(addMins(date1, 25));
//I made a little system to see how to set a timer