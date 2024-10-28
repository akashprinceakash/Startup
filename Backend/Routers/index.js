const express = require('express');
const routes = express.Router();

const quicksearchController = require('../Controllers/quickSearches');
const UsersController = require('../Controllers/Users')
routes.get('/quicksearch',quicksearchController.getQuickSearch);

routes.post("/createUser",UsersController.createuser);
routes.get("/users",UsersController.getUser);
routes.get("/getUser/:id",UsersController.getUsersById);
routes.put("/updateUser/:id",UsersController.updateUser);
routes.delete("/deleteUser/:id", UsersController.deleteUser);
module.exports=routes;
