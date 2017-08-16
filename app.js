// app setup
var express = require('express'),
 	bodyParser = require('body-parser'),
 	app = express(),
 	path = require('path'),
 	staticRoutes = require('./routes/staticRoutes'),
 	skillsRoutes = require('./routes/skills'),
 	projectRoutes = require('./routes/projects'),
 	mongoose = require('mongoose');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set(bodyParser.urlencoded({extended: true}));


// Database 
mongoose.connect('mongodb://localhost/portfolio');

//RESTful routing setup
app.use(staticRoutes);
app.use('/skills',skillsRoutes);
app.use('/projects',projectRoutes);
app.use(function(req,res,next){
	res.locals.routeInfo = {
		query: req.query,
		origUrl: req.originalUrl
	}
});
app.get('*', function(req,res){
	res.render("home");
	next();
});

// server start
var PORT = process.env.PORT || 4000;
app.listen(PORT, function(){
    console.log("Server started on port "+PORT);
});