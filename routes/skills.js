var express = require('express');
var router = express.Router();

// Skills page - INDEX
router.get('/', function(req,res){
	res.render("skills/index");
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