var express = require('express');
var app = express();

var routes = require("./routes/todoListRoutes"); //importing route
routes(app); //register the route

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});
