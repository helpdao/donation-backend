const Squad = require('../models/squad.models.js');
const etherumValidator = require('../middlewares/etherumAddressValidator.middlewares.js');
/*AUTHOR: w0xter
 *If you have any doubt you can find me in the helpDAO's discord as w0xter.
 *This is a simple CRUD to manage the squads of HelpDAO donation's portal.
 *Lets try to keep it as clean as possible.
 * TODO: 
 * - I've didn't implement the verification controller because we have 
 *   to think a little bit about how to manage the squad's verification.
 * - The Squad's update and delete controllers are implemented but commented 
 *   in the Squad's routes because we need to determine who has 
 *   the power to execute this request.
 * - Maybe a login implementation too? (For supervisors)
 * */
module.exports.createSquad = async (req, res) => {
	let squad= new Squad(req.body);
	squad.save((err, newSquad) => {
		if(err) return res.status(400).send({message:'Error saving the new squad', err});
		return res.status(200).send({message:'New squad created', newSquad});
	});
}
module.exports.deleteSquad = async (req, res) => {
	const squadId = req.params;
	await Squad.findByIdAndRemove(squadId, (err, squad) => {
		if(err) return res.status(500).send({message:'Error removing the squad', err});
		return res.status(200).send({message:'Squad removed correctly',squad});
	})
}
module.exports.updateSquad = async (req, res) => {
	//Review this, because it's failing
	let squadId = req.params;
	let body = req.body;
	await Squad.findByIdAndUpdate(squadId, {$set:body}, { new: true }, (err, squad) => {
 		if (err) return res.status(500).send({ message:'Error updating the squad',err });
		return res.status(200).send({ message:'Squad updated', squad });
 	 });
}
module.exports.getSquad = async (req, res) => {
	let squadId = req.params.squadId;
	console.log(squadId)
	await Squad.findById(squadId, (err, squad) => {
		if(err) return res.status(500).send({message:'Error finding squad', err});
		return res.status(200).send({squad});
	});
}
module.exports.findSquad = async (req, res) => {
	let param = req.body;
	await Squad.find(param, (error, squad) => {
	if (error) return res.status(404).send({ message: 'No squad found', error });
	return res.status(200).send(squad);
	});
}
module.exports.getAllSquads = async (req, res) => {
	await Squad.find({}, (err, squads) => {
		if(err) return res.status(500).send({message:'Error getting all the squads', err});
		return res.status(200).send({squads});
	});
}
module.exports.getAllVerifiedSquads = async (req, res) => {
	await Squad.find({verified:true}, (err, squads) => {
		if(err) return res.status(500).send({message:'Error getting all the verified squads', err});
		return res.status(200).send({squads});
	});
}
module.exports.getAllUnverifiedSquads = async (req, res) => {
	 await Squad.find({verified:false}, (err, squads) => {
		if(err) return res.status(500).send({message:'Error getting all the unverifieds squads', err});
		return res.status(200).send({squads});
	});
}

