let seconds = 0;  
const secondsElement = document.getElementById('seconds');

setInterval(function() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;  
    }
    secondsElement.textContent = seconds; 
}, 1000);
