let [milliSeconds,seconds,minutes,hours] = [0,0,0,0];
let timeref=document.querySelector(".time");
let int=null;

document.getElementById("Start").addEventListener("click",()=>{
    if(int !==null){
        clearInterval(int);
    }
    int =setInterval(displayTimer,10);
});


document.getElementById("Stop").addEventListener("click",()=>{
        clearInterval(int);
});

document.getElementById("Reset").addEventListener("click",()=>{
   clearInterval(int);
   [milliSeconds,seconds,minutes,hours] = [0,0,0,0];
   timeref.innerHTML="00 : 00 : 00 : 000";
});

function displayTimer(){
    milliSeconds +=10;
    if(milliSeconds == 1000){
        milliSeconds = 0;
        seconds++;
     if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
     }
    }

    let h = hours <10? "0" +hours:hours;
    let m = minutes <10? "0" +minutes :minutes;
    let s = seconds <10? "0" +seconds:seconds;
    let ms = milliSeconds <10? "00" +milliSeconds :milliSeconds <100 ?"0" +milliSeconds:milliSeconds;

    timeref.innerHTML = `${h} :${m} :${s} :${ms}`;
}