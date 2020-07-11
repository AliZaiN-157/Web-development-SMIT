let sec = document.querySelector('p #sec');
let min = document.querySelector('p #min');
let hrs = document.querySelector('p #hrs');
let Startbtn = document.querySelector('.main #Startbtn');

let Interval;
let ss = 0;
let mm = 0;
let hh = 0;


function Stop() {
    clearInterval(Interval);
    Startbtn.style.pointerEvents = 'visible';
}

function Start() {
    Startbtn.style.pointerEvents = 'none';
    Interval = setInterval(() => {
        if (ss < 59) {
            ss += 1;
            ss < 10 ? sec.innerHTML = '0' + ss : sec.innerHTML = ss;
        }
        else {
            ss = 0;
            ss < 10 ? sec.innerHTML = '0' + ss : sec.innerHTML = ss;
            if (mm < 59) {
                mm += 1;
                mm < 10 ? min.innerHTML = '0' + mm : min.innerHTML = mm;
            }
            else {
                hh += 1
                hh < 10 ? hrs.innerHTML = '0' + hh : hrs.innerHTML = hh;
            }
        }
    }, 1000);
}



