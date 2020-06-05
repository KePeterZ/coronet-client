let express = require('express');
let app = express();

// Setup port
const thePort = process.env.PORT || 3000

// Setup ejs and static content
app.set('view engine', 'ejs');
app.use(express.static('static'))

cucc = {
  "news": [
    {
      "title": "hír 1",
      "timetoread": "5 perc",
      "url": "http://localhost:3000"
    },
    {
      "title": "hír2",
      "timetoread": "5 perc",
      "url": "http://localhost:3000"
    }
  ]
}

app.get('/', (req, res) => {
  res.render('index', {cucc: JSON.stringify(cucc)});
});


app.use((req, res) => {
  res.redirect("/");
});

app.listen(thePort, () => {
  console.log('Listening on port ' + thePort)
})