const Squad = require("../models/squad.models.js");
const web3 = require("web3");
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
  try {
    const newSquad = new Squad(req.body);
    //Checking if the daoAddress is valid
    isAddress = await web3.utils.isAddress(newSquad.daoAddress);
    if (isAddress) {
      await newSquad.save();
      return res.status(200).send({ message: "New squad created", newSquad });
    } else {
      return res
        .status(500)
        .send({ message: "The address is not valid", newSquad });
    }
  } catch (err) {
    return res.status(400).send({ message: "Error saving the new squad", err });
  }
};

module.exports.deleteSquad = async (req, res) => {
  try {
    const squadId = req.params;
    await Squad.findByIdAndRemove(squadId, (err, squad) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error removing the squad", err });
      return res
        .status(200)
        .send({ message: "Squad removed correctly", squad });
    });
  } catch (err) {
    return res.status(500).send({ message: "Error removing the squad", err });
  }
};

module.exports.updateSquad = async (req, res) => {
  try {
    const { squadId } = req.params;
    const { squadDetails } = req.body;
    const squad = await Squad.findOneAndUpdate(
      squadId,
      { $set: squadDetails },
      { upsert: true }
    );
    return res.status(200).send({ message: "Squad updated", squad });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Error removing the squad", err });
  }
};

module.exports.getSquad = async (req, res) => {
  try {
    let squadId = req.params.squadId;
    console.log(squadId);
    await Squad.findById(squadId, (err, squad) => {
      if (err)
        return res.status(500).send({ message: "Error finding squad", err });
      return res.status(200).send({ squad });
    });
  } catch (err) {
    return res.status(500).send({ message: "Error removing the squad", err });
  }
};

module.exports.findSquad = async (req, res) => {
  try {
    let param = req.body;
    await Squad.find(param, (error, squad) => {
      if (error)
        return res.status(404).send({ message: "No squad found", error });
      return res.status(200).send(squad);
    });
  } catch (err) {
    return res.status(500).send({ message: "Error removing the squad", err });
  }
};

module.exports.getAllSquads = async (req, res) => {
  try {
    await Squad.find({}, (err, squads) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error getting all the squads", err });
      return res.status(200).send({ squads });
    });
  } catch (err) {
    return res.status(500).send({ message: "Error removing the squad", err });
  }
};

module.exports.getAllVerifiedSquads = async (req, res) => {
  try {
    await Squad.find({ verified: true }, (err, squads) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error getting all the verified squads", err });
      return res.status(200).send({ squads });
    });
  } catch (err) {
    return res.status(500).send({ message: "Error removing the squad", err });
  }
};

module.exports.getAllUnverifiedSquads = async (req, res) => {
  try {
    await Squad.find({ verified: false }, (err, squads) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error getting all the unverifieds squads", err });
      return res.status(200).send({ squads });
    });
  } catch (err) {
    return res.status(500).send({ message: "Error removing the squad", err });
  }
};
