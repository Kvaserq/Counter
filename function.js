const birthday = "4 Apr 2023"

const minEl = document.getElementById('minutes');
const secEl = document.getElementById('seconds')
const hrsEl = document.getElementById('hours')
const dsEl = document.getElementById('days')

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (birthdayDate - currentDate) / 1000;
    const dsa = Math.floor(totalSeconds / 3600 / 24);
    const hors = Math.floor(totalSeconds / 3600) % 24;
    const minst = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;
    
    minEl.innerHTML = minst;
    secEl.innerHTML = secs;
    hrsEl.innerHTML = hors;
    dsEl.innerHTML = dsa;
    
}

countdown()

setInterval(countdown, 1000)