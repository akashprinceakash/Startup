const express = require('express');
const routes = express.Router();

// const quicksearchController = require('../Controllers/quickSearches');
const UsersController = require('../Controllers/Users')
const UserDetailsController = require('../Controllers/UsersDetails')
// routes.get('/quicksearch',quicksearchController.getQuickSearch);

routes.post("/createUser",UsersController.createuser);
routes.get("/users",UsersController.getUser);
routes.get("/getUser/:imageID",UsersController.getUsersById);
routes.put("/updateUser/:imageID",UsersController.updateUser);
routes.delete("/deleteUser/:imageID", UsersController.deleteUser);



routes.post("/createdetails",UserDetailsController.createDetails);
routes.get("/getdetails",UserDetailsController.getDetails);
routes.get("/getdetails/:imagesid",UserDetailsController.getDetailsById);
routes.put("/updatedetails/:imagesid",UserDetailsController.updateDetails);
routes.delete("/deletedetails/:imagesid",UserDetailsController.deleteDetails);
module.exports=routes;
