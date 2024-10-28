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
    const id=req.params.id;
    UserModel.findById({_id: id})
    .then(users => res.json(users))
    .catch(error => res.json(error))
}

// app.put('/updateUser/:id' ,
   exports.updateUser=(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id: id} , {
        name:req.body.name ,
        email:req.body.email ,
        age:req.body.age
    })
    .then(users => res.json(users))
    .catch(error => res.json(error))
}

// app.delete('/deleteUser/:id',
    exports.deleteUser=(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res =>{console.log("backend error")
     res.json(res) })
    .catch(error => res.json(error))
}