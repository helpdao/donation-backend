const mongoose = require('mongoose');

const { Schema } = mongoose;

const squadSchema = new Schema({
	name:{type:String, unique:true, required:[true, 'Squad Name required']},
	verified:{type:Boolean, required:false, default:false},
	signUpDate: { type: Date, default: Date.now() },
});
module.exports = mongoose.model('Squad', squadSchema);
