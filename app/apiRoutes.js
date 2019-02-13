// Load data
const friends = require("../data/friends");

module.exports = function (app) {

    // GET route to /api/friends to display JSON of all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // POST route to /api/friends to handle incoming survery results and compatibility logic
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
    });

    // compare difference between current user's scores against other users for each question 

    // add up the differences to calculate totalDifference

    // find closest match (user with least amount of difference) and display as a modal

};