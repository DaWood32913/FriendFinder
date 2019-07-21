var friendMatch = require('../data/friends.js');

//ROUTING
module.exports = function(app) {
   
  app.get('/api/friends', function (req, res) {
    res.json(friendMatch);
  });
  
  app.post('/api/friends', function (req, res) {

    
    var newFriend = req.body;
    
    for(var i = 0; i < newFriend.scores.length; i++) {
      if(newFriend.scores[i] == "1 (Yes)") {

        newFriend.scores[i] = 1;
      } else if(newFriend.scores[i] == "3 (No)") {

        newFriend.scores[i] = 3;
      } else {

        newFriend.scores[i] = parseInt(newFriend.scores[i]);
      }
    }
    
    //array for the comparison
    var comparisonArray = [];

    for(var i = 0; i < friendMatch.length; i++) {
      
      var comparedFriend = friendMatch[i];
      var totalDifference = 0;
      
      for(var x = 0; x < comparedFriend.scores.length; x++) {
        var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[x]);
        totalDifference += differenceOneScore;
      }

      comparisonArray[i] = totalDifference;
    }

    var bestFriendNum = comparisonArray[0];
    var bestFriendI = 0;

    for(var i = 1; i < comparisonArray.length; i++) {
      if(comparisonArray[i] < bestFriendNum) {
        bestFriendNum = comparisonArray[i];
        bestFriendI = i;
      }
    }
    
    friendMatch.push(newFriend);
    
    res.json(friendMatch[bestFriendI]);
  });
};