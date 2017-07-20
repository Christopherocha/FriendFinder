var express = require('express');
var router = express.Router()

var friends = [{name: "Chris",
    email: "blah@gmail.com"
}];

router.get('/', function(req, res){
    //req.
    res.json(friends);
})

router.post('/', function(req, res){
    console.log(req);
    res.send()
})

module.exports = router;



// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.