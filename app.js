// app setup
var express = require('express'),
 	bodyParser = require('body-parser'),
 	app = express(),
 	staticRoutes = require('./routes/staticRoutes'),
 	skillsRoutes = require('./routes/skills'),
 	projectRoutes = require('./routes/projects');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set(bodyParser.urlencoded({extended: true}));

//RESTful routing setup
app.use(staticRoutes);
app.use('/skills',skillsRoutes);
app.use('/projects',projectRoutes);

app.get('*', function(req,res){
	res.render("home");
});

// server start
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server started on port "+PORT);
});