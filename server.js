//DeEPENDENCIES
var express = require ('express');
var path = require ('path');

//Express App Set Up
var app = express();
var PORT = process.env.PORT || 8080;

//Allow server to use html files
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTING
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});