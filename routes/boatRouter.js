const express = require('express');
const {isOwnerExists, validateBody} = require("../middleware/validateBody");
const BoatController = require("../controllers/Boat.controller");
const boatRouter = express.Router();

boatRouter.post('/', isOwnerExists, validateBody, BoatController.createBoat); //endpoint
boatRouter.get('/', BoatController.getAllBoats);
boatRouter.get('/:id', BoatController.getBoat);
boatRouter.delete('/:id', BoatController.deleteBoat);
boatRouter.put('/:id', BoatController.updateBoat);

module.exports = boatRouter;
