var mongoose = require('mongoose');

var skillSchema = new mongoose.Schema({
	skillName: String,
	skillDescription: String,
	skillImageUrl: String,
	skillType: String
});

var Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;