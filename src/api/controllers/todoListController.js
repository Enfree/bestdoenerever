'use strict';


exports.list_all_donners = function(req, res) {
//	https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=YOUR_API_KEY
    res.json('yep');
};

exports.read_a_donner = function(req, res) {
  Task.findById(req.params.donnerId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


