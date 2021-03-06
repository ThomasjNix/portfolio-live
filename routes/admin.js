var express = require('express'),
	router = express.Router(),
	Skill = require('../models/skill'),
	Project = require('../models/project'),
	passport = require('passport');

router.get('/', authenticateAdmin, function(req,res){
	Skill.find({}, function(err, skills){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/');
		}else{
			Project.find({}, function(err, projects){
				if (err){
					console.log(err);
					req.flash("err", "Unable to perform action at this time.");
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
router.get('/skills/new', authenticateAdmin, function(req,res){
	res.render('admin/skills/new')
});
// Admin Skills page - EDIT
router.get('/skills/:id/edit', authenticateAdmin, function(req,res){
	Skill.findById(req.params.id, function(err, skillFound){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/admin');
		}else{
			res.render('admin/skills/edit', {skill : skillFound});
		}
	});
});
// Admin Skills page - CREATE
router.post('/skills', authenticateAdmin, function(req,res){
	Skill.create(req.body.skill, function(err, skillCreated){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/admin');
		}else{
			skillCreated.save();
			req.flash("success", "Created Skill successfully.");
			res.redirect('/admin');
		}
	});
});
// Admin Skills page - UPDATE
router.put('/skills/:id', authenticateAdmin, function(req,res){
	Skill.findByIdAndUpdate(req.params.id, req.body.skill, function(err, skill){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/admin');
		}else{
			req.flash("success", "Updated Skill successfully.");
			res.redirect('/admin');
		}
	});
});
// Admin Skills page - DESTROY
router.delete('/skills/:id', authenticateAdmin, function(req,res){
	Skill.findByIdAndRemove(req.params.id, function(err){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/admin');
		}else{
			req.flash("success", "Removed Skill successfully.");
			res.redirect('/admin');
		}
	})
});

// Admin Projects page - NEW
router.get('/projects/new', authenticateAdmin, function(req,res){
	res.render('admin/projects/new')
});
// Admin Projects page - EDIT
router.get('/projects/:id/edit', function(req,res){
	Project.findById(req.params.id, function(err, projectFound){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/admin');
		}else{
			res.render('admin/projects/edit', {project : projectFound});
		}
	});
});
// Admin Projects page - CREATE
router.post('/projects', authenticateAdmin, function(req,res){
	Project.create(req.body.project, function(err, projectCreated){
		console.log(req.body);
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/admin');
		}else{
			projectCreated.save();
			req.flash("success", "Created Project successfully.");
			res.redirect('/admin');
		}
	});
});
// Admin Projects page - UPDATE
router.put('/projects/:id', authenticateAdmin, function(req,res){
	Project.findByIdAndUpdate(req.params.id, req.body.project, function(err, project){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/admin');
		}else{
			req.flash("success", "Updated Project successfully.");
			res.redirect('/admin');
		}
	});
});
// Admin Projects page - DESTROY
router.delete('/projects/:id', authenticateAdmin, function(req,res){
	Project.findByIdAndRemove(req.params.id, function(err){
		if (err){
			console.log(err);
			req.flash("err", "Unable to perform action at this time.");
			res.redirect('/admin');
		}else{
			req.flash("success", "Removed Project successfully.");
			res.redirect('/admin');
		}
	})
});



router.get('/login', function(req,res){
	res.render('admin/login');
});

router.post('/login', passport.authenticate("local", {
	successRedirect: '/admin',
	failureRedirect: '/admin/login'
}), function(req,res){});

router.get('/logout', function(req,res){
	req.logout();
	req.flash("success", "Successfully signed out.");
	res.redirect('/');
});


function authenticateAdmin(req,res,next){
	if (req.isAuthenticated()){
		return next();
	}
	req.flash("error", "Unable to continue: Insufficient priveledges. Please sign in as an administrator.");
	res.redirect('/admin/login');
};

module.exports = router;