const express = require('express');
const router = express.Router();
const squadController = require('../controllers/squad.controllers.js');

router.get('/all', squadController.getAllSquads);
router.get('/all/verified', squadController.getAllVerifiedSquads);
router.get('/all/unverified', squadController.getAllUnverifiedSquads);
router.get('/:squadId', squadController.getSquad);
router.post('/new', squadController.createSquad);
router.post('/find', squadController.findSquad);
// router.put('/:squadId', squadController.updateSquad);
//router.delete('/:squadId', squadController.deleteSquad);

module.exports = router;

