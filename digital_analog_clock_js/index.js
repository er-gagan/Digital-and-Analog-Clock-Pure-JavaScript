setInterval(() => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    // Digital Clock Logic Start
    // 12 hour format logic
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    if (String(hours).length == 1) {
        hours = "0" + String(hours)
    }
    if (String(minutes).length == 1) {
        minutes = "0" + String(minutes)
    }
    if (String(seconds).length == 1) {
        seconds = "0" + String(seconds)
    }
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById("digitalClock").innerText = strTime

    // Analog Clock Logic Start
    hrotation = 30 * hours + minutes / 2;
    mrotation = 6 * minutes;
    srotation = 6 * seconds;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);