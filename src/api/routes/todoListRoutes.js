'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/donners')
    .get(todoList.list_all_donners);


  app.route('/donners/:donnerId')
    .get(todoList.read_a_donner);
};

