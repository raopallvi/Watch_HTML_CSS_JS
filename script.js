//Find Date and time of our system.
const sysTime = new Date();
var secondHand = document.getElementById('second-hand');
var minuteHand = document.getElementById('minute-hand');
var hourHand = document.getElementById('hour-hand');
var tick = new Audio('tick.wav');
var secondHandRotate = sysTime.getSeconds() * 6;
var minuteHandRotate = sysTime.getMinutes() * 6;
var hourHandRotate = (((sysTime.getHours() % 12) * 30) + (sysTime.getMinutes() * 0.5));

secondHand.style.transform = 'rotate(' + sysTime.getSeconds() * 6 + 'deg)';
minuteHand.style.transform = 'rotate(' + sysTime.getMinutes() * 6 + 'deg)';
hourHand.style.transform = 'rotate(' + (((sysTime.getHours() % 12) * 30) + (sysTime.getMinutes() * 0.5)) + 'deg)';

setInterval(function () {
    secondHandRotate += 6;
    tick.play();
    secondHand.style.transform = 'rotate(' + secondHandRotate + 'deg)';
    if (secondHandRotate == 360) {
        secondHandRotate = 0;
        minuteHandRotate += 6;
        minuteHand.style.transform = 'rotate(' + minuteHandRotate + 'deg)';
        hourHandRotate += 0.5;
        hourHand.style.transform = 'rotate(' + hourHandRotate + 'deg)';
    }
    if (minuteHandRotate == 360) {
        minuteHandRotate = 0;
    }
    if (hourHandRotate == 360) {
        hourHandRotate = 0;
    }
}, 1000);