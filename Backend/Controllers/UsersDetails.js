const UserDetails = require('../Models/UsersDeatilsSchema');
// const UserModel = require('../Models/Usersschema')

//app.post("/createDetails",
exports.createDetails=async(req,res)=>{
    // const { imagesid, ...detailsData } = req.body;
    UserDetails.create(req.body)
    .then((details) => res.json({ message: "User details created successfully",details}))
    .catch((error)=>res.json({ message: "Error creating user details", error }))
}
// exports.createDetails =async(req,res) =>{
//  const users= await UserDetails.create({
//     imagesid: req.body.imagesid,
//      item1: req.body.item1,
//      item2: req.body.item2,
//      item3: req.body.item3,
//      item4: req.body.item4,
//      item5: req.body.item5,
//      item6: req.body.item6,
//      item7: req.body.item7,
//      item8: req.body.item8,
//      item9: req.body.item9,
//      item10: req.body.item10,
//      item11: req.body.item11,
//      item12: req.body.item12,
//  })
//  const userdata=await users.save();
//  return res.json(userdata)
// }
// exports.createDetails = async (req, res) => {
//     try {
//       const { imagesid, ...detailsData } = req.body;
  
//       // Check if imagesid exists in UserModel
//       const userExists = await UserModel.findOne({ imageID: imagesid });
//       if (!userExists) {
//         return res.status(400).json({ message: "User with provided imagesid not found" });
//       }
  
//       // If user exists, create user details
//       const userDetails = await UserDetails.create({ imagesid, ...detailsData });
//       res.status(201).json({ message: "User details created successfully", userDetails });
//     } catch (error) {
//       res.status(500).json({ message: "Error creating user details", error });
//     }
//   };
// app.get("/",
exports.getDetails=(req,res)=>{
    UserDetails.find({})
    .then((details) => res.json(details))
    .catch((error)=> res.json(error))
}

// app.get('/getdetails/:imagesid',
exports.getDetailsById=(req,res)=>{
    const id=req.params.imagesid;
    UserDetails.findOne({imagesid: id})
    .then((details)=> res.json(details))
    .catch((error) => res.json(error))
}

// app.put('/updatedetails/:magesid' ,
exports.updateDetails=(req,res)=>{
    const id=req.params.imagesid;
    UserDetails.findOneAndUpdate({imagesid : id}  , {
        // imegeID :req.body.imegeID,
        item1 : req.body.item1,
        item2 : req.body.item2,
        item3 : req.body.item3,
        item4 : req.body.item4,
        item5 : req.body.item5,
        item6 : req.body.item6,
        item7 : req.body.item7,
        item8 : req.body.item8,
        item9 : req.body.item9,
        item10 : req.body.item10,
        item11 : req.body.item11,
        item12 : req.body.item12
    })
    .then((details)=> res.json(details))
    .catch((error)=> res.json(error))
}

// app.delete('/deleteUser/:id',
exports.deleteDetails=(req,res)=>{
    const id=req.params.imagesid;
    UserDetails.findOneAndDelete({imagesid : id})
    .then(response => {
        console.log('successfully deleted')
        response.json(res)
    })
    .catch(error => res.json(error))
}