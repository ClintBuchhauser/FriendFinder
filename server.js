// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Server & Port
var app = express(); 
var port = process.env.PORT || 3000; 

// Convert each user's results into an array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`)

// Compare user's scores against others, question by question. Add up the differences to calculate "totalDifference"

// Example: 
// * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
// * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
// * Total Difference: **2 + 1 + 2 =** **_5_**

// Use absolute value of the differences - no negatives

// Display the user's most compatible friend as a modal pop-up (name and photo)

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Call before routes
app.use(express.static('app/public'));

//Routes
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//Listen
app.listen(port, () => console.log("Listening on port %s", port));