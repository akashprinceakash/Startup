const express = require('express');
const routes = express.Router();


const UsersController = require('../Controllers/Users')
const UserDetailsController = require('../Controllers/UsersDetails')
const ManageuserAddress = require('../Controllers/Manageaddress')
const ManageUserMyOrders = require('../Controllers/MyUserOrders');

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


routes.post("/createaddress", ManageuserAddress.CreateAddress);
routes.get("/getaddress",ManageuserAddress.getAllAdrress);
routes.delete("/deleteaddress/:id",ManageuserAddress.deleteAllAdrress);

routes.post("/createmyorders",ManageUserMyOrders.createMyorders );
routes.get("/getAllorders",ManageUserMyOrders.getAllmyorders );
module.exports=routes;
