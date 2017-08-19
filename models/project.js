var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
	projectName: String,
	projectDescription: String,
	projectImageUrl: String,
	projectType: String
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;