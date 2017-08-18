var express = require('express'),
	router = express.Router(),
	Skill = require('../models/skill'),
	Project = require('../models/project');

router.get('/', function(req,res){
	Skill.find({}, function(err, skills){
		if (err){
			console.log(err);
			res.redirect('/');
		}else{
			Project.find({}, function(err, projects){
				if (err){
					console.log(err);
					res.redirect('/');
				}else{
					res.render('admin/index', {
						styleLink: '/assets/css/admin.css',
						skills : skills,
						projects: projects
					});
				}
			});
		}
	});
	
})

// Admin Skills page - NEW
router.get('/skills/new', function(req,res){
	res.render('admin/skills/new')
});
// Admin Skills page - EDIT
router.get('/skills/:id/edit', function(req,res){
	
});
// Admin Skills page - CREATE
router.post('/skills', function(req,res){
	Skill.create(req.body.skill, function(err, skillCreated){
		if (err){
			console.log(err);
			res.redirect('/admin');
		}else{
			skillCreated.save();
			console.log("successfully added skill:\n"+skillCreated);
			res.redirect('/admin');
		}
	});
});
// Admin Skills page - UPDATE
router.put('/skills/:id', function(req,res){});
// Admin Skills page - DESTROY
router.delete('/skills/:id', function(req,res){});

// Admin Projects page - NEW
router.get('/projects/new', function(req,res){
	res.render('admin/projects/new')
});
// Admin Projects page - EDIT
router.get('/projects/:id/edit', function(req,res){
	res.render('admin/projects/edit/'+req.params.id);
});
// Admin Projects page - CREATE
router.post('/projects', function(req,res){
	Project.create(req.body.project, function(err, projectCreated){
		console.log(req.body);
		if (err){
			console.log(err);
			res.redirect('/admin');
		}else{
			projectCreated.save();
			console.log("successfully added project:\n"+projectCreated);
			res.redirect('/admin');
		}
	});
});
// Admin Projects page - UPDATE
router.put('/projects/:id', function(req,res){});
// Admin Projects page - DESTROY
router.delete('/projects/:id', function(req,res){});

module.exports = router;