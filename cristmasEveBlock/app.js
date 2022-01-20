let clockDays = document.querySelector('.days');
let clockHour = document.querySelector('.hours');
let clockMinutes = document.querySelector('.minutes');
let clockSeconds = document.querySelector('.seconds');
let newYearTime = document.querySelector('.finish');
let countdownBody = document.querySelector('.countdown');

 let currentYear = new Date().getFullYear();
 let futureDate = new Date(currentYear+1,0,1).getTime();



let timerID = setInterval(function () {

        let now = new Date().getTime();
        let time = futureDate - now;

        let days = time > 0 ? Math.floor(time / 60 / 60 / 24 / 1000) : 0;
        let hours = time > 0 ? Math.floor(time / 1000 / 60 / 60) % 24 : 0;
        let minutes = time > 0 ? Math.floor(time  / 60 / 1000) % 60 : 0;
        let seconds = time > 0 ? Math.floor(time / 1000 % 60 ) : 0;
        if(days < 10) {
            days = `0${days}`;
        }
        if(hours < 10) {
            hours = `0${hours}`;
        }
        if(minutes < 10) {
            minutes = `0${minutes}`;
        }
        if(seconds < 10) {
            seconds = `0${seconds}`;
        }

        clockDays.innerHTML = `${days}`;
        clockHour.innerHTML = `${hours}`;
        clockMinutes.innerHTML = `${minutes}`;
        clockSeconds.innerHTML = `${seconds}`;
    }
, 1000);
