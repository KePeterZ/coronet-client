const counterText = document.getElementById("counterText");
const newsTag = document.getElementById("news");

const theJson = {
  "news": [
    {
      "title": "adam buta",
			"timetoread": "5 perc",
			"url": "http://localhost:3000"
		},
		{
      "title": "peti is buta",
			"timetoread": "5 perc",
			"url": "http://localhost:3000"
    }
  ]
}

theJson.news.forEach((news) => {
	currentNew = document.createElement("div");
	title = document.createElement("h1");
	title.appendChild(document.createTextNode(news.title));
	currentNew.appendChild(title);
	timetoread = document.createElement("h2");
	timetoread.appendChild(document.createTextNode(news.timetoread + " elolvasni"));
	currentNew.appendChild(timetoread);
	link = document.createElement("a");
	link.appendChild(document.createTextNode(news.url));
	link.setAttribute("href", news.url);
	currentNew.appendChild(link);
	currentNew.id = "caption";
	currentNew.style.paddingTop = "40px"

	newsTag.appendChild(currentNew);
});


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
