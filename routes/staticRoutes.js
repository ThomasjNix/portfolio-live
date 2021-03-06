var express = require('express'),
	router = express.Router(),
	Skill = require('../models/skill'),
	Project = require('../models/project');

// Index
router.get('/', function(req,res){
    res.render("home", {styleLink: '/assets/css/home.css'});
});

// Biography
router.get('/biography', function(req,res){
	res.render("biography", {styleLink: '/assets/css/biography.css'});
});

// Contact page
router.get('/contact', function(req,res){
	res.render("contact", {styleLink: '/assets/css/contact.css'});
});

// Skills page - INDEX
router.get('/skills', function(req,res){
	Skill.find({}, function(err, skillList){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/');
		}else{
			res.render('skills/index', {
				skills: skillList,
				skillsCardInfo: {
					front: "Front end skills are those that influence how a web page works on the client side. This includes HTML, CSS, and JavaScript, as well as libraries or frameworks for each.",
					back: "Back end skills are those that change how a client interacts with a server, and how data is processed and sent back to the client. This includes routing, database interaction, authentication, etc.",
					other: "Other skills are those that either don\\'t fit neatly into either front or back end skills, but are still important. Examples are workflow, design structure, team coordination, etc."
				},
				styleLink: '/assets/css/skills.css'
			});
		}
	});
});

// Projects page - INDEX 
router.get('/projects', function(req,res){
	Project.find({}, function(err, projectList){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/');
		}else{
			res.render('projects/index', {
				projects: projectList,
				projectsCardInfo: {
					my_projects: "These are projects that I have worked on alone, and include some experiences from places I have worked.",
					collab: "These are projects I have worked on with peers."
				},
				styleLink: '/assets/css/projects.css'
			})
		}
	});
});


module.exports = router;