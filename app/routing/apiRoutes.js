var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {

    // GET route with url /api/friends -> display JSON of all friends
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // POST routes /api/friends -> handle incoming survey results & compatability logic
    app.post('/api/friends', function (req, res) {

        //Object for best match
        var bestMatch = {
            name: "",
            photo: "",
            matchDifference: 1000
        };

        // Parse user's survey POST
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        var totalDifference = 0;

        // Loop through all friends 
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            // Loop through all scores
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // Calculate totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If this friend has lower difference than current best match, make this new best match
                if (totalDifference <= bestMatch.matchDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.matchDifference = totalDifference;
                }
            }
        }

        // Save to database
        friends.push(userData);

        // Return JSON with the user's best match.
        res.json(bestMatch);

    });

}