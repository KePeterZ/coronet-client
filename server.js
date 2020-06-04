let express = require('express');
let app = express();

// Setup port
const thePort = process.env.PORT || 3000

// Setup ejs and static content
app.set('view engine', 'ejs');
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index', {cucc:"1"});
});


app.use((req, res) => {
  res.redirect("/");
});

app.listen(thePort, () => {
  console.log('Listening on port ' + thePort)
})