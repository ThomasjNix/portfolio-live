var express = require('express');
var router = express.Router();

// Skills page - INDEX
router.get('/', function(req,res){
	res.render("skills/index",
		{
			skillsCardInfo: {
				front: "Front end skills are those that influence how a web page works on the client side. This includes HTML, CSS, and JavaScript, as well as libraries or frameworks for each.",
				back: "Back end skills are those that change how a client interacts with a server, and how data is processed and sent back to the client. This includes routing, database interaction, authentication, etc.",
				other: "Other skills are those that either don\\'t fit neatly into either front or back end skills, but are still important. Examples are workflow, design structure, team coordination, etc."
			}
		});
});
// Skills page - NEW
router.get('/new', function(req,res){});
// Skills page - SHOW
router.get('/:id', function(req,res){});
// Skills page - EDIT
router.get('/:id/edit', function(req,res){});
// Skills page - CREATE
router.post('/', function(req,res){});
// Skills page - UPDATE
router.put('/:id', function(req,res){});
// Skills page - DESTROY
router.delete('/:id', function(req,res){});

module.exports = router;