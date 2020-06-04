const counterText = document.getElementById("counterText");

function updateTimer() {
	const minutesLeft = 60 - (new Date(window.performance.now()).getMinutes())
	console.log(minutesLeft)
	if (minutesLeft <= 0) {
		counterText.innerHTML = "Most"
		alert("Moss kezet!");
	} else {
		counterText.innerHTML = `${minutesLeft} perc`;
	}
	
}

setInterval(updateTimer, 1000);
