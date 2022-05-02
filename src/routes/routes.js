const express = require('express');

const routerUser = express.Router()
const userController = require('../controller/userController');

routerUser.get('/users/', userController.getUsers);
routerUser.get('/users/:id', userController.getUser);
routerUser.post('/users/', userController.createUser);
routerUser.put('/users/:id', userController.updateUser);
routerUser.delete('/users/', userController.deleteUsers);
routerUser.delete('/users/:id', userController.deleteUser);

module.exports = routerUser;