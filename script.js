const newYears = '1 jan 2022'
const day = document.getElementById('days')
const hour = document.getElementById('hours')
const mins = document.getElementById('mins')
const second = document.getElementById('seconds')
const CT = document.getElementById('CT')


function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    // convert millisec to sec
    const seconds = new Date(newYearsDate - currentDate) / 1000

    const days = Math.floor(seconds / 3600 / 24)
    const hours = Math.floor(seconds / 3600 ) % 24
    const minutes = Math.floor(seconds / 60) % 60
    const sec = Math.floor(seconds) % 60

    day.innerHTML = days
    hour.innerHTML = formatTime(hours)
    mins.innerHTML = formatTime(minutes)
    second.innerHTML = formatTime(sec)
    CT.innerHTML = currentDate
    

    // console.log(days, hours, minutes, sec);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

// initial countdown 
countdown()
setInterval(countdown, 1000)

