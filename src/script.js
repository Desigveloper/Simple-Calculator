// Time script
// This script updates the current time every second
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

// Calculator script
// This script implements a simple calculator

