var path = require('path');

module.exports = function (app) {

    // GET Route to /survey -> displays the survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // Default, catch-all route --> displays home.html
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

};