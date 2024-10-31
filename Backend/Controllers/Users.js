const UserModel= require('../Models/Usersschema');

// app.post("/createUser",
  exports.createuser=(req,res)=>{
    // const { name, content, imageurl, imageID } = req.body;
       // Ensure imageID is not null
    //    if (!imageID) {
    //     return res.status(400).json({ error: "Image ID is required" });
    // }
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
}
// exports.createuser=async(req,res)=>{
//     const user= await UserModel.create({
//        name: req.body.name,
//        content:req.body.content,
//        imageurl:req.body.imageurl,
//        imageID:req.body.imageID
//     })
//     const usersdata = await user.save();
//     return res.json(usersdata)
// }
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