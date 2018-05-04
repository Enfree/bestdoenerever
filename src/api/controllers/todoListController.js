'use strict';


exports.list_all_donners = function(req, res) {
    res.json('yep');
};

exports.read_a_donner = function(req, res) {
  Task.findById(req.params.donnerId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


