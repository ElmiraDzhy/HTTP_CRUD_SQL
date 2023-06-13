const express = require('express');
const {validateUser} = require("../middleware/validateBody");
const UserController = require("../controllers/User.controller");

const userRouter = express.Router();

userRouter.post('/', validateUser, UserController.createUser);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUser);
userRouter.delete('/:id', UserController.deleteUser);
userRouter.put('/:id', UserController.updateUser);
userRouter.post('/:id', UserController.grabBoatForUser);

module.exports = userRouter;