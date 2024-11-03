const UserModel= require('../Models/Usersschema');

// app.post("/createUser",
  exports.createuser=(req,res)=>{

    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

// app.get("/",
   exports.getUser=(req,res)=>{
      UserModel.find({})
    .then(users => res.json(users))
    .catch(error => res.json(error))
}

// app.get('/getUser/:id',
   exports.getUsersById=(req,res)=>{
    const id=req.params.imageID;
    UserModel.findOne({imageID: id})
    .then(users => res.json(users))
    .catch(error => res.json(error))
}

// app.put('/updateUser/:id' ,
   exports.updateUser=(req,res)=>{
    const id=req.params.imageID;
    UserModel.findOneAndUpdate({imageID: id} , 
        {
        name:req.body.name ,
        content:req.body.content ,
        imageurl:req.body.imageurl,
        imageID:req.body.imageID
    })
    .then(users => res.json(users))
    .catch(error => res.json(error))
}

// app.delete('/deleteUser/:id',
    exports.deleteUser=(req,res)=>{
    const id=req.params.imageID;
    UserModel.findOneAndDelete({imageID: id})
    .then(res =>{console.log("item deleted")
     res.json(res) })
    .catch(error => res.json(error))
}