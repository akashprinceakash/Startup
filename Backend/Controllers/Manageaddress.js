const ManageAddress= require('../Models/AddressSchema');

exports.CreateAddress=async(req,res)=>{
      try{
        const result= await ManageAddress.create(req.body)
        res.json(result)
      }
      catch(error){
        res.json(error)
      }
}

exports.getAllAdrress=async(req,res)=>{
    try{
        const result = await ManageAddress.find({})
        res.json(result)
    }
    catch(error){
        res.json(error)
    }
}
exports.deleteAllAdrress=async(req,res)=>{
    try{
      const id=req.params.id;
        const result = await ManageAddress.findByIdAndDelete({_id:id})
        res.json(result)
        
    }
    catch(error){
        res.json(error)
    }
}
// exports.deleteUser=(req,res)=>{
//   const id=req.params.imageID;
//   UserModel.findOneAndDelete({imageID: id})
//   .then(res =>{console.log("item deleted")
//    res.json(res) })
//   .catch(error => res.json(error))
// }