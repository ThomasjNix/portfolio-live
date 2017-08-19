// app setup
var express = require('express'),
	app = express(),
 	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
 	methodOverride = require('method-override'),
 	passport = require('passport'),
 	LocalStrategy = require('passport-local'),
 	path = require('path'),
 	staticRoutes = require('./routes/staticRoutes'),
 	adminRoutes = require('./routes/admin'),
 	Secret = require('./data/config'),
 	User = require('./models/user');

// Server config
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Auth config
app.use(require('express-session')({
	secret: Secret,
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
	res.locals.user = req.user;
	res.locals.routeInfo = {
		query: req.query,
		origUrl: req.originalUrl
	};
	next();
});


// Database 
mongoose.connect('mongodb://localhost/portfolio');

/*
User.register(new User({username: "Admin"}), "P@ssw0rd1!", function(err, user){
	if (err){
		console.log(err);
	}else{
		console.log(user);
	}
})
*/

//RESTful routing setup
app.use(staticRoutes);
app.use('/admin',adminRoutes);

app.get('/*', function(req,res){
	res.redirect("/");
});

// server start
var PORT = process.env.PORT || 4000;
app.listen(PORT, function(){
    console.log("Server started on port "+PORT);
});