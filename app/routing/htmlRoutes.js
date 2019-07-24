//RETRIEVEING DATA

var path = require('path');

//HTML ROUTES
module.exports = function(app){
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    app.get('/home', function(req,res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};