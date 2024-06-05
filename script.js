function updateClock() {
    let now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

