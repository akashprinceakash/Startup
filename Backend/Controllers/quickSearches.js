const QuicksearchData=require('../Models/QuickSearch');
exports.getQuickSearch=async(req,res)=>{
    const result =await QuicksearchData.find();
    try{
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).send(err);
    }
}