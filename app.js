// app setup
var express = require('express'),
 	bodyParser = require('body-parser'),
 	app = express(),
 	path = require('path'),
 	staticRoutes = require('./routes/staticRoutes'),
 	adminRoutes = require('./routes/admin'),
 	mongoose = require('mongoose'),
 	methodOverride = require('method-override');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


// Database 
mongoose.connect('mongodb://localhost/portfolio');

//RESTful routing setup
app.use(staticRoutes);
app.use('/admin',adminRoutes);
app.use(function(req,res,next){
	res.locals.routeInfo = {
		query: req.query,
		origUrl: req.originalUrl
	}
});
app.get('*', function(req,res){
	res.redirect("home");
});

// server start
var PORT = process.env.PORT || 4000;
app.listen(PORT, function(){
    console.log("Server started on port "+PORT);
});