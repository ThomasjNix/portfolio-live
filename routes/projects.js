var express = require('express');
var router = express.Router();


// Projects page - INDEX 
router.get('/', function(req,res){
	res.render("projects/index");
});
// Projects page - NEW
router.get('/new', function(req,res){});
// Projects page - SHOW
router.get('/:id', function(req,res){});
// Projects page - EDIT
router.get('/:id/edit', function(req,res){});
// Projects page - CREATE
router.post('/', function(req,res){});
// Projects page - UPDATE
router.put('/:id', function(req,res){});
// Projects page - DESTROY
router.delete('/:id', function(req,res){});

module.exports = router;